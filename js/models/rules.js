/**
 * RULES & POINTS ENGINE - CAMPEONATO PANGARÉ DE KART
 * Regras oficiais de pontuação, descartes, bonificação de melhor volta e classificação.
 */

const ChampionshipRules = {
  // Pontuação padrão por posição de chegada
  POINTS_TABLE_DEFAULT: {
    1: 80,
    2: 74,
    3: 66,
    4: 62,
    5: 60,
    6: 58,
    7: 56,
    8: 54,
    9: 52,
    10: 50,
    11: 48,
    12: 46,
    13: 44,
    14: 42,
    15: 40,
    16: 38,
    17: 36,
    18: 34,
    19: 32,
    20: 30,
    21: 28,
    22: 26,
    23: 24,
    24: 22
  },

  // Pontuação específica para Força Livre quando aplicável (ex: 2º = 72)
  POINTS_TABLE_FL: {
    1: 80,
    2: 72,
    3: 66,
    4: 62,
    5: 60,
    6: 58,
    7: 56,
    8: 54,
    9: 52,
    10: 50,
    11: 48,
    12: 46,
    13: 44,
    14: 42,
    15: 40,
    16: 38
  },

  /**
   * Calcula os pontos para uma posição de chegada e observações
   */
  calculatePoints(position, categoryId = 'g1', obs = '') {
    if (!position || position === '-' || position === 'ds') return 0;
    
    const posNum = parseInt(position, 10);
    if (isNaN(posNum) || posNum <= 0) return 0;

    const table = (categoryId === 'fl') ? this.POINTS_TABLE_FL : this.POINTS_TABLE_DEFAULT;
    let basePts = table[posNum] || 0;

    // Bonificação por Melhor Volta (mv) -> +2 pontos extras (ex: FL 80 + 2 = 82)
    if (obs && obs.toLowerCase().includes('mv')) {
      basePts += 2;
    }

    return basePts;
  },

  /**
   * Processa e calcula a classificação individual dos pilotos de uma categoria
   */
  calculateDriverStandings(category) {
    if (!category || !category.teams) return [];

    const driverList = [];

    category.teams.forEach(team => {
      team.drivers.forEach(driver => {
        const results = driver.results || [];
        let totalWithoutDiscard = 0;
        const validPoints = [];
        let wins = 0;
        let podiums = 0;
        let bestLaps = 0;

        results.forEach(res => {
          const pts = (typeof res.pts === 'number') ? res.pts : 0;
          totalWithoutDiscard += pts;
          validPoints.push(pts);

          if (res.cheg === 1 || res.cheg === '1') wins++;
          if ([1, 2, 3, '1', '2', '3'].includes(res.cheg)) podiums++;
          if (res.obs && res.obs.toLowerCase().includes('mv')) bestLaps++;
        });

        // Cálculo de descarte individual (descarta o menor resultado entre etapas válidas)
        let totalWithDiscard = totalWithoutDiscard;
        if (validPoints.length > 1) {
          const minPts = Math.min(...validPoints);
          totalWithDiscard = totalWithoutDiscard - minPts;
        }

        driverList.push({
          name: driver.name,
          teamNum: team.num,
          teamName: team.name,
          teamColor: team.color || '#3b82f6',
          teamTextColor: team.textColor || '#ffffff',
          results: results,
          totalWithoutDiscard: totalWithoutDiscard,
          totalWithDiscard: totalWithDiscard,
          wins: wins,
          podiums: podiums,
          bestLaps: bestLaps
        });
      });
    });

    // Ordenação: Pontos sem descarte (ou com descarte), Vitórias, Pódios, Melhor Volta
    driverList.sort((a, b) => {
      if (b.totalWithoutDiscard !== a.totalWithoutDiscard) {
        return b.totalWithoutDiscard - a.totalWithoutDiscard;
      }
      if (b.wins !== a.wins) return b.wins - a.wins;
      if (b.podiums !== a.podiums) return b.podiums - a.podiums;
      if (b.bestLaps !== a.bestLaps) return b.bestLaps - a.bestLaps;
      return a.name.localeCompare(b.name);
    });

    // Atribui posições de classificação
    driverList.forEach((driver, idx) => {
      driver.position = idx + 1;
    });

    return driverList;
  },

  /**
   * Processa e calcula a classificação das equipes de uma categoria COM DESCARTE.
   * Regra oficial da planilha: Em cada etapa, a equipe pontua com seu melhor piloto
   * (removendo/descartando o menor ponto da dupla). Ao longo de múltiplas etapas, 
   * também é aplicado o descarte da pior etapa da equipe.
   */
  calculateTeamStandings(category) {
    if (!category || !category.teams) return [];

    const teamList = [];

    category.teams.forEach(team => {
      let teamWins = 0;
      let teamPodiums = 0;
      const stageScores = []; // Pontos da equipe por etapa

      // Identifica todas as etapas disputadas
      const driver1 = team.drivers[0];
      const driver2 = team.drivers[1];
      const maxResultsLen = Math.max(
        (driver1 && driver1.results ? driver1.results.length : 0),
        (driver2 && driver2.results ? driver2.results.length : 0)
      );

      for (let i = 0; i < maxResultsLen; i++) {
        const res1 = (driver1 && driver1.results && driver1.results[i]) ? driver1.results[i] : { pts: 0, cheg: '-' };
        const res2 = (driver2 && driver2.results && driver2.results[i]) ? driver2.results[i] : { pts: 0, cheg: '-' };

        const pts1 = typeof res1.pts === 'number' ? res1.pts : 0;
        const pts2 = typeof res2.pts === 'number' ? res2.pts : 0;

        if (res1.cheg === 1 || res1.cheg === '1' || res2.cheg === 1 || res2.cheg === '1') teamWins++;
        if ([1, 2, 3, '1', '2', '3'].includes(res1.cheg) || [1, 2, 3, '1', '2', '3'].includes(res2.cheg)) teamPodiums++;

        // Em cada etapa, descarta o menor ponto da dupla (pega o melhor piloto da equipe)
        const bestStagePts = Math.max(pts1, pts2);
        stageScores.push(bestStagePts);
      }

      // Soma total da equipe
      const teamTotalWithoutDiscard = stageScores.reduce((acc, val) => acc + val, 0);

      // Descarte da pior etapa caso haja mais de 1 etapa válida
      let teamTotalWithDiscard = teamTotalWithoutDiscard;
      const validCompletedScores = stageScores.filter(s => s > 0);
      if (validCompletedScores.length > 1) {
        const minStage = Math.min(...validCompletedScores);
        teamTotalWithDiscard = teamTotalWithoutDiscard - minStage;
      }

      teamList.push({
        num: team.num,
        name: team.name,
        color: team.color || '#3b82f6',
        textColor: team.textColor || '#ffffff',
        drivers: team.drivers.map(d => d.name),
        totalWithoutDiscard: teamTotalWithoutDiscard,
        totalWithDiscard: teamTotalWithDiscard,
        wins: teamWins,
        podiums: teamPodiums
      });
    });

    // Ordena as equipes por pontos com descarte
    teamList.sort((a, b) => {
      if (b.totalWithDiscard !== a.totalWithDiscard) {
        return b.totalWithDiscard - a.totalWithDiscard;
      }
      if (b.wins !== a.wins) return b.wins - a.wins;
      if (b.podiums !== a.podiums) return b.podiums - a.podiums;
      return a.num - b.num;
    });

    // Atribui classificação
    teamList.forEach((team, idx) => {
      team.position = idx + 1;
    });

    return teamList;
  },

  /**
   * Gera a ordem do Próximo Grid com base nas regras do campeonato
   */
  generateNextGrid(category) {
    const driverStandings = this.calculateDriverStandings(category);
    if (!driverStandings || driverStandings.length === 0) return [];

    const activeDrivers = driverStandings.filter(d => d.totalWithoutDiscard > 0);
    const nonActiveDrivers = driverStandings.filter(d => d.totalWithoutDiscard === 0);

    const reversedActive = [...activeDrivers].reverse();
    const finalGrid = [...reversedActive, ...nonActiveDrivers];

    return finalGrid.map((driver, index) => ({
      gridPos: index + 1,
      driverName: driver.name,
      teamName: driver.teamName,
      teamColor: driver.teamColor
    }));
  }
};

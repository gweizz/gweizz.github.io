/**
 * SHEET MODAL - CAMPEONATO PANGARÉ DE KART
 * Réplica digital da Planilha Oficial de Etapas e Próximo Grid sem emojis.
 */

const SheetModal = {
  activeCategory: 'g1',
  selectedRoundId: null,

  open(categoryId = 'g1', roundId = null) {
    this.activeCategory = categoryId;
    this.selectedRoundId = roundId;
    this.render();
    
    const backdrop = document.getElementById('sheetModalBackdrop');
    if (backdrop) {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  },

  close() {
    const backdrop = document.getElementById('sheetModalBackdrop');
    if (backdrop) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  },

  switchCategory(catId) {
    this.activeCategory = catId;
    this.render();
  },

  render() {
    const modalBody = document.getElementById('sheetModalContent');
    if (!modalBody) return;

    const currentSeason = App.state.getCurrentSeason();
    if (!currentSeason) return;

    const category = currentSeason.categories[this.activeCategory];
    if (!category) return;

    const driverStandings = ChampionshipRules.calculateDriverStandings(category);
    const teamStandings = ChampionshipRules.calculateTeamStandings(category);
    const nextGrid = ChampionshipRules.generateNextGrid(category);

    const etapas = currentSeason.etapas || [];

    // Constrói as linhas da tabela da planilha oficial
    let rowsHtml = '';
    const teams = category.teams || [];

    teams.forEach(team => {
      const teamStat = teamStandings.find(t => t.num === team.num) || { totalWithDiscard: 0, position: '-' };

      team.drivers.forEach((driver, dIdx) => {
        const driverStat = driverStandings.find(d => d.name === driver.name) || { totalWithoutDiscard: 0, position: '-' };

        let roundColsHtml = '';
        etapas.forEach(etapa => {
          const res = (driver.results || []).find(r => r.roundId === etapa.id) || { cheg: '-', obs: '', pts: 0 };
          const isInactive = (res.cheg === '-' || res.cheg === 'ds') && res.pts === 0;

          roundColsHtml += `
            <td class="td-cheg ${isInactive ? 'td-pts-inactive' : ''}">${res.cheg || '-'}</td>
            <td class="td-obs ${isInactive ? 'td-pts-inactive' : ''}">${res.obs || ''}</td>
            <td class="td-pts ${isInactive ? 'td-pts-inactive' : ''}">${res.pts !== undefined ? res.pts : 0}</td>
          `;
        });

        // Célula de equipe e classificação com rowspan = 2
        let teamCellHtml = '';
        let teamScoreHtml = '';
        if (dIdx === 0) {
          teamCellHtml = `
            <td rowspan="2" class="td-num">${team.num}</td>
            <td rowspan="2" class="td-team" style="background-color: ${team.color}; color: ${team.textColor}; font-weight: bold;">
              ${team.name}
            </td>
          `;

          teamScoreHtml = `
            <td rowspan="2" class="td-total-pts" style="font-size: 13px;">${teamStat.totalWithDiscard}</td>
            <td rowspan="2" class="td-classif" style="font-size: 13px;">${teamStat.position}</td>
          `;
        }

        // Driver row
        rowsHtml += `
          <tr>
            ${teamCellHtml}
            <td class="td-driver">${driver.name}</td>
            <td style="font-size: 10px;">-</td>
            ${roundColsHtml}
            <td class="td-total-pts">${driverStat.totalWithoutDiscard}</td>
            <td class="td-classif">${driverStat.position}</td>
            ${teamScoreHtml}
          </tr>
        `;
      });
    });

    // Próximo grid ordenado
    let nextGridHtml = '';
    nextGrid.forEach(g => {
      nextGridHtml += `
        <span class="grid-driver-tag">
          <strong>${g.gridPos} -</strong> ${g.driverName}
        </span>
      `;
    });

    modalBody.innerHTML = `
      <div class="official-sheet-wrapper">
        <div class="sheet-banner-title">
          Campeonato PANGARÉ de Kart - ${currentSeason.editionNumber}º Campeonato (${currentSeason.name})
        </div>

        <table class="official-table">
          <thead>
            <!-- Super Headers -->
            <tr>
              <th colspan="4" class="th-cat-tag">${category.name.toUpperCase()}</th>
              <th colspan="${etapas.length * 3}" class="th-etapas-super">E T A P A S</th>
              <th colspan="2" class="th-pilotos-super">PILOTOS<br><span style="font-size: 9px;">S/ DESCARTE</span></th>
              <th colspan="2" class="th-equipes-super">EQUIPES<br><span style="font-size: 9px;">C/ DESCARTE</span></th>
            </tr>
            <!-- Dates Headers -->
            <tr>
              <th rowspan="2" class="th-main-col" style="width: 35px;">Num</th>
              <th rowspan="2" class="th-main-col" style="width: 140px;">Equipe</th>
              <th rowspan="2" class="th-main-col" style="width: 160px;">Piloto</th>
              <th rowspan="2" class="th-main-col" style="width: 30px;">Tx</th>
              ${etapas.map(e => `<th colspan="3" class="th-date-sub">${e.date}</th>`).join('')}
              <th rowspan="2" class="th-main-col" style="width: 45px;">Pontos</th>
              <th rowspan="2" class="th-main-col" style="width: 45px;">Classif</th>
              <th rowspan="2" class="th-main-col" style="width: 45px;">Pontos</th>
              <th rowspan="2" class="th-main-col" style="width: 45px;">Classif</th>
            </tr>
            <!-- Sub Columns (Cheg, Obs, Pontos) -->
            <tr>
              ${etapas.map(() => `
                <th class="th-col-sub" style="width: 35px;">Cheg.</th>
                <th class="th-col-sub" style="width: 35px;">Obs</th>
                <th class="th-col-sub" style="width: 40px;">Pontos</th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>

        <!-- Legenda Bar -->
        <div class="sheet-legend-bar">
          <span>IrA = Irregularidade administrativa</span>
          <span>IrD = Irregularidade disciplinar</span>
          <span>tr = trocas de kart</span>
          <span>mv = melhor volta</span>
          <span>ds = desclassificado</span>
        </div>

        <!-- Próximo Grid Footer -->
        <div class="sheet-next-grid-box">
          <div class="sheet-next-grid-title">Próximo Grid</div>
          <div class="sheet-next-grid-drivers">
            ${nextGridHtml || '<span>Grid em definição após a rodada.</span>'}
          </div>
        </div>
      </div>
    `;

    // Atualiza pills da categoria no header do modal
    const catPills = document.querySelectorAll('.sheet-cat-pill');
    catPills.forEach(pill => {
      if (pill.getAttribute('data-cat') === this.activeCategory) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }
};

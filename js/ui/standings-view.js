/**
 * STANDINGS VIEW - CAMPEONATO PANGARÉ DE KART
 * Renderização da Classificação Geral, Leaderboard Top 3 e Tabelas sem emojis.
 */

const StandingsView = {
  currentCategory: 'g1',
  currentTab: 'drivers', // 'drivers' ou 'teams'

  init(container, state) {
    this.container = container;
    this.state = state;
    this.render();
  },

  setCategory(catId) {
    this.currentCategory = catId;
    this.render();
  },

  setTab(tabId) {
    this.currentTab = tabId;
    this.render();
  },

  render() {
    if (!this.container) return;

    const currentSeason = this.state.getCurrentSeason();
    if (!currentSeason) {
      this.container.innerHTML = `<div class="empty-state">Nenhuma temporada encontrada.</div>`;
      return;
    }

    const category = currentSeason.categories[this.currentCategory];
    if (!category) {
      this.container.innerHTML = `<div class="empty-state">Categoria não encontrada.</div>`;
      return;
    }

    const driverStandings = ChampionshipRules.calculateDriverStandings(category);
    const teamStandings = ChampionshipRules.calculateTeamStandings(category);

    const top3 = driverStandings.slice(0, 3);

    this.container.innerHTML = `
      <!-- Category Tabs (Segmented Control) -->
      <div class="category-tabs-container">
        <button class="category-tab ${this.currentCategory === 'g1' ? 'active' : ''}" data-category="g1" onclick="App.selectCategory('g1')">
          <span class="tab-tag">Bateria 1</span>
          <span>Categoria G1</span>
        </button>

        <button class="category-tab ${this.currentCategory === 'g2' ? 'active' : ''}" data-category="g2" onclick="App.selectCategory('g2')">
          <span class="tab-tag">Bateria 2</span>
          <span>Categoria G2</span>
        </button>

        <button class="category-tab ${this.currentCategory === 'fl' ? 'active' : ''}" data-category="fl" onclick="App.selectCategory('fl')">
          <span class="tab-tag">Bateria 2</span>
          <span>Força Livre</span>
        </button>
      </div>

      <!-- Heat Dynamic Information Banner -->
      <div class="heat-banner">
        <div class="heat-badge-tag">
          <span class="heat-dot" style="background-color: ${this.currentCategory === 'g1' ? '#dc2626' : (this.currentCategory === 'g2' ? '#2563eb' : '#059669')}"></span>
          <span>${category.heatInfo || 'Informações da Bateria'}</span>
        </div>
        <button class="btn-secondary" onclick="SheetModal.open('${this.currentCategory}')">
          ${Icons.table(15)}
          <span>Ver Planilha Oficial da Etapa</span>
        </button>
      </div>

      <!-- Top 3 Leaderboard Summary -->
      ${this.renderLeaderboard(top3)}

      <!-- View Switcher Controls -->
      <div class="view-controls">
        <div class="view-toggle-group">
          <button class="view-toggle-btn ${this.currentTab === 'drivers' ? 'active' : ''}" onclick="StandingsView.setTab('drivers')">
            ${Icons.user(15)}
            <span>Pilotos</span>
          </button>
          <button class="view-toggle-btn ${this.currentTab === 'teams' ? 'active' : ''}" onclick="StandingsView.setTab('teams')">
            ${Icons.shield(15)}
            <span>Equipes (C/ Descarte)</span>
          </button>
        </div>

        <div class="view-actions">
          <button class="btn-secondary" onclick="App.openAdminModal('${this.currentCategory}')">
            ${Icons.camera(15)}
            <span>Lançar Resultado por Foto</span>
          </button>
        </div>
      </div>

      <!-- Main Standings Table -->
      <div class="table-card">
        <div class="table-header-bar">
          <div class="table-header-title">
            ${Icons.trophy(16)}
            <span>${this.currentTab === 'drivers' ? `Classificação Geral de Pilotos — ${category.name}` : `Classificação Geral de Equipes — ${category.name} (Com Descarte)`}</span>
          </div>
          <span class="table-season-tag">${currentSeason.name}</span>
        </div>

        <div class="table-responsive">
          ${this.currentTab === 'drivers' ? this.renderDriversTable(driverStandings) : this.renderTeamsTable(teamStandings)}
        </div>
      </div>
    `;
  },

  renderLeaderboard(top3) {
    if (!top3 || top3.length < 3) return '';

    const first = top3[0];
    const second = top3[1];
    const third = top3[2];

    return `
      <div class="leaderboard-summary">
        <!-- 1st Leader -->
        <div class="leader-item rank-1">
          <div class="leader-rank-num">01</div>
          <div class="leader-info">
            <div class="leader-name">${first.name}</div>
            <div class="leader-team">
              <span class="team-color-swatch" style="background: ${first.teamColor}"></span>
              <span>${first.teamName}</span>
            </div>
          </div>
          <div class="leader-score">
            <div class="leader-score-num">${first.totalWithoutDiscard}</div>
            <div class="leader-score-label">Pontos</div>
          </div>
        </div>

        <!-- 2nd Place -->
        <div class="leader-item">
          <div class="leader-rank-num">02</div>
          <div class="leader-info">
            <div class="leader-name">${second.name}</div>
            <div class="leader-team">
              <span class="team-color-swatch" style="background: ${second.teamColor}"></span>
              <span>${second.teamName}</span>
            </div>
          </div>
          <div class="leader-score">
            <div class="leader-score-num">${second.totalWithoutDiscard}</div>
            <div class="leader-score-label">Pontos</div>
          </div>
        </div>

        <!-- 3rd Place -->
        <div class="leader-item">
          <div class="leader-rank-num">03</div>
          <div class="leader-info">
            <div class="leader-name">${third.name}</div>
            <div class="leader-team">
              <span class="team-color-swatch" style="background: ${third.teamColor}"></span>
              <span>${third.teamName}</span>
            </div>
          </div>
          <div class="leader-score">
            <div class="leader-score-num">${third.totalWithoutDiscard}</div>
            <div class="leader-score-label">Pontos</div>
          </div>
        </div>
      </div>
    `;
  },

  renderDriversTable(drivers) {
    if (!drivers || drivers.length === 0) {
      return `<div style="padding: 24px; text-align: center; color: var(--text-muted);">Nenhum piloto cadastrado nesta categoria.</div>`;
    }

    let rows = '';
    drivers.forEach(d => {
      const posRankClass = d.position === 1 ? 'pos-top-1' : (d.position === 2 ? 'pos-top-2' : (d.position === 3 ? 'pos-top-3' : ''));
      const hasMv = d.bestLaps > 0 ? `<span class="mv-badge" title="Melhor Volta na Etapa">${Icons.zap(11)} MV</span>` : '';
      const tooltipText = `Vitórias: ${d.wins} | Pódios: ${d.podiums}${d.bestLaps > 0 ? ` | Melhores Voltas: ${d.bestLaps}` : ''}`;

      rows += `
        <tr>
          <td class="pos-cell ${posRankClass}">
            ${d.position < 10 ? '0' + d.position : d.position}
          </td>
          <td>
            <div class="driver-cell">
              <span class="driver-name-hover" data-tooltip="${tooltipText}">${d.name}</span>
              ${hasMv}
            </div>
          </td>
          <td>
            <div class="team-cell">
              <span class="team-color-swatch" style="background: ${d.teamColor}"></span>
              <span>${d.teamName}</span>
            </div>
          </td>
          <td class="points-cell">${d.totalWithoutDiscard}</td>
          <td style="text-align: right; color: var(--text-secondary); font-family: var(--font-mono); font-weight: 600;">${d.totalWithDiscard}</td>
        </tr>
      `;
    });

    return `
      <table class="standings-table">
        <thead>
          <tr>
            <th style="width: 60px; text-align: center;">Pos</th>
            <th>Piloto</th>
            <th>Equipe</th>
            <th style="width: 130px; text-align: right;">Pontos Totais</th>
            <th style="width: 140px; text-align: right;">C/ Descarte</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
  },

  renderTeamsTable(teams) {
    if (!teams || teams.length === 0) {
      return `<div style="padding: 24px; text-align: center; color: var(--text-muted);">Nenhuma equipe cadastrada nesta categoria.</div>`;
    }

    let rows = '';
    teams.forEach(t => {
      const posRankClass = t.position === 1 ? 'pos-top-1' : (t.position === 2 ? 'pos-top-2' : (t.position === 3 ? 'pos-top-3' : ''));
      const tooltipText = `Vitórias: ${t.wins} | Pódios: ${t.podiums}`;

      rows += `
        <tr>
          <td class="pos-cell ${posRankClass}">
            ${t.position < 10 ? '0' + t.position : t.position}
          </td>
          <td style="width: 70px; text-align: center; font-weight: 700; font-family: var(--font-mono); color: var(--text-muted);">
            #${t.num}
          </td>
          <td>
            <div class="team-cell">
              <span class="team-color-swatch" style="background: ${t.color}"></span>
              <span class="team-name-hover" data-tooltip="${tooltipText}" style="font-weight: 600; color: #fff;">${t.name}</span>
            </div>
          </td>
          <td>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">
              ${t.drivers.join(' • ')}
            </div>
          </td>
          <td class="points-cell" style="text-align: right;">${t.totalWithDiscard}</td>
        </tr>
      `;
    });

    return `
      <table class="standings-table">
        <thead>
          <tr>
            <th style="width: 60px; text-align: center;">Pos</th>
            <th style="width: 70px; text-align: center;">Nº</th>
            <th>Equipe</th>
            <th>Pilotos da Dupla</th>
            <th style="width: 160px; text-align: right;">Pontos C/ Descarte</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
  }
};

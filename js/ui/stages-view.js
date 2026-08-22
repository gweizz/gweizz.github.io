/**
 * STAGES VIEW - CAMPEONATO PANGARÉ DE KART
 * Renderização da página de Etapas e Calendário sem emojis e com ícones consistentes.
 */

const StagesView = {
  init(container, state) {
    this.container = container;
    this.state = state;
    this.render();
  },

  render() {
    if (!this.container) return;

    const allSeasons = this.state.data.seasons || [];
    const activeSeason = this.state.getCurrentSeason();

    let seasonTabsHtml = '';
    allSeasons.forEach(s => {
      const isActive = s.id === this.state.data.activeSeasonId;
      seasonTabsHtml += `
        <button class="season-pill-btn ${isActive ? 'active' : ''}" onclick="App.changeSeason('${s.id}')">
          ${Icons.flag(14)}
          <span>${s.editionNumber}º Campeonato (${s.year}/${s.semester})</span>
        </button>
      `;
    });

    let stagesCardsHtml = '';
    if (activeSeason && activeSeason.etapas) {
      activeSeason.etapas.forEach((etapa, idx) => {
        const isCompleted = etapa.completed;
        const statusBadge = isCompleted 
          ? `<span class="stage-status-badge completed">Realizada</span>`
          : (idx === 1 ? `<span class="stage-status-badge next">Próxima Etapa</span>` : `<span class="stage-status-badge future">Agendada</span>`);

        stagesCardsHtml += `
          <div class="stage-card ${isCompleted ? 'stage-card-done' : ''}">
            <div class="stage-card-header">
              <div class="stage-number-box">
                <span class="stage-num">${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>
                <span class="stage-sub">Etapa</span>
              </div>
              <div class="stage-header-details">
                <h4 class="stage-date">${etapa.date}</h4>
                <p class="stage-location">${etapa.location || activeSeason.circuit}</p>
              </div>
              ${statusBadge}
            </div>

            <div class="stage-card-body">
              <div class="heat-schedule-info">
                <div class="heat-row">
                  <span class="heat-chip g1-chip">Bateria 1</span>
                  <span class="heat-desc">Categoria G1 (Exclusiva)</span>
                </div>
                <div class="heat-row">
                  <span class="heat-chip g2-fl-chip">Bateria 2</span>
                  <span class="heat-desc">Categorias G2 & Força Livre (Compartilhada)</span>
                </div>
              </div>
            </div>

            <div class="stage-card-footer">
              <button class="btn-stage-action" onclick="SheetModal.open('g1', '${etapa.id}')">
                ${Icons.table(14)}
                <span>Resultados / Grid</span>
              </button>
              ${!isCompleted ? `
                <button class="btn-stage-action" onclick="App.openAdminModal('g1', '${etapa.id}')">
                  ${Icons.camera(14)}
                  <span>Lançar Foto</span>
                </button>
              ` : ''}
            </div>
          </div>
        `;
      });
    }

    this.container.innerHTML = `
      <div class="stages-container">
        <!-- Season Selector Bar -->
        <div class="season-filter-bar">
          <div class="season-filter-title">
            ${Icons.calendar(15)}
            <span>Temporada:</span>
          </div>
          <div class="season-pills-list">
            ${seasonTabsHtml}
          </div>
        </div>

        <!-- Season Banner Header -->
        <div class="season-hero-banner">
          <div class="season-hero-info">
            <h3 class="season-title">${activeSeason ? activeSeason.name : 'Temporada'}</h3>
            <p class="season-meta">
              <span>Circuito: ${activeSeason ? activeSeason.circuit : '-'}</span>
              <span>•</span>
              <span>6 Etapas Programadas</span>
            </p>
          </div>
          <button class="btn-primary" onclick="SheetModal.open('g1')">
            ${Icons.table(15)}
            <span>Planilha Oficial</span>
          </button>
        </div>

        <!-- Stages Grid -->
        <div class="stages-grid">
          ${stagesCardsHtml}
        </div>
      </div>
    `;
  }
};

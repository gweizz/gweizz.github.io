/**
 * MAIN APP CONTROLLER - CAMPEONATO PANGARÉ DE KART
 * Coordenação geral da aplicação, roteamento de views, persistência e modais.
 */

const App = {
  activeView: 'standings', // 'standings' ou 'stages'
  activeCategory: 'g1',    // 'g1', 'g2', 'fl'
  state: {
    data: null,

    init() {
      this.data = StorageService.loadData();
    },

    getCurrentSeason() {
      if (!this.data || !this.data.seasons) return null;
      return this.data.seasons.find(s => s.id === this.data.activeSeasonId) || this.data.seasons[0];
    },

    setSeason(seasonId) {
      if (this.data) {
        this.data.activeSeasonId = seasonId;
        this.save();
      }
    },

    save() {
      StorageService.saveData(this.data);
    }
  },

  isMobileMenuOpen: false,

  init() {
    this.state.init();
    this.setupNavigation();
    this.renderActiveView();

    // Fecha modais e menu mobile com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
        SheetModal.close();
        AdminModal.close();
      }
    });

    console.log('[Pangaré Kart] 54º Campeonato Oficial (2026/2) inicializado com sucesso.');
  },

  setupNavigation() {
    const navStandings = document.getElementById('navStandings');
    const navStages = document.getElementById('navStages');
    const navHamburgerBtn = document.getElementById('navHamburgerBtn');
    const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

    if (navStandings) {
      navStandings.addEventListener('click', () => this.switchView('standings'));
    }
    if (navStages) {
      navStages.addEventListener('click', () => this.switchView('stages'));
    }
    if (navHamburgerBtn) {
      navHamburgerBtn.addEventListener('click', () => this.toggleMobileMenu());
    }
    if (mobileNavBackdrop) {
      mobileNavBackdrop.addEventListener('click', () => this.closeMobileMenu());
    }

    // Fecha o menu mobile se a tela for redimensionada para desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    });
  },

  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  },

  openMobileMenu() {
    this.isMobileMenuOpen = true;
    const btn = document.getElementById('navHamburgerBtn');
    const menu = document.getElementById('mobileNavMenu');
    const backdrop = document.getElementById('mobileNavBackdrop');

    if (btn) {
      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
    if (menu) {
      menu.classList.add('open');
      menu.setAttribute('aria-hidden', 'false');
    }
    if (backdrop) {
      backdrop.classList.add('open');
    }
  },

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    const btn = document.getElementById('navHamburgerBtn');
    const menu = document.getElementById('mobileNavMenu');
    const backdrop = document.getElementById('mobileNavBackdrop');

    if (btn) {
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    }
    if (menu) {
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    }
    if (backdrop) {
      backdrop.classList.remove('open');
    }
  },

  switchView(viewName) {
    this.activeView = viewName;

    // Atualiza botões do navbar desktop
    const navStandings = document.getElementById('navStandings');
    const navStages = document.getElementById('navStages');

    if (navStandings) navStandings.classList.toggle('active', viewName === 'standings');
    if (navStages) navStages.classList.toggle('active', viewName === 'stages');

    // Atualiza botões do menu mobile
    const mobStandings = document.getElementById('mobileNavStandings');
    const mobStages = document.getElementById('mobileNavStages');

    if (mobStandings) mobStandings.classList.toggle('active', viewName === 'standings');
    if (mobStages) mobStages.classList.toggle('active', viewName === 'stages');

    // Fecha o menu mobile se estiver aberto
    this.closeMobileMenu();

    // Alterna visibilidade dos containers
    const standingsContainer = document.getElementById('standingsViewContainer');
    const stagesContainer = document.getElementById('stagesViewContainer');

    if (standingsContainer) standingsContainer.style.display = viewName === 'standings' ? 'block' : 'none';
    if (stagesContainer) stagesContainer.style.display = viewName === 'stages' ? 'block' : 'none';

    this.renderActiveView();
  },

  renderActiveView() {
    const standingsContainer = document.getElementById('standingsViewContainer');
    const stagesContainer = document.getElementById('stagesViewContainer');

    if (this.activeView === 'standings' && standingsContainer) {
      StandingsView.init(standingsContainer, this.state);
      StandingsView.setCategory(this.activeCategory);
    } else if (this.activeView === 'stages' && stagesContainer) {
      StagesView.init(stagesContainer, this.state);
    }
  },

  selectCategory(catId) {
    this.activeCategory = catId;
    if (this.activeView === 'standings') {
      StandingsView.setCategory(catId);
    }
  },

  changeSeason(seasonId) {
    this.state.setSeason(seasonId);
    this.refreshAllViews();
    this.showToast('Temporada selecionada!', 'info');
  },

  refreshAllViews() {
    this.renderActiveView();
  },

  openAdminModal(categoryId = 'g1', roundId = null) {
    this.closeMobileMenu();
    AdminModal.open(categoryId || this.activeCategory, roundId);
  },

  exportBackup() {
    StorageService.exportBackup(this.state.data);
    this.showToast('Backup exportado com sucesso!', 'success');
  },

  importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;

    StorageService.importBackup(file, (success, result) => {
      if (success) {
        this.state.data = result;
        this.refreshAllViews();
        this.showToast('Backup restaurado com sucesso!', 'success');
      } else {
        this.showToast(`Erro ao restaurar: ${result}`, 'error');
      }
    });
  },

  resetData() {
    if (confirm('Deseja realmente restaurar os dados originais do 54º Campeonato (2026/2)? Todas as alterações manuais serão resetadas.')) {
      this.state.data = StorageService.resetToDefaults();
      this.refreshAllViews();
      AdminModal.close();
      this.showToast('Dados restaurados para o padrão oficial do 54º Campeonato (2026/2)!', 'info');
    }
  },

  showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let iconSvg = Icons.check(16, 'var(--accent-green)');
    if (type === 'error') {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    } else if (type === 'info') {
      iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 3500);
  }
};

// Inicialização automática ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  App.init();
});

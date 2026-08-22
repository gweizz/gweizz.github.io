/**
 * STORAGE SERVICE - CAMPEONATO PANGARÉ DE KART
 * Gerenciamento de persistência local (localStorage), importação e exportação de backups JSON.
 */

const STORAGE_KEY = 'PANGARE_KART_CHAMPIONSHIP_DATA_V5';

const StorageService = {
  /**
   * Carrega os dados salvos ou inicializa com os dados padrão
   */
  loadData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.seasons && Array.isArray(parsed.seasons)) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn('Erro ao carregar dados do localStorage:', err);
    }
    
    // Se não houver nada salvo, salva os dados padrão e retorna
    this.saveData(INITIAL_SEASONS_DATA);
    return JSON.parse(JSON.stringify(INITIAL_SEASONS_DATA));
  },

  /**
   * Salva os dados no localStorage
   */
  saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (err) {
      console.error('Erro ao salvar dados no localStorage:', err);
      return false;
    }
  },

  /**
   * Exporta os dados atuais como arquivo JSON para download
   */
  exportBackup(data) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().split('T')[0];
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_pangare_kart_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  /**
   * Importa dados de um arquivo JSON selecionado pelo usuário
   */
  importBackup(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed && parsed.seasons && Array.isArray(parsed.seasons)) {
          this.saveData(parsed);
          callback(true, parsed);
        } else {
          callback(false, 'Estrutura do arquivo de backup inválida.');
        }
      } catch (err) {
        callback(false, 'Arquivo JSON inválido ou corrompido.');
      }
    };
    reader.onerror = () => {
      callback(false, 'Falha ao ler o arquivo selecionado.');
    };
    reader.readAsText(file);
  },

  /**
   * Restaura os dados para o padrão original do 54º Campeonato
   */
  resetToDefaults() {
    this.saveData(INITIAL_SEASONS_DATA);
    return JSON.parse(JSON.stringify(INITIAL_SEASONS_DATA));
  }
};

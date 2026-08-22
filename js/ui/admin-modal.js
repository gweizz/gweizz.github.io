/**
 * ADMIN MODAL & RESULT IMPORTER - CAMPEONATO PANGARÉ DE KART
 * Interface administrativa sóbria, funcional e sem emojis.
 */

const AdminModal = {
  currentCategory: 'g1',
  currentRoundId: null,
  scannedResults: [],
  currentImageSrc: null,

  open(categoryId = 'g1', roundId = null) {
    this.currentCategory = categoryId;
    
    const currentSeason = App.state.getCurrentSeason();
    const etapas = (currentSeason && currentSeason.etapas) ? currentSeason.etapas : [];
    const pendingEtapas = etapas.filter(e => !e.completed);

    if (roundId && !etapas.find(e => e.id === roundId && e.completed)) {
      this.currentRoundId = roundId;
    } else if (pendingEtapas.length > 0) {
      this.currentRoundId = pendingEtapas[0].id;
    } else {
      this.currentRoundId = null;
    }

    this.render();

    const backdrop = document.getElementById('adminModalBackdrop');
    if (backdrop) {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  },

  close() {
    const backdrop = document.getElementById('adminModalBackdrop');
    if (backdrop) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  },

  setCategory(catId) {
    this.currentCategory = catId;
    this.currentImageSrc = null;
    this.scannedResults = [];
    this.render();
  },

  setRound(roundId) {
    this.currentRoundId = roundId;
    this.render();
  },

  render() {
    const container = document.getElementById('adminModalBody');
    if (!container) return;

    const currentSeason = App.state.getCurrentSeason();
    if (!currentSeason) return;

    const category = currentSeason.categories[this.currentCategory];
    const etapas = currentSeason.etapas || [];
    
    const pendingEtapas = etapas.filter(e => !e.completed);

    if (this.currentRoundId && !pendingEtapas.some(e => e.id === this.currentRoundId)) {
      this.currentRoundId = pendingEtapas.length > 0 ? pendingEtapas[0].id : null;
    } else if (!this.currentRoundId && pendingEtapas.length > 0) {
      this.currentRoundId = pendingEtapas[0].id;
    }

    let roundOptionsHtml = '';
    if (pendingEtapas.length === 0) {
      roundOptionsHtml = `<option value="" disabled selected>Todas as etapas já foram concluídas</option>`;
    } else {
      roundOptionsHtml = pendingEtapas.map(e => `
        <option value="${e.id}" ${e.id === this.currentRoundId ? 'selected' : ''}>
          ${e.name} (${e.date}) — Pendente
        </option>
      `).join('');
    }

    let registeredDrivers = [];
    if (category && category.teams) {
      category.teams.forEach(team => {
        team.drivers.forEach(driver => {
          const currentResult = (driver.results || []).find(r => r.roundId === this.currentRoundId) || { cheg: '-', obs: '', pts: 0 };
          registeredDrivers.push({
            name: driver.name,
            teamName: team.name,
            teamColor: team.color,
            cheg: currentResult.cheg,
            obs: currentResult.obs,
            pts: currentResult.pts
          });
        });
      });
    }

    const activeList = (this.scannedResults.length > 0) ? this.scannedResults : registeredDrivers;

    let reviewRowsHtml = '';
    activeList.forEach((item, index) => {
      const isMv = (item.obs && item.obs.toLowerCase().includes('mv'));
      reviewRowsHtml += `
        <tr data-index="${index}">
          <td style="width: 60px;">
            <input type="text" class="input-pos" id="posInput_${index}" value="${item.cheg !== undefined ? item.cheg : (index + 1)}" onchange="AdminModal.updateRow(${index})" />
          </td>
          <td>
            <div style="font-weight: 600; color: #fff;">${item.name || item.driverName}</div>
            <div style="font-size: 0.76rem; color: var(--text-muted); display: flex; align-items: center; gap: 6px; margin-top: 2px;">
              <span class="team-color-swatch" style="background: ${item.teamColor}; width: 8px; height: 8px;"></span>
              <span>${item.teamName}</span>
            </div>
          </td>
          <td style="width: 80px; text-align: center;">
            <label style="cursor: pointer; display: inline-flex; align-items: center; gap: 4px; font-size: 0.8rem; font-weight: 600; color: #93c5fd;">
              <input type="checkbox" id="mvInput_${index}" ${isMv ? 'checked' : ''} onchange="AdminModal.updateRow(${index})" />
              MV
            </label>
          </td>
          <td style="width: 90px;">
            <input type="text" class="input-obs" id="obsInput_${index}" value="${item.obs || ''}" placeholder="Ex: col1" onchange="AdminModal.updateRow(${index})" />
          </td>
          <td style="width: 70px; text-align: right; font-weight: 700; font-family: var(--font-mono); color: var(--text-primary);" id="ptsPreview_${index}">
            ${item.pts !== undefined ? item.pts : ChampionshipRules.calculatePoints(item.cheg, this.currentCategory, item.obs)}
          </td>
        </tr>
      `;
    });

    container.innerHTML = `
      <!-- Top Config Grid -->
      <div class="ocr-config-grid">
        <div class="form-group">
          <label class="form-label">Categoria da Bateria:</label>
          <select onchange="AdminModal.setCategory(this.value)">
            <option value="g1" ${this.currentCategory === 'g1' ? 'selected' : ''}>Categoria G1 (Bateria 1)</option>
            <option value="g2" ${this.currentCategory === 'g2' ? 'selected' : ''}>Categoria G2 (Bateria 2)</option>
            <option value="fl" ${this.currentCategory === 'fl' ? 'selected' : ''}>Força Livre (Bateria 2)</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Etapa para Lançamento:</label>
          <select id="selectRoundId" onchange="AdminModal.setRound(this.value)" ${pendingEtapas.length === 0 ? 'disabled' : ''}>
            ${roundOptionsHtml}
          </select>
        </div>
      </div>

      ${pendingEtapas.length === 0 ? `
        <div style="background: rgba(5, 150, 105, 0.1); border: 1px solid var(--accent-green); padding: 14px; border-radius: var(--radius-sm); text-align: center; margin-bottom: 16px;">
          <div style="color: #34d399; font-weight: 600; font-size: 0.9rem;">Todas as etapas da temporada foram concluídas.</div>
        </div>
      ` : ''}

      <!-- Upload Dropzone -->
      <div class="upload-dropzone" id="ocrDropzone" onclick="document.getElementById('fileInput').click()">
        <div class="dropzone-icon">${Icons.camera(28)}</div>
        <div class="dropzone-title">Carregar foto do resultado / folha de tempos</div>
        <div class="dropzone-subtitle">Arraste a imagem, clique para selecionar ou use Ctrl+V para colar</div>
        <input type="file" id="fileInput" class="dropzone-file-input" accept="image/*" onchange="AdminModal.handleFileUpload(event)" />
      </div>

      <!-- Quick Test Sample Generator Bar -->
      <div class="sample-images-bar">
        <span style="font-size: 0.8rem; color: var(--text-muted);">Teste rápido com simulação:</span>
        <button class="sample-badge-btn" onclick="AdminModal.loadSampleSheet()" ${pendingEtapas.length === 0 ? 'disabled' : ''}>
          ${Icons.zap(12)}
          <span>Simular Leitura Óptica (${category.name})</span>
        </button>
      </div>

      <!-- Processing Progress Box -->
      <div class="ocr-progress-box" id="ocrProgressBox">
        <div class="spinner"></div>
        <div style="flex: 1;">
          <div style="font-weight: 600; font-size: 0.88rem;" id="ocrProgressText">Analisando imagem...</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Associação com os pilotos cadastrados</div>
        </div>
      </div>

      <!-- OCR Workspace (Side by Side Review) -->
      <div class="ocr-result-workspace">
        <div class="image-preview-card">
          <div style="font-weight: 600; font-size: 0.82rem; color: var(--text-secondary); display: flex; align-items: center; justify-content: space-between;">
            <span>Folha de Tempos</span>
            ${this.currentImageSrc ? '<span style="color: var(--accent-green);">Carregada</span>' : '<span style="color: var(--text-muted);">Nenhuma</span>'}
          </div>
          ${this.currentImageSrc ? `<img src="${this.currentImageSrc}" alt="Folha de Tempos" />` : `
            <div style="height: 200px; display: flex; align-items: center; justify-content: center; background: var(--bg-secondary); border-radius: var(--radius-xs); color: var(--text-muted); font-size: 0.82rem; text-align: center; padding: 16px;">
              Envie a imagem da bateria ou preencha a tabela ao lado.
            </div>
          `}
        </div>

        <div class="review-table-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-weight: 700; font-size: 0.92rem; color: #fff;">
              Conferência dos Resultados (${category.name})
            </div>
            <span style="font-size: 0.76rem; color: var(--text-muted); font-family: var(--font-mono);">
              ${activeList.length} Pilotos
            </span>
          </div>

          <div style="max-height: 340px; overflow-y: auto;">
            <table class="review-table">
              <thead>
                <tr>
                  <th>Pos.</th>
                  <th>Piloto / Equipe</th>
                  <th style="text-align: center;">Melhor Volta</th>
                  <th>Obs.</th>
                  <th style="text-align: right;">Pontos</th>
                </tr>
              </thead>
              <tbody id="reviewTableBody">
                ${reviewRowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Database Management & Actions Bar -->
      <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn-secondary" onclick="App.exportBackup()">
            ${Icons.download(14)}
            <span>Exportar Backup</span>
          </button>
          <button class="btn-secondary" onclick="document.getElementById('importFileInput').click()">
            ${Icons.upload(14)}
            <span>Importar Backup</span>
          </button>
          <input type="file" id="importFileInput" style="display: none;" accept=".json" onchange="App.importBackup(event)" />
          <button class="btn-danger" onclick="App.resetData()">
            ${Icons.refresh(14)}
            <span>Restaurar Base</span>
          </button>
        </div>

        <button class="btn-primary" onclick="AdminModal.saveResults()" ${pendingEtapas.length === 0 ? 'disabled' : ''}>
          ${Icons.check(15)}
          <span>Salvar e Concluir Etapa</span>
        </button>
      </div>
    `;

    window.onpaste = (event) => {
      const items = (event.clipboardData || event.originalEvent.clipboardData).items;
      for (let index in items) {
        const item = items[index];
        if (item.kind === 'file' && item.type.startsWith('image/')) {
          const blob = item.getAsFile();
          this.processImageFile(blob);
        }
      }
    };
  },

  handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      this.processImageFile(file);
    }
  },

  processImageFile(file) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      this.currentImageSrc = e.target.result;
      
      const currentSeason = App.state.getCurrentSeason();
      const category = currentSeason.categories[this.currentCategory];
      
      const drivers = [];
      category.teams.forEach(t => {
        t.drivers.forEach(d => {
          drivers.push({ name: d.name, teamName: t.name, teamColor: t.color });
        });
      });

      const progressBox = document.getElementById('ocrProgressBox');
      const progressText = document.getElementById('ocrProgressText');
      if (progressBox) progressBox.classList.add('active');

      const result = await ImageScannerService.processResultImage(
        this.currentImageSrc,
        drivers,
        this.currentCategory,
        (percent, msg) => {
          if (progressText) progressText.innerText = msg;
        }
      );

      if (progressBox) progressBox.classList.remove('active');

      if (result.success) {
        this.scannedResults = result.results;
        this.render();
        App.showToast('Imagem processada. Confira os resultados e clique em Salvar.', 'success');
      }
    };
    reader.readAsDataURL(file);
  },

  loadSampleSheet() {
    const currentSeason = App.state.getCurrentSeason();
    const category = currentSeason.categories[this.currentCategory];
    const drivers = [];
    category.teams.forEach(t => {
      t.drivers.forEach(d => drivers.push({ name: d.name, teamName: t.name, teamColor: t.color }));
    });

    const sampleUrl = ImageScannerService.generateSampleResultSheet(category.name, drivers);
    this.currentImageSrc = sampleUrl;
    this.render();

    this.processImageFile(this.dataURLtoBlob(sampleUrl));
  },

  dataURLtoBlob(dataurl) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  },

  updateRow(index) {
    const posInput = document.getElementById(`posInput_${index}`);
    const mvInput = document.getElementById(`mvInput_${index}`);
    const obsInput = document.getElementById(`obsInput_${index}`);
    const ptsPreview = document.getElementById(`ptsPreview_${index}`);

    if (!posInput || !ptsPreview) return;

    let obsVal = obsInput ? obsInput.value.trim() : '';
    if (mvInput && mvInput.checked && !obsVal.toLowerCase().includes('mv')) {
      obsVal = obsVal ? `${obsVal} mv` : 'mv';
    } else if (mvInput && !mvInput.checked && obsVal.toLowerCase().includes('mv')) {
      obsVal = obsVal.replace(/mv/gi, '').trim();
    }

    if (obsInput) obsInput.value = obsVal;

    const calculatedPts = ChampionshipRules.calculatePoints(posInput.value, this.currentCategory, obsVal);
    ptsPreview.innerText = calculatedPts;
  },

  saveResults() {
    if (!this.currentRoundId) {
      App.showToast('Nenhuma etapa pendente selecionada.', 'error');
      return;
    }

    const currentSeason = App.state.getCurrentSeason();
    const category = currentSeason.categories[this.currentCategory];
    if (!category) return;

    let rowIdx = 0;
    category.teams.forEach(team => {
      team.drivers.forEach(driver => {
        const posInput = document.getElementById(`posInput_${rowIdx}`);
        const obsInput = document.getElementById(`obsInput_${rowIdx}`);

        if (posInput) {
          const chegVal = posInput.value.trim();
          const obsVal = obsInput ? obsInput.value.trim() : '';
          const ptsVal = ChampionshipRules.calculatePoints(chegVal, this.currentCategory, obsVal);

          if (!driver.results) driver.results = [];
          const existingRes = driver.results.find(r => r.roundId === this.currentRoundId);
          if (existingRes) {
            existingRes.cheg = chegVal === '-' ? '-' : (parseInt(chegVal, 10) || chegVal);
            existingRes.obs = obsVal;
            existingRes.pts = ptsVal;
          } else {
            driver.results.push({
              roundId: this.currentRoundId,
              cheg: chegVal === '-' ? '-' : (parseInt(chegVal, 10) || chegVal),
              obs: obsVal,
              pts: ptsVal
            });
          }
        }
        rowIdx++;
      });
    });

    const etapa = (currentSeason.etapas || []).find(e => e.id === this.currentRoundId);
    if (etapa) etapa.completed = true;

    this.scannedResults = [];
    this.currentImageSrc = null;

    App.state.save();
    App.refreshAllViews();
    this.close();
    App.showToast(`Resultados da etapa salvos com sucesso na categoria ${category.name}.`, 'success');
  }
};

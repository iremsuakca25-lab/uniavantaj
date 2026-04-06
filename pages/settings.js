import { renderSidebar, showToast } from '../components.js';
import { user, levels, rewards, leaderboard } from '../data.js';

export function renderSettings(container) {
  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content" style="max-width:800px;margin:0 auto;width:100%;">
        <div class="page-header">
          <h1 class="page-title">⚙️ Ayarlar</h1>
          <p class="page-subtitle">Hesap, bildirim ve uygulama tercihlerin</p>
        </div>

        <div class="animate-in">
          <div class="settings-section">
            <h2 class="settings-section-title">Kişisel Bilgiler</h2>
            <form id="settings-profile-form">
              <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px;">
                <div class="profile-avatar" style="width:80px;height:80px;font-size:2rem;">${user.avatar}</div>
                <button type="button" class="btn btn-secondary btn-sm">Fotoğrafı Değiştir</button>
              </div>
              
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div class="form-group">
                  <label class="form-label">Ad</label>
                  <input type="text" id="settings-name" class="form-input" value="${user.name}">
                </div>
                <div class="form-group">
                  <label class="form-label">Soyad</label>
                  <input type="text" id="settings-surname" class="form-input" value="${user.surname}">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">E-posta</label>
                <input type="email" class="form-input" value="${user.email}" disabled style="opacity:0.7;">
                <div style="font-size:0.8rem;color:var(--text-3);margin-top:4px;">Üniversite e-postası (edu.tr) değiştirilemez.</div>
              </div>
              <button type="submit" class="btn btn-primary" style="margin-top:8px;">Değişiklikleri Kaydet</button>
            </form>
          </div>

          <div class="settings-section animate-in animate-in-delay-1">
            <h2 class="settings-section-title">Bildirim Tercihleri</h2>
            <div class="setting-row">
              <div>
                <div class="setting-label">Yeni Kampanyalar</div>
                <div class="setting-desc">Yeni eklenen fırsatlardan haberdar ol</div>
              </div>
              <div class="toggle active" onclick="this.classList.toggle('active')"></div>
            </div>
            <div class="setting-row">
              <div>
                <div class="setting-label">Kupon Hatırlatıcıları</div>
                <div class="setting-desc">Süresi dolmak üzere olan kuponların için hatırlatma al</div>
              </div>
              <div class="toggle active" onclick="this.classList.toggle('active')"></div>
            </div>
            <div class="setting-row">
              <div>
                <div class="setting-label">Konum Bazlı Fırsatlar</div>
                <div class="setting-desc">Yakınındaki indirimleri anlık olarak sana bildirelim</div>
              </div>
              <div class="toggle active" onclick="this.classList.toggle('active')"></div>
            </div>
            <div class="setting-row">
              <div>
                <div class="setting-label">E-posta Bülteni</div>
                <div class="setting-desc">Haftalık en iyi fırsatlar özetini e-posta olarak al</div>
              </div>
              <div class="toggle" onclick="this.classList.toggle('active')"></div>
            </div>
          </div>

          <div class="settings-section animate-in animate-in-delay-2">
            <h2 class="settings-section-title">Görünüm & Dil</h2>
            <div class="setting-row">
              <div>
                <div class="setting-label">Karanlık Mod (Dark Mode)</div>
                <div class="setting-desc">Göz yormayan karanlık temayı kullan</div>
              </div>
              <div class="toggle active" onclick="this.classList.toggle('active');document.body.classList.toggle('light-mode');"></div>
            </div>
            <div class="setting-row">
              <div>
                <div class="setting-label">Dil Sistemi</div>
                <div class="setting-desc">Görünüm dili ayarı</div>
              </div>
              <select class="form-input" style="width:150px;padding:8px 12px;">
                <option>Türkçe</option>
                <option>English</option>
              </select>
            </div>
          </div>

          <div class="settings-section animate-in animate-in-delay-3">
            <h2 class="settings-section-title">Güvenlik & Şifre</h2>
            <form id="settings-password-form">
              <div class="form-group">
                <label class="form-label">Mevcut Şifre</label>
                <input type="password" id="current-pass" class="form-input" placeholder="••••••••">
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div class="form-group">
                  <label class="form-label">Yeni Şifre</label>
                  <input type="password" id="new-pass" class="form-input" placeholder="Min. 8 karakter">
                </div>
                <div class="form-group">
                  <label class="form-label">Yeni Şifre (Tekrar)</label>
                  <input type="password" id="confirm-pass" class="form-input" placeholder="Tekrar yazın">
                </div>
              </div>
              <button type="submit" class="btn btn-primary" style="margin-top:8px;">Şifreyi Güncelle</button>
            </form>
          </div>

          <div class="settings-section animate-in animate-in-delay-3" style="border-color:rgba(244,63,94,0.3);">
            <h2 class="settings-section-title" style="color:var(--error);">Tehlikeli Bölge</h2>
            <div class="setting-row">
              <div>
                <div class="setting-label">Hesabı Sil</div>
                <div class="setting-desc">Tüm verilerin, kazandığın puanlar ve kuponların kalıcı olarak silinir.</div>
              </div>
              <button class="btn" style="background:rgba(244,63,94,0.1);color:var(--error);border:1px solid rgba(244,63,94,0.2);">Hesabımı Sil</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>`;

  // Profile Form Logic
  const profileForm = document.getElementById('settings-profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newName = document.getElementById('settings-name').value;
      const newSurname = document.getElementById('settings-surname').value;
      if (newName && newSurname) {
        user.name = newName;
        user.surname = newSurname;
        user.avatar = (newName.charAt(0) + newSurname.charAt(0)).toUpperCase();
        if (window.showToast) window.showToast('Profil bilgileri başarıyla güncellendi!');
        renderSettings(container);
      }
    });
  }

  // Password Form Logic
  const passForm = document.getElementById('settings-password-form');
  if (passForm) {
    passForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const current = document.getElementById('current-pass').value;
      const n1 = document.getElementById('new-pass').value;
      const n2 = document.getElementById('confirm-pass').value;

      if (!current || !n1 || !n2) {
        if (window.showToast) window.showToast('Lütfen tüm alanları doldurun!', 'error');
        return;
      }
      if (n1 !== n2) {
        if (window.showToast) window.showToast('Şifreler birbiriyle eşleşmiyor!', 'error');
        return;
      }
      if (n1.length < 8) {
        if (window.showToast) window.showToast('Yeni şifre en az 8 karakter olmalı!', 'error');
        return;
      }

      if (window.showToast) window.showToast('Şifreniz başarıyla değiştirildi! 🔐');
      passForm.reset();
    });
  }
}

export function renderRewards(container) {
  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content">
        <div class="page-header">
          <h1 class="page-title">🏆 Puan & Ödüller</h1>
          <p class="page-subtitle">Kazandığın puanları ekstra indirim ve hediyelere dönüştür</p>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;">
          <div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);padding:40px;text-align:center;position:relative;overflow:hidden;" class="animate-in">
            <div style="position:absolute;inset:0;background:radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, transparent 70%);"></div>
            
            <div style="font-size:3.5rem;margin-bottom:16px;position:relative;z-index:1;">${levels.find(l => l.name === user.level).icon}</div>
            <h2 style="font-family:var(--font-heading);font-weight:700;font-size:3rem;line-height:1;margin-bottom:8px;position:relative;z-index:1;background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">${user.points}</h2>
            <div style="color:var(--text-2);font-weight:500;margin-bottom:24px;position:relative;z-index:1;">Toplam UniPuan Bakiyesi</div>
            
            <div style="max-width:300px;margin:0 auto;position:relative;z-index:1;">
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:0.85rem;font-weight:600;">
                <span>${user.level} Üye</span>
                <span style="color:var(--text-3);">${3000 - user.points} puan kaldı →</span>
              </div>
              <div class="level-progress" style="height:8px;">
                <div class="level-progress-bar" style="width:${(user.points/3000)*100}%;"></div>
              </div>
              <div class="level-badges">
                ${levels.map(l => `<div class="level-badge ${l.name === user.level ? 'active' : ''}">${l.icon}</div>`).join('')}
              </div>
            </div>
            
            <button class="btn btn-primary" style="margin-top:32px;position:relative;z-index:1;">Nasıl Puan Kazanırım?</button>
          </div>

          <div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);padding:32px;" class="animate-in animate-in-delay-1">
            <h3 style="font-family:var(--font-heading);font-weight:700;font-size:1.3rem;margin-bottom:20px;display:flex;align-items:center;gap:12px;">Top 10 Öğrenci 👑</h3>
            <div style="max-height:300px;overflow-y:auto;padding-right:8px;">
              ${leaderboard.map(lb => `
                <div class="leaderboard-item">
                  <div class="leaderboard-rank">${lb.rank}</div>
                  <div class="leaderboard-avatar" style="background:rgba(255,255,255,0.05);border:1px solid ${lb.color};color:${lb.color};">${lb.avatar}</div>
                  <div class="leaderboard-name">
                    <div>${lb.name}</div>
                    <div style="font-size:0.75rem;color:var(--text-3);font-weight:400;">${lb.uni}</div>
                  </div>
                  <div class="leaderboard-pts">${lb.points} pt</div>
                </div>
              `).join('')}
            </div>
            <div style="margin-top:16px;text-align:center;padding-top:16px;border-top:1px solid var(--border-2);color:var(--text-2);font-size:0.9rem;">
              Senin Sıralaman: <strong>142. Sırada</strong>
            </div>
          </div>
        </div>

        <h3 style="font-family:var(--font-heading);font-weight:600;font-size:1.5rem;margin-bottom:24px;" class="animate-in animate-in-delay-2">🎁 Ödül Mağazası</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px;" class="animate-in animate-in-delay-2">
          ${rewards.map((r, i) => `
            <div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);padding:24px;text-align:center;transition:var(--transition);opacity:${r.available ? '1' : '0.6'};filter:${r.available ? 'none' : 'grayscale(0.5)'};">
              <div style="font-size:3rem;margin-bottom:16px;">${r.icon}</div>
              <h4 style="font-family:var(--font-heading);font-weight:600;margin-bottom:8px;font-size:1.1rem;height:44px;">${r.name}</h4>
              <div style="font-family:var(--font-heading);font-weight:700;color:var(--primary-light);font-size:1.2rem;margin-bottom:20px;">🪙 ${r.points} pt</div>
              
              ${r.available 
                ? `<button class="btn btn-secondary" style="width:100%;" onclick="showToast('${r.name} ödülü alındı!');">Hemen Al</button>`
                : `<button class="btn" style="width:100%;background:var(--surface-3);color:var(--text-3);cursor:not-allowed;" disabled>Puan Yetersiz</button>`
              }
            </div>
          `).join('')}
        </div>

      </div>
    </div>
  </div>`;
}

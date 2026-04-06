import { renderSidebar, renderCampaignCard } from '../components.js';
import { campaigns, getBrand, user, getActiveCoupons, categories } from '../data.js';

export function renderDashboard(container) {
  const recentCampaigns = campaigns.slice(0, 4);
  const activeCoupons = getActiveCoupons();

  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content" style="padding-top:24px;">

        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;">
          <div>
            <h1 class="page-title">${(function(){ const h = new Date().getHours(); if(h>=5 && h<12) return 'Günaydın'; if(h>=12 && h<18) return 'İyi Günler'; if(h>=18 && h<22) return 'İyi Akşamlar'; return 'İyi Geceler'; })()}, ${user.name}! 👋</h1>
            <p class="page-subtitle" style="color:var(--text-2);">Bugün senin için harika fırsatlar var</p>
          </div>
          <div style="display:flex;align-items:center;gap:16px;">
            <div class="mode-toggle" id="themeToggle" title="Modu Değiştir">🌓</div>
            <a href="#/notifications" class="btn btn-icon btn-secondary" style="position:relative;">
              🔔
              <span style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:var(--error);border-radius:50%;"></span>
            </a>
            <a href="#/profile" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--text);">
              <div class="profile-avatar" style="width:40px;height:40px;font-size:0.9rem;">${user.avatar}</div>
            </a>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1.5fr;gap:24px;margin-bottom:32px;">
          <div class="digital-card animate-in">
            <div style="position:absolute;top:20px;right:24px;font-size:0.65rem;font-weight:800;letter-spacing:2px;opacity:0.6;font-family:var(--font-heading);">CÜZDANIM</div>
            <div class="card-logo-overlay">💎</div>
            <div class="card-chip" style="background:transparent;display:flex;align-items:center;gap:0;">
              <svg width="40" height="25" viewBox="0 0 40 25">
                <circle cx="12.5" cy="12.5" r="12.5" fill="#EB001B" />
                <circle cx="27.5" cy="12.5" r="12.5" fill="#F79E1B" opacity="0.8" />
                <circle cx="20" cy="12.5" r="8" fill="#FF5F00" opacity="0.9" />
              </svg>
            </div>
            <div class="card-number">**** **** **** 2450</div>
            <div style="display:flex;justify-content:space-between;align-items:flex-end;">
              <div>
                <div class="card-holder">Toplam Tasarruf</div>
                <div class="card-name">₺${user.totalSaved}</div>
              </div>
              <div style="text-align:right;">
                <div class="card-holder">Puan</div>
                <div class="card-name">${user.points} pt</div>
              </div>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;">
            <div class="stat-card pink animate-in animate-in-delay-1" style="cursor:pointer;" onclick="location.hash='/coupons'">
              <div class="stat-icon">🎟️</div>
              <div class="stat-value">${activeCoupons.length}</div>
              <div class="stat-label">Aktif Kupon</div>
            </div>
            <div class="stat-card green animate-in animate-in-delay-2" style="cursor:pointer;" onclick="location.hash='/favorites'">
              <div class="stat-icon">❤️</div>
              <div class="stat-value">${user.favoritesCount}</div>
              <div class="stat-label">Favorilerim</div>
            </div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:2fr 1fr;gap:24px;margin-bottom:32px;">
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <h2 style="font-family:var(--font-heading);font-weight:600;font-size:1.2rem;">🔥 Son Kampanyalar</h2>
              <a href="#/campaigns" class="btn btn-ghost btn-sm">Tümünü Gör →</a>
            </div>
            <div class="campaign-grid" style="grid-template-columns:repeat(2,1fr);">
              ${recentCampaigns.map(c => renderCampaignCard(c, getBrand(c.brandId))).join('')}
            </div>
          </div>
          
          <div>
            <h2 style="font-family:var(--font-heading);font-weight:600;font-size:1.2rem;margin-bottom:16px;">⚡ Hızlı Erişim</h2>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">
              ${categories.slice(0,6).map(cat => `
                <a href="#/category/${cat.id}" class="cat-card ${cat.cssClass}" style="padding:16px;text-decoration:none;color:var(--text);">
                  <div class="cat-icon" style="font-size:1.8rem;">${cat.icon}</div>
                  <div class="cat-name" style="font-size:0.85rem;">${cat.name}</div>
                </a>
              `).join('')}
            </div>

            <div style="margin-top:20px;background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);padding:20px;">
              <h3 style="font-family:var(--font-heading);font-weight:600;margin-bottom:12px;font-size:1rem;">🏆 Seviye Durumu</h3>
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <span>🥇</span>
                <span style="font-weight:600;">${user.level}</span>
                <span style="color:var(--text-3);font-size:0.85rem;">- ${user.points} puan</span>
              </div>
              <div class="level-progress">
                <div class="level-progress-bar" style="width:${(user.points/3000)*100}%;"></div>
              </div>
              <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--text-3);">
                <span>Gold</span>
                <span>${3000 - user.points} puan kaldı → Platinum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  setTimeout(() => {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.onclick = () => {
        document.body.classList.toggle('light-mode');
        if (window.showToast) window.showToast(document.body.classList.contains('light-mode') ? 'Aydınlık Mod Aktif ☀️' : 'Karanlık Mod Aktif 🌙');
      };
    }
  }, 100);
}

import { renderSidebar, renderCampaignCard } from '../components.js';
import { user, campaigns, getBrand } from '../data.js';

export function renderProfile(container) {
  const badges = [
    { icon: '🌱', name: 'İlk Adım', desc: 'İlk kuponunu kullandın', active: true },
    { icon: '💰', name: 'Tasarruf Ustası', desc: '1000₺ üzeri tasarruf', active: true },
    { icon: '🔥', name: 'Kampanya Avcısı', desc: 'Üst üste 5 gün giriş', active: true },
    { icon: '❤️', name: 'Favorici', desc: '20 favoriye ulaş', active: false },
    { icon: '🏆', name: 'Platinum Üye', desc: 'En üst seviyeye ulaş', active: false },
    { icon: '👥', name: 'Sosyal Ağ', desc: '5 arkadaş davet et', active: false }
  ];

  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content">
        <div class="page-header">
          <h1 class="page-title">👤 Profil</h1>
          <p class="page-subtitle">Kişisel bilgilerin ve platformdaki durumun</p>
        </div>

        <div class="profile-header animate-in">
          <div class="profile-avatar" style="width:100px;height:100px;font-size:2.5rem;">${user.avatar}</div>
          <div style="flex:1;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
              <h2 class="profile-name">${user.name} ${user.surname}</h2>
              <div class="verified-badge" title="Üniversite Onaylı Profil">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="verified-icon"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></path></svg>
                Onaylı Öğrenci
              </div>
              <span style="background:linear-gradient(135deg,var(--warning),#D97706);color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:700;">${user.level} Üye</span>
            </div>
            <p class="profile-uni"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> ${user.university} - ${user.department}</p>
            <p style="color:var(--text-3);font-size:0.85rem;margin-top:4px;">✨ Kurumsal e-posta ile doğrulanmış hesap • ✉️ ${user.email}</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <a href="#/settings" class="btn btn-primary btn-sm">Profili Düzenle</a>
            <a href="#/settings" class="btn btn-secondary btn-sm">🔐 Şifreyi Değiştir</a>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;">
          <div class="animate-in animate-in-delay-1">
            <h3 style="font-family:var(--font-heading);font-weight:600;margin-bottom:16px;">📊 İstatistikler</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
              <div class="stat-card" style="padding:20px;">
                <div class="stat-value" style="font-size:1.5rem;color:var(--success);">₺${user.totalSaved}</div>
                <div class="stat-label">Toplam Tasarruf</div>
              </div>
              <div class="stat-card" style="padding:20px;">
                <div class="stat-value" style="font-size:1.5rem;color:var(--primary-light);">${user.usedCoupons}</div>
                <div class="stat-label">Kullanılan Kupon</div>
              </div>
              <div class="stat-card" style="padding:20px;">
                <div class="stat-value" style="font-size:1.5rem;color:var(--warning);">${user.points}</div>
                <div class="stat-label">Puan Bakiyesi</div>
              </div>
              <div class="stat-card" style="padding:20px;">
                <div class="stat-value" style="font-size:1.5rem;color:var(--secondary);">${user.favoritesCount}</div>
                <div class="stat-label">Favoriler</div>
              </div>
            </div>
          </div>

          <div class="animate-in animate-in-delay-2">
            <h3 style="font-family:var(--font-heading);font-weight:600;margin-bottom:16px;">🏅 Kazanılan Rozetler</h3>
            <div class="badge-grid" style="grid-template-columns:repeat(3,1fr);">
              ${badges.map(b => `
                <div class="badge-item" style="opacity:${b.active ? '1' : '0.4'};filter:${b.active ? 'none' : 'grayscale(1)'};">
                  <div class="badge-icon">${b.icon}</div>
                  <div class="badge-name">${b.name}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

export function renderFavorites(container) {
  const renderList = () => {
    const favs = campaigns.filter(c => user.favoriteCampaignIds.includes(c.id));

    container.innerHTML = `
    <div class="app-layout">
      ${renderSidebar()}
      <div class="app-main">
        <div class="app-content">
          <div class="page-header">
            <h1 class="page-title">❤️ Favorilerim</h1>
            <p class="page-subtitle">Kaydettiğin ve takip ettiğin kampanyalar</p>
          </div>

          ${favs.length > 0 ? `
            <div class="campaign-grid" id="favGrid">
              ${favs.map((c, i) => {
                let cardHTML = renderCampaignCard(c, getBrand(c.brandId));
                return `<div class="animate-in animate-in-delay-${(i % 4) + 1}" data-id="${c.id}">${cardHTML}</div>`;
              }).join('')}
            </div>
          ` : `
            <div class="empty-state animate-in">
              <div class="empty-icon">💔</div>
              <h3 class="empty-title">Henüz favori kampanyan yok</h3>
              <p class="empty-desc">Kampanya detayındaki kalp ikonuna tıklayarak favorilerine ekleyebilirsin.</p>
              <a href="#/campaigns" class="btn btn-primary" style="margin-top:24px;">Keşfetmeye Başla</a>
            </div>
          `}
        </div>
      </div>
    </div>`;

    // Favoriden çıkarma mantığı
    const grid = container.querySelector('#favGrid');
    if (grid) {
      grid.querySelectorAll('.card-fav').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const cardWrapper = btn.closest('[data-id]');
          const id = parseInt(cardWrapper.getAttribute('data-id'));
          
          // Listeden çıkar
          user.favoriteCampaignIds = user.favoriteCampaignIds.filter(favId => favId !== id);
          user.favoritesCount = user.favoriteCampaignIds.length;
          
          // Toast göster
          if (window.showToast) window.showToast('Favorilerden Çıkarıldı');
          
          // Re-render (Anlık güncelleme)
          renderFavorites(container);
        };
      });
    }
  };

  renderList();
}

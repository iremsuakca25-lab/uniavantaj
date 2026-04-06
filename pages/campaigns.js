import { renderSidebar, renderCampaignCard, showToast } from '../components.js';
import { campaigns, getBrand, categories, getCampaignById } from '../data.js';

export function renderCampaigns(container) {
  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content">
        <div class="page-header">
          <h1 class="page-title">🏷️ Tüm Kampanyalar</h1>
          <p class="page-subtitle">Öğrencilere özel tüm indirim fırsatları</p>
        </div>

        <div class="filter-bar">
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="Marka veya kampanya ara..." id="searchInput" />
          </div>
          <div class="filter-chip active" data-cat="all">Tümü</div>
          ${categories.slice(0,4).map(cat => `<div class="filter-chip" data-cat="${cat.id}">${cat.name}</div>`).join('')}
          <div class="filter-chip" style="margin-left:auto;">
            Sırala: Yeniden Eskiye ▾
          </div>
        </div>

        <div class="campaign-grid" id="campaignGrid" style="transition:var(--transition); opacity:1;">
          ${campaigns.map((c, i) => `
            <div class="animate-in animate-in-delay-${(i%4)+1}">
              ${renderCampaignCard(c, getBrand(c.brandId))}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>`;
  
  // Real-time Reactive Search & Filter System
  setTimeout(() => {
    const searchInput = document.getElementById('searchInput');
    const chips = document.querySelectorAll('.filter-chip[data-cat]');
    const grid = document.getElementById('campaignGrid');
    
    let currentSearch = '';
    let currentCategory = 'all';

    function renderActiveCampaigns() {
      grid.style.opacity = '0';
      
      setTimeout(() => {
        const filtered = campaigns.filter(c => {
          const matchSearch = c.title.toLowerCase().includes(currentSearch) || getBrand(c.brandId).name.toLowerCase().includes(currentSearch);
          const matchCat = currentCategory === 'all' || c.category === currentCategory;
          return matchSearch && matchCat;
        });

        if(filtered.length === 0) {
          grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-3);">Sonuç bulunamadı 😢</div>';
          grid.style.opacity = '1';
          return;
        }

        grid.innerHTML = filtered.map(c => renderCampaignCard(c, getBrand(c.brandId))).join('');
        grid.style.opacity = '1';
      }, 200);
    }

    if(searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        renderActiveCampaigns();
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        chips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentCategory = e.currentTarget.getAttribute('data-cat');
        renderActiveCampaigns();
      });
    });

  }, 100);
}

export function renderCampaignDetail(container, params) {
  const id = params.id;
  const campaign = getCampaignById(id);
  
  if (!campaign) {
    location.hash = '/campaigns';
    return;
  }
  
  const brand = getBrand(campaign.brandId);
  const similar = campaigns.filter(c => c.category === campaign.category && c.id !== campaign.id).slice(0, 2);

  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content">
        
        <a href="#/campaigns" class="btn btn-ghost btn-sm" style="margin-bottom:20px;">← Geri Dön</a>

        <div class="detail-hero animate-in">
          <img src="${campaign.image}" alt="${campaign.title}" onerror="this.src='https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800';">
          <div class="detail-hero-overlay"></div>
          <div class="detail-hero-content">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <div style="width:40px;height:40px;background:var(--surface);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">
                ${brand.logo}
              </div>
              <span style="color:white;font-weight:600;font-size:1.2rem;">${brand.name}</span>
              <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:0.8rem;font-weight:600;">${campaign.discount} İndirim</span>
            </div>
            <h1 style="font-family:var(--font-heading);font-size:2.5rem;font-weight:700;color:white;margin-bottom:8px;line-height:1.2;">${campaign.title}</h1>
            <div style="display:flex;gap:16px;color:rgba(255,255,255,0.8);font-size:0.9rem;">
              <span>⭐ ${campaign.rating} (${campaign.usedCount} kullanım)</span>
              <span>⏰ Son Tarih: ${campaign.expiry}</span>
            </div>
          </div>
        </div>

        <div class="detail-grid">
          <div class="animate-in animate-in-delay-1">
            <h2 style="font-family:var(--font-heading);font-weight:600;font-size:1.5rem;margin-bottom:16px;">Kampanya Detayı</h2>
            <p style="color:var(--text-2);font-size:1.05rem;line-height:1.8;margin-bottom:32px;">${campaign.desc}</p>
            
            <h3 style="font-family:var(--font-heading);font-weight:600;font-size:1.2rem;margin-bottom:12px;">Geçerlilik Koşulları</h3>
            <ul style="color:var(--text-2);line-height:1.8;margin-bottom:32px;padding-left:20px;">
              ${campaign.conditions.map(c => `<li>${c}</li>`).join('')}
            </ul>

            <h3 style="font-family:var(--font-heading);font-weight:600;font-size:1.2rem;margin-bottom:16px;">Benzer Fırsatlar</h3>
            <div class="campaign-grid" style="grid-template-columns:1fr 1fr;">
              ${similar.map(c => renderCampaignCard(c, getBrand(c.brandId))).join('')}
            </div>
          </div>

          <div class="animate-in animate-in-delay-2">
            <div class="detail-sidebar-card">
              <h3 style="font-family:var(--font-heading);font-weight:600;font-size:1.2rem;margin-bottom:8px;">Kampanyayı Kullan</h3>
              <p style="color:var(--text-2);font-size:0.9rem;margin-bottom:24px;">Kupon kodunu kopyala ve kasada/ödeme adımında kullan.</p>
              
              <div class="coupon-code" id="couponCodeBox" onclick="
                navigator.clipboard.writeText('${campaign.couponCode}');
                const box = this;
                box.style.background = 'var(--success)';
                box.style.borderColor = 'var(--success)';
                box.querySelector('span:last-child').textContent = 'Kopyalandı! ✅';
                box.querySelector('span:first-child').style.color = 'white';
                setTimeout(() => {
                  box.style.background = '';
                  box.style.borderColor = '';
                  box.querySelector('span:last-child').textContent = 'Tıkla ve Kopyala';
                  box.querySelector('span:first-child').style.color = '';
                }, 2000);
              ">
                <span>${campaign.couponCode}</span>
                <span class="copy-text">Tıkla ve Kopyala</span>
              </div>

              <button class="btn btn-primary" style="width:100%;margin-top:16px;" onclick="location.hash='/coupons';">Kuponlarıma Ekle</button>
              
              <div style="margin-top:24px;border-top:1px solid var(--border-2);padding-top:24px;">
                <h4 style="font-weight:600;font-size:0.9rem;margin-bottom:12px;">Geçerli Şubeler</h4>
                <div class="map-container" style="height:150px;border-radius:var(--radius-sm);">
                  <div class="map-placeholder">
                    <div style="font-size:2rem;margin-bottom:8px;">🗺️</div>
                    <div style="font-size:0.8rem;">Haritada Gör</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>`;
}

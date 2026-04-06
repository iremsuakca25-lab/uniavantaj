import { renderSidebar, renderCampaignCard } from '../components.js';
import { categories, getCampaignsByCategory, getBrand } from '../data.js';

export function renderCategories(container) {
  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content">
        <div class="page-header">
          <h1 class="page-title">📂 Kategoriler</h1>
          <p class="page-subtitle">İlgi alanlarına göre fırsatları keşfet</p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;">
          ${categories.map((cat, i) => `
            <a href="#/category/${cat.id}" class="cat-card animate-in animate-in-delay-${(i%4)+1}" style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);padding:32px 24px;text-align:center;text-decoration:none;color:var(--text);position:relative;overflow:hidden;display:block;">
              <div style="position:absolute;inset:0;background:${cat.gradient};opacity:0.1;transition:var(--transition);" class="cat-bgHover"></div>
              <div style="font-size:3.5rem;margin-bottom:16px;position:relative;z-index:1;">${cat.icon}</div>
              <h2 style="font-family:var(--font-heading);font-weight:700;font-size:1.5rem;margin-bottom:8px;position:relative;z-index:1;">${cat.name}</h2>
              <div style="color:var(--text-2);font-size:0.95rem;position:relative;z-index:1;">${cat.count} Aktif Fırsat</div>
            </a>
          `).join('')}
        </div>
        
        <style>
          .cat-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.2); box-shadow: var(--shadow); }
          .cat-card:hover .cat-bgHover { opacity: 0.2; }
        </style>
      </div>
    </div>
  </div>`;
}

export function renderCategoryDetail(container, params) {
  const catId = params.id;
  const category = categories.find(c => c.id === catId);
  
  if (!category) {
    location.hash = '/categories';
    return;
  }
  
  const campaigns = getCampaignsByCategory(catId);

  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content">
        <a href="#/categories" class="btn btn-ghost btn-sm" style="margin-bottom:20px;">← Kategorilere Dön</a>

        <div style="background:${category.gradient};border-radius:var(--radius);padding:40px;display:flex;align-items:center;gap:32px;margin-bottom:32px;position:relative;overflow:hidden;">
          <div style="position:absolute;inset:0;background:rgba(11,15,26,0.6);"></div>
          <div style="font-size:5rem;position:relative;z-index:1;">${category.icon}</div>
          <div style="position:relative;z-index:1;">
            <h1 style="font-family:var(--font-heading);font-weight:800;font-size:2.5rem;color:white;margin-bottom:8px;">${category.name}</h1>
            <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;">Bu kategoride ${campaigns.length} aktif kampanya bulunuyor.</p>
          </div>
        </div>

        ${campaigns.length > 0 ? `
          <div class="filter-bar">
            <div class="filter-chip active" style="border-color:${category.color};color:${category.color};background:rgba(255,255,255,0.05);">Tümü</div>
            <div class="filter-chip">Popüler</div>
            <div class="filter-chip">Yeni Eklenenler</div>
            <div class="filter-chip" style="margin-left:auto;">Sırala: İndirim Oranı ▾</div>
          </div>

          <div class="campaign-grid">
            ${campaigns.map((c, i) => `
              <div class="animate-in animate-in-delay-${(i%4)+1}">
                ${renderCampaignCard(c, getBrand(c.brandId))}
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="empty-state animate-in">
            <div class="empty-icon">😢</div>
            <h3 class="empty-title">Bu kategoride henüz kampanya yok</h3>
            <p class="empty-desc">Yakında yepyeni indirimlerle burada olacağız. Lütfen daha sonra tekrar kontrol et.</p>
            <a href="#/campaigns" class="btn btn-primary" style="margin-top:24px;">Tüm Kampanyalara Dön</a>
          </div>
        `}
      </div>
    </div>
  </div>`;
}

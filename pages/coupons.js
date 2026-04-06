import { renderSidebar } from '../components.js';
import { getActiveCoupons, getUsedCoupons, getCampaignById, getBrand } from '../data.js';

export function renderCoupons(container) {
  const activeCoupons = getActiveCoupons();

  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content">
        <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-end;">
          <div>
            <h1 class="page-title">🎟️ Kuponlarım</h1>
            <p class="page-subtitle">Kullanıma hazır aktif indirim kuponların</p>
          </div>
          <a href="#/coupon-history" class="btn btn-secondary btn-sm">Kupon Geçmişi →</a>
        </div>

        ${activeCoupons.length > 0 ? `
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));gap:24px;">
            ${activeCoupons.map((coupon, i) => {
              const c = getCampaignById(coupon.campaignId);
              const b = getBrand(c.brandId);
              return `
              <div class="animate-in animate-in-delay-${(i%4)+1}" style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);overflow:hidden;display:flex;position:relative;">
                <div style="position:absolute;top:0;bottom:0;left:100px;width:1px;background:var(--border-2);border-left:2px dashed var(--bg);"></div>
                <div style="width:100px;background:linear-gradient(135deg,var(--surface-2),var(--surface-3));display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;z-index:1;">
                  <div style="font-size:2rem;margin-bottom:8px;">${b.logo}</div>
                  <div style="font-size:0.75rem;font-weight:600;color:var(--text-2);text-align:center;">${b.name}</div>
                </div>
                <div style="flex:1;padding:24px;z-index:1;">
                  <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
                    <h3 style="font-family:var(--font-heading);font-weight:600;font-size:1.1rem;">${c.title}</h3>
                    <span style="background:rgba(16,185,129,0.1);color:var(--success);padding:4px 8px;border-radius:6px;font-size:0.75rem;font-weight:600;white-space:nowrap;">Son: ${coupon.expiresAt}</span>
                  </div>
                  <div style="background:var(--bg);border:1px dashed var(--primary);border-radius:var(--radius-sm);padding:12px;text-align:center;font-family:monospace;font-size:1.3rem;font-weight:700;letter-spacing:3px;margin-bottom:16px;">
                    ${coupon.code}
                  </div>
                  <div style="display:flex;gap:12px;">
                    <button class="btn btn-primary" style="flex:1;" onclick="
                      if(window.showToast) window.showToast('Kupon başarıyla kullanıldı! 🎉');
                      this.disabled = true;
                      this.innerText = 'Kullanıldı';
                      setTimeout(() => location.reload(), 1500);
                    ">Kullan</button>
                    <button class="btn btn-secondary" onclick="location.hash='/campaign/${c.id}'">Detay</button>
                  </div>
                </div>
              </div>`;
            }).join('')}
          </div>
        ` : `
          <div class="empty-state animate-in">
            <div class="empty-icon">🎫</div>
            <h3 class="empty-title">Aktif kuponun bulunmuyor</h3>
            <p class="empty-desc">Kampanyaları keşfet ve beğendiğin fırsatların kuponlarını hemen al!</p>
            <a href="#/campaigns" class="btn btn-primary" style="margin-top:24px;">Kampanyalara Git</a>
          </div>
        `}
      </div>
    </div>
  </div>`;
}

export function renderCouponHistory(container) {
  const pastCoupons = getUsedCoupons();

  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content">
        <a href="#/coupons" class="btn btn-ghost btn-sm" style="margin-bottom:20px;">← Aktif Kuponlara Dön</a>
        
        <div class="page-header">
          <h1 class="page-title">📋 Kupon Geçmişi</h1>
          <p class="page-subtitle">Kullandığın ve süresi dolan tüm kuponların</p>
        </div>

        <div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);padding:32px;margin-bottom:32px;display:flex;align-items:center;justify-content:space-between;" class="animate-in">
          <div>
            <h2 style="font-family:var(--font-heading);font-weight:600;font-size:1.2rem;margin-bottom:8px;">Aylık Tasarruf Özeti</h2>
            <p style="color:var(--text-2);font-size:0.95rem;">Bu ay içerisindeki kupon kullanımların sayesinde toplam <span style="color:var(--success);font-weight:600;">245₺</span> tasarruf ettin. Harika gidiyorsun!</p>
          </div>
          <div style="width:60px;height:60px;border-radius:50%;background:rgba(16,185,129,0.1);display:flex;align-items:center;justify-content:center;font-size:2rem;color:var(--success);flex-shrink:0;">💰</div>
        </div>

        <div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);overflow:hidden;" class="animate-in animate-in-delay-1">
          <table style="width:100%;border-collapse:collapse;text-align:left;">
            <thead>
              <tr style="background:var(--surface-2);border-bottom:1px solid var(--border-2);">
                <th style="padding:16px 24px;font-weight:600;color:var(--text-2);font-size:0.9rem;">Kampanya</th>
                <th style="padding:16px 24px;font-weight:600;color:var(--text-2);font-size:0.9rem;">Marka</th>
                <th style="padding:16px 24px;font-weight:600;color:var(--text-2);font-size:0.9rem;">Kupon Kodu</th>
                <th style="padding:16px 24px;font-weight:600;color:var(--text-2);font-size:0.9rem;">Durum</th>
                <th style="padding:16px 24px;font-weight:600;color:var(--text-2);font-size:0.9rem;">Tarih</th>
              </tr>
            </thead>
            <tbody>
              ${pastCoupons.map(coupon => {
                const c = getCampaignById(coupon.campaignId);
                const b = getBrand(c.brandId);
                const isUsed = coupon.status === 'used';
                const statusColor = isUsed ? 'var(--success)' : 'var(--error)';
                const statusBg = isUsed ? 'rgba(16,185,129,0.1)' : 'rgba(244,63,94,0.1)';
                const statusText = isUsed ? 'Kullanıldı' : 'Süresi Doldu';
                const dateText = isUsed ? coupon.usedAt : coupon.expiresAt;
                
                return `
                <tr style="border-bottom:1px solid var(--border-2);">
                  <td style="padding:16px 24px;font-weight:500;">${c.title}</td>
                  <td style="padding:16px 24px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                      <span>${b.logo}</span> ${b.name}
                    </div>
                  </td>
                  <td style="padding:16px 24px;font-family:monospace;color:var(--text-2);">${coupon.code}</td>
                  <td style="padding:16px 24px;">
                    <span style="background:${statusBg};color:${statusColor};padding:4px 8px;border-radius:6px;font-size:0.75rem;font-weight:600;">${statusText}</span>
                  </td>
                  <td style="padding:16px 24px;color:var(--text-2);font-size:0.9rem;">${dateText}</td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`;
}

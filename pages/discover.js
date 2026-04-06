import { renderSidebar, renderCampaignCard } from '../components.js';
import { notifications, campaigns, getBrand } from '../data.js';

export function renderNearby(container) {
  const nearbyCampaigns = campaigns.slice(0, 6);

  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content" style="display:flex;flex-direction:column;height:100vh;padding:24px;">
        <div class="page-header" style="margin-bottom:20px;flex-shrink:0;">
          <h1 class="page-title">📍 Yakındaki Fırsatlar</h1>
          <p class="page-subtitle">Sana en yakın mekanlardaki öğrenci indirimleri</p>
        </div>

        <div class="filter-bar" style="flex-shrink:0;">
          <div class="search-box" style="flex:1;">
            <span class="search-icon">🔍</span>
            <input type="text" placeholder="Konum veya mekan ara..." />
          </div>
          <div class="filter-chip active">Tümü (500m)</div>
          <div class="filter-chip">1 km</div>
          <div class="filter-chip">3 km</div>
          <div class="filter-chip">5+ km</div>
          <button class="btn btn-primary btn-sm" style="margin-left:auto;" id="findMyLoc">
            <span>🧭</span> Konumumu Bul
          </button>
        </div>

        <div style="display:flex;gap:24px;flex:1;min-height:0;margin-top:16px;">
          <div style="flex:1;background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);overflow:hidden;position:relative;" class="animate-in">
            <!-- Realistic Interactive Map (Istanbul/Campus Centered) -->
            <iframe id="mapIframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6826500588145!2d28.89408661214!3d41.047587717088924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab002a2a0a2a1%3A0x2a2a0a2a2a0a2a2a!2sForum%20Istanbul!5e0!3m2!1str!2str!4v1689255018314!5m2!1str!2str" style="border:0; width:100%; height:100%; position:absolute; inset:0; filter: invert(90%) hue-rotate(180deg) contrast(1.2) sepia(10%);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
            <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(11,15,26,0.3),rgba(139,92,246,0.1));pointer-events:none;"></div>
            
            <!-- Map Markers Demo - Center: Forum Istanbul -->
            <div style="position:absolute;inset:0;pointer-events:none;z-index:20;">
              <!-- User Location Pin (Central Plaza) -->
              <div style="position:absolute;top:45%;left:48%;width:30px;height:30px;background:var(--primary);border:3px solid white;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 0 20px var(--primary);animation:pulse 2s infinite;pointer-events:auto;cursor:pointer;z-index:30;" title="Forum İstanbul - Şu An Buradasın">
                <div style="width:10px;height:10px;background:white;border-radius:50%;"></div>
              </div>
              
              <!-- Starbucks Pin (North Wing) -->
              <div style="position:absolute;top:30%;left:42%;width:40px;height:40px;background:white;border:2px solid #00704A;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.3);pointer-events:auto;cursor:pointer;transition:transform 0.2s;overflow:hidden;z-index:25;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="Starbucks Forum - %25 İndirim">
                <img src="https://cdn.simpleicons.org/starbucks/00704A" style="width:24px;height:24px;object-fit:contain;">
              </div>
              
              <!-- McDonald's Pin (Food Court East) -->
              <div style="position:absolute;top:40%;left:65%;width:40px;height:40px;background:white;border:2px solid #FFC72C;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.3);pointer-events:auto;cursor:pointer;transition:transform 0.2s;overflow:hidden;z-index:25;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="McDonald's Forum - Menülerde %30">
                <img src="https://cdn.simpleicons.org/mcdonalds/FFC72C" style="width:26px;height:26px;object-fit:contain;">
              </div>
              
              <!-- D&R Pin (West Side) -->
              <div style="position:absolute;top:60%;left:30%;width:40px;height:40px;background:white;border:2px solid #1B2455;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.3);pointer-events:auto;cursor:pointer;transition:transform 0.2s;overflow:hidden;z-index:25;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="D&R Forum - %20 İndirim">
                <img src="https://www.google.com/s2/favicons?domain=dr.com.tr&sz=128" style="width:28px;height:28px;object-fit:contain;border-radius:4px;">
              </div>
              
              <!-- Gratis Pin (Main Entrance Area) -->
              <div style="position:absolute;top:70%;left:52%;width:40px;height:40px;background:white;border:2px solid #E91E8C;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.3);pointer-events:auto;cursor:pointer;transition:transform 0.2s;overflow:hidden;z-index:25;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="Gratis Forum - Kozmetikte %30">
                <img src="https://www.google.com/s2/favicons?domain=gratis.com&sz=128" style="width:28px;height:28px;object-fit:contain;border-radius:4px;">
              </div>
            </div>
            
            <div style="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);background:var(--surface);padding:12px 24px;border-radius:30px;border:1px solid var(--border-2);box-shadow:var(--shadow);font-size:0.9rem;font-weight:500;display:flex;align-items:center;gap:8px;z-index:10;pointer-events:auto;">
              <span style="color:var(--success);">●</span> 12 mekan bulundu
            </div>
          </div>
          
          <div style="width:400px;overflow-y:auto;display:flex;flex-direction:column;gap:16px;padding-right:8px;" class="animate-in animate-in-delay-1">
            <h3 style="font-family:var(--font-heading);font-weight:600;font-size:1.1rem;position:sticky;top:0;background:var(--bg);padding-bottom:12px;z-index:10;">Sana En Yakınlar</h3>
            ${nearbyCampaigns.map(c => {
              const distance = Math.floor(Math.random() * 800) + 100;
              let cardHTML = renderCampaignCard(c, getBrand(c.brandId));
              return `
              <div style="position:relative;">
                ${cardHTML}
                <div style="position:absolute;bottom:16px;right:16px;background:var(--surface-3);padding:4px 10px;border-radius:20px;font-size:0.75rem;font-weight:600;display:flex;align-items:center;gap:4px;">
                  <span>📍</span> ${distance}m
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>

      </div>
    </div>
  </div>`;

  setTimeout(() => {
    const btn = document.getElementById('findMyLoc');
    const iframe = document.getElementById('mapIframe');
    
    if (btn) {
      btn.onclick = () => {
        btn.innerHTML = '<span>⏳</span> Arıyor...';
        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              iframe.src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed&t=m`;
              btn.innerHTML = '<span>📍</span> Konumun Bulundu!';
              if(window.showToast) window.showToast('Seni buldum! Yakındaki fırsatlara göz atabilirsin.');
            },
            () => {
              btn.innerHTML = '<span>❌</span> Hata Oluştu';
              if(window.showToast) window.showToast('Konumuna erişilemedi.', 'error');
            }
          );
        } else {
          if(window.showToast) window.showToast('Tarayıcın konumu desteklemiyor.', 'error');
        }
      };
    }
  }, 100);
}

export function renderNotifications(container) {
  const getNotifItemHTML = (n) => `
    <div class="notif-item ${!n.read ? 'unread' : ''}" style="background:var(--surface);border:1px solid var(--border-2);margin-bottom:12px;">
      <div class="notif-icon" style="width:48px;height:48px;background:var(--surface-3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${n.icon}</div>
      <div class="notif-text">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
          <h4 style="font-weight:600;font-size:1rem;font-family:var(--font-heading);">${n.title}</h4>
          <span class="notif-time">${n.time}</span>
        </div>
        <p style="color:var(--text-2);">${n.message}</p>
      </div>
      <div class="notif-dot"></div>
    </div>
  `;

  container.innerHTML = `
  <div class="app-layout">
    ${renderSidebar()}
    <div class="app-main">
      <div class="app-content" style="max-width:800px;margin:0 auto;width:100%;">
        <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-end;">
          <div>
            <h1 class="page-title">🔔 Bildirimler</h1>
            <p class="page-subtitle">Sana özel kampanyalar, güncellemeler ve uyarılar</p>
          </div>
          <button class="btn btn-ghost btn-sm" onclick="
            document.querySelectorAll('.notif-item.unread').forEach(el => {
              el.classList.remove('unread');
            });
            document.querySelector('.sidebar-link .badge').remove();
          ">Tümünü Okundu İşaretle</button>
        </div>

        <div class="animate-in">
          <div style="font-weight:600;color:var(--text-3);font-size:0.85rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px;">Bugün & Dün</div>
          ${notifications.slice(0,5).map(n => getNotifItemHTML(n)).join('')}
          
          <div style="font-weight:600;color:var(--text-3);font-size:0.85rem;text-transform:uppercase;letter-spacing:1px;margin:32px 0 16px;">Bu Hafta</div>
          ${notifications.slice(5).map(n => getNotifItemHTML(n)).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

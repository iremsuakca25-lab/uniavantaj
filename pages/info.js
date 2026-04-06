import { renderNavbar, renderFooter } from '../components.js';
import { team, faqs } from '../data.js';

export function renderAbout(container) {
  container.innerHTML = `
  <div class="landing-layout">
    ${renderNavbar(true)}
    
    <div class="page-header" style="text-align:center;padding:120px 20px 60px;background:linear-gradient(135deg,rgba(139,92,246,0.1),rgba(11,15,26,1));border-bottom:1px solid var(--border-2);margin-bottom:0;">
      <h1 style="font-family:var(--font-heading);font-size:3.5rem;font-weight:800;margin-bottom:24px;">Öğrenciler için<br><span class="gradient" style="background:linear-gradient(135deg,var(--primary),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">daha fazla tasarruf.</span></h1>
      <p style="color:var(--text-2);font-size:1.2rem;max-width:600px;margin:0 auto;line-height:1.7;">UniAvantaj, Türkiye'nin dört bir yanındaki üniversite öğrencilerine markaların özel indirim ve fırsatlarını tek bir noktadan sunan dijital bir köprüdür.</p>
    </div>

    <section class="section" style="padding-top:80px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;">
        <div class="animate-in">
          <div style="width:60px;height:60px;background:rgba(139,92,246,0.1);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:2rem;margin-bottom:24px;border:1px solid rgba(139,92,246,0.2);">🎯</div>
          <h2 style="font-family:var(--font-heading);font-size:2rem;font-weight:700;margin-bottom:16px;">Misyonumuz</h2>
          <p style="color:var(--text-2);font-size:1.1rem;line-height:1.8;margin-bottom:24px;">Öğrencilik hayatının maddi zorluklarını hafifletmek ve gençlerin bütçelerini düşünmeden sosyalleşmelerini, ihtiyaçlarını karşılamalarını sağlamak.</p>
          <ul style="list-style:none;color:var(--text-2);line-height:2;">
            <li>✓ Kesintisiz doğrulama sistemi (edu.tr onaylı)</li>
            <li>✓ Güvenilir markalarla 100% garanti indirimler</li>
            <li>✓ Şeffaf ve ücretsiz üyelik modeli</li>
            <li>✓ Sürekli yenilenen fırsat ekosistemi</li>
          </ul>
        </div>
        <div class="animate-in animate-in-delay-1" style="position:relative;">
          <div style="position:absolute;inset:0;background:radial-gradient(circle,var(--primary-dark) 0%,transparent 70%);opacity:0.2;filter:blur(40px);"></div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" alt="Öğrenciler" style="border-radius:var(--radius);border:1px solid var(--border-2);position:relative;z-index:1;width:100%;">
          <div style="position:absolute;bottom:-30px;left:-30px;background:var(--surface);border:1px solid var(--border-2);padding:24px;border-radius:var(--radius);box-shadow:var(--shadow);z-index:2;display:flex;align-items:center;gap:16px;">
            <div style="margin-bottom:20px;"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
            <div>
              <div style="font-family:var(--font-heading);font-size:1.5rem;font-weight:700;">10,000+</div>
              <div style="color:var(--text-2);font-size:0.9rem;">Aktif Öğrenci</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Takımımızla Tanışın</h2>
        <p class="section-subtitle">Platformu hayata geçiren çekirdek kadromuz</p>
      </div>
      <div class="team-grid">
        ${team.map((t, i) => `
          <div class="team-card animate-in animate-in-delay-${(i%4)+1}">
            <div class="team-avatar" style="background:rgba(255,255,255,0.05);border:2px solid ${t.color};color:${t.color};">${t.avatar}</div>
            <div class="team-name">${t.name}</div>
            <div class="team-role">${t.role}</div>
          </div>
        `).join('')}
      </div>
    </section>

    ${renderFooter()}
  </div>`;
}

export function renderContact(container) {
  container.innerHTML = `
  <div class="landing-layout">
    ${renderNavbar(true)}
    
    <div style="padding-top:100px;"></div>

    <section class="section">
      <div class="page-header" style="text-align:center;margin-bottom:60px;">
        <h1 class="page-title">İletişime Geç</h1>
        <p class="page-subtitle">Soru, öneri veya işbirlikleri için bize ulaşın</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;">
        <div class="animate-in">
          <div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);padding:40px;">
            <h3 style="font-family:var(--font-heading);font-weight:600;font-size:1.5rem;margin-bottom:24px;">Mesaj Gönder</h3>
            <form onsubmit="event.preventDefault();alert('Mesajınız başarıyla gönderildi!');this.reset();">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div class="form-group">
                  <label class="form-label">Adınız Soyadınız</label>
                  <input type="text" class="form-input" required>
                </div>
                <div class="form-group">
                  <label class="form-label">E-posta Adresi</label>
                  <input type="email" class="form-input" required>
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Konu</label>
                <select class="form-input" required>
                  <option value="">Seçiniz</option>
                  <option>Öğrenci Desteği</option>
                  <option>Marka İşbirliği</option>
                  <option>Teknik Hata Bildirimi</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Mesajınız</label>
                <textarea class="form-input" rows="5" required style="resize:vertical;"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;">Mesajı Gönder 🚀</button>
            </form>
          </div>
        </div>

        <div class="animate-in animate-in-delay-1">
          <div style="display:grid;gap:24px;margin-bottom:48px;">
            <div style="display:flex;align-items:flex-start;gap:16px;">
              <div style="width:48px;height:48px;background:rgba(6,182,212,0.1);color:var(--accent);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;">📍</div>
              <div>
                <div style="font-weight:600;font-size:1.1rem;margin-bottom:4px;">Merkez Ofis</div>
                <div style="color:var(--text-2);line-height:1.6;">Maslak Mah. Büyükdere Cad.<br>No:255 Nurol Plaza<br>Sarıyer, İstanbul, Türkiye</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:16px;">
              <div style="width:48px;height:48px;background:rgba(236,72,153,0.1);color:var(--secondary);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;">✉️</div>
              <div>
                <div style="font-weight:600;font-size:1.1rem;margin-bottom:4px;">E-posta</div>
                <div style="color:var(--text-2);line-height:1.6;">hello@uniavantaj.com<br>support@uniavantaj.com</div>
              </div>
            </div>
          </div>

          <h3 style="font-family:var(--font-heading);font-weight:600;font-size:1.5rem;margin-bottom:24px;">Sıkça Sorulan Sorular</h3>
          <div class="faq-list">
            ${faqs.map((faq, i) => `
              <div class="faq-item" onclick="this.classList.toggle('open')">
                <div class="faq-question">
                  ${faq.q}
                  <span class="faq-arrow">▼</span>
                </div>
                <div class="faq-answer">
                  <div style="padding-top:8px;">${faq.a}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  </div>`;
}

export function renderNotFound(container) {
  container.innerHTML = `
  <div class="landing-layout">
    ${renderNavbar(true)}
    <div style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px;">
      <div class="animate-in">
        <div style="font-size:6rem;margin-bottom:20px;font-family:var(--font-heading);font-weight:800;background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">404</div>
        <h1 style="font-family:var(--font-heading);font-size:2rem;font-weight:700;margin-bottom:12px;">Sayfa Bulunamadı</h1>
        <p style="color:var(--text-2);margin-bottom:32px;max-width:400px;">Aradığın sayfayı bulamadık. Silinmiş, adı değiştirilmiş veya geçici olarak ulaşılamıyor olabilir.</p>
        <a href="#/" class="btn btn-primary btn-lg">Ana Sayfaya Dön 🏠</a>
      </div>
    </div>
  </div>`;
}

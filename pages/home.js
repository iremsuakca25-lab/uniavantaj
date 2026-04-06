import { renderNavbar, renderFooter, renderCampaignCard } from '../components.js';
import { getFeaturedCampaigns, categories, getBrand, campaigns } from '../data.js';

export function renderHome(container) {
  // Check if it's the first time entering the app
  const isFirstVisit = !localStorage.getItem('uniavantaj_visited');
  
  if (isFirstVisit) {
    container.innerHTML = `
      <div class="splash-container">
        <div class="animate-in" style="margin-bottom:20px;">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        </div>
        <div class="splash-logo">UniAvantaj</div>
        <p style="color:var(--text-3); font-size:1.1rem; max-width:300px; margin:0 auto; line-height:1.6;">
          ÜniHayatını daha hesaplı yaşamaya hazır mısın?
        </p>
        <div class="splash-loader">
          <div class="splash-loader-fill" id="splashLoader"></div>
        </div>
        <p style="margin-top:40px; font-size:0.8rem; color:var(--text-3); opacity:0.6;">Yükleniyor...</p>
      </div>
    `;

    // Mark as visited and redirect to login after splash
    localStorage.setItem('uniavantaj_visited', 'true');
    setTimeout(() => {
      location.hash = '/login';
    }, 2800);
    return;
  }

  const featured = getFeaturedCampaigns();
  container.innerHTML = `
  <div class="landing-layout animate-in">
    ${renderNavbar(true)}
    
    <section class="hero">
      <div class="floating-shapes">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="hero-content">
        <div class="hero-badge">🎉 500+ Markada Öğrenci İndirimi</div>
        <h1 class="hero-title">
          Öğrencilere Özel<br>
          <span class="gradient">Kampanya & İndirimler</span>
        </h1>
        <p class="hero-desc">Yüzlerce markadan özel indirim kuponları, anında tasarruf fırsatları ve puan kazanma şansı seni bekliyor!</p>
        <div class="hero-actions">
          <a href="#/register" class="btn btn-primary btn-lg">Hemen Başla 🚀</a>
          <a href="#/campaigns" class="btn btn-secondary btn-lg">Kampanyaları Keşfet</a>
        </div>
        <div class="hero-stats">
          <div class="animate-in animate-in-delay-1">
            <div class="hero-stat-value">500+</div>
            <div class="hero-stat-label">Marka</div>
          </div>
          <div class="animate-in animate-in-delay-2">
            <div class="hero-stat-value">10K+</div>
            <div class="hero-stat-label">Öğrenci</div>
          </div>
          <div class="animate-in animate-in-delay-3">
            <div class="hero-stat-value">₺2M+</div>
            <div class="hero-stat-label">Toplam Tasarruf</div>
          </div>
          <div class="animate-in animate-in-delay-4">
            <div class="hero-stat-value">120+</div>
            <div class="hero-stat-label">Kampanya</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2 class="section-title">🔥 Öne Çıkan Kampanyalar</h2>
        <p class="section-subtitle">En popüler ve en çok kullanılan indirim fırsatları</p>
      </div>
      <div class="campaign-grid">
        ${featured.map((c, i) => {
          const brand = getBrand(c.brandId);
          return `<div class="animate-in animate-in-delay-${i+1}">${renderCampaignCard(c, brand)}</div>`;
        }).join('')}
      </div>
      <div style="text-align:center;margin-top:40px;">
        <a href="#/campaigns" class="btn btn-secondary">Tüm Kampanyaları Gör →</a>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2 class="section-title">📂 Kategoriler</h2>
        <p class="section-subtitle">İlgi alanına göre kampanyaları keşfet</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:20px;">
        ${categories.map(cat => `
          <a href="#/category/${cat.id}" class="cat-card ${cat.cssClass}" style="text-decoration:none;color:var(--text);">
            <div class="cat-icon">${cat.icon}</div>
            <div class="cat-name">${cat.name}</div>
            <div class="cat-count">${cat.count} kampanya</div>
          </a>
        `).join('')}
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <h2 class="section-title">🚀 Nasıl Çalışır?</h2>
        <p class="section-subtitle">3 kolay adımda tasarrufa başla</p>
      </div>
      <div class="steps">
        <div class="step animate-in">
          <div class="step-num">1</div>
          <h3 class="step-title">Kayıt Ol</h3>
          <p class="step-desc">Üniversite e-posta adresinle hızlıca kayıt ol ve platformu keşfetmeye başla.</p>
        </div>
        <div class="step animate-in animate-in-delay-1">
          <div class="step-num">2</div>
          <h3 class="step-title">Kampanyaları Keşfet</h3>
          <p class="step-desc">Yüzlerce markadan özel indirim kuponlarını incele ve favorilerine ekle.</p>
        </div>
        <div class="step animate-in animate-in-delay-2">
          <div class="step-num">3</div>
          <h3 class="step-title">Tasarruf Et</h3>
          <p class="step-desc">Kupon kodunu kopyala, alışverişinde kullan ve anında tasarruf et!</p>
        </div>
      </div>
    </section>

    <section class="section" style="text-align:center;">
      <div style="background:var(--surface);border:1px solid var(--border-2);border-radius:var(--radius);padding:60px 40px;position:relative;overflow:hidden;">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(139,92,246,0.08),rgba(236,72,153,0.08));"></div>
        <h2 class="section-title" style="position:relative;z-index:1;">Hemen Başla! <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-left:8px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></h2>
        <p class="section-subtitle" style="position:relative;z-index:1;margin-bottom:32px;">Binlerce öğrenci UniAvantaj ile tasarruf ediyor. Sen de aramıza katıl!</p>
        <a href="#/register" class="btn btn-primary btn-lg" style="position:relative;z-index:1;">Ücretsiz Kayıt Ol</a>
      </div>
    </section>

    ${renderFooter()}
  </div>`;

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
}

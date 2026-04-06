import { user } from './data.js';

export function renderNavbar(isLanding = true) {
  if (isLanding) {
    return `
    <nav class="navbar" id="navbar">
      <a href="#/" class="navbar-brand"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> UniAvantaj</a>
      <div class="navbar-links">
        <a href="#/" data-link="/">Ana Sayfa</a>
        <a href="#/campaigns" data-link="/campaigns">Kampanyalar</a>
        <a href="#/categories" data-link="/categories">Kategoriler</a>
        <a href="#/about" data-link="/about">Hakkımızda</a>
        <a href="#/contact" data-link="/contact">İletişim</a>
      </div>
      <div class="navbar-actions">
        <a href="#/login" class="btn btn-ghost btn-sm">Giriş Yap</a>
        <a href="#/register" class="btn btn-primary btn-sm">Kayıt Ol</a>
      </div>
    </nav>`;
  }
  return '';
}

export function renderSidebar() {
  return `
  <aside class="app-sidebar">
    <nav class="sidebar">
      <a href="#/dashboard" class="sidebar-brand"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> UniAvantaj</a>
      
      <div class="sidebar-section">
        <div class="sidebar-section-title">Ana Menü</div>
        <a href="#/dashboard" data-link="/dashboard" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span> Özetim
        </a>
        <a href="#/campaigns" data-link="/campaigns" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg></span> Tüm Kampanyalar
          <span class="badge">18</span>
        </a>
        <a href="#/categories" data-link="/categories" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></span> Kategoriler
        </a>
        <a href="#/nearby" data-link="/nearby" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span> Yakındaki Fırsatlar
        </a>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-section-title">Kategoriler</div>
        <a href="#/category/coffee" data-link="/category/coffee" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></span> Kahve & Cafe
        </a>
        <a href="#/category/restaurant" data-link="/category/restaurant" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg></span> Restoran
        </a>
        <a href="#/category/entertainment" data-link="/category/entertainment" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg></span> Eğlence
        </a>
        <a href="#/category/tech" data-link="/category/tech" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span> Teknoloji
        </a>
        <a href="#/category/books" data-link="/category/books" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span> Kitap & Kırtasiye
        </a>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-section-title">Hesabım</div>
        <a href="#/profile" data-link="/profile" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span> Profil
        </a>
        <a href="#/favorites" data-link="/favorites" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></span> Favorilerim
        </a>
        <a href="#/coupons" data-link="/coupons" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></span> Kuponlarım
          <span class="badge">3</span>
        </a>
        <a href="#/coupon-history" data-link="/coupon-history" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span> Kupon Geçmişi
        </a>
        <a href="#/rewards" data-link="/rewards" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></span> Puan & Ödüller
        </a>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-section-title">Diğer</div>
        <a href="#/notifications" data-link="/notifications" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></span> Bildirimler
          <span class="badge">3</span>
        </a>
        <a href="#/settings" data-link="/settings" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></span> Ayarlar
        </a>
        <a href="#/about" data-link="/about" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span> Hakkımızda
        </a>
        <a href="#/contact" data-link="/contact" class="sidebar-link">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span> İletişim
        </a>
      </div>

      <div class="sidebar-section" style="margin-top:auto; padding-top:16px; border-top:1px solid var(--border-2);">
        <a href="#/" class="sidebar-link" style="color:var(--error);">
          <span class="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></span> Çıkış Yap
        </a>
      </div>
    </nav>
  </aside>

  <nav class="mobile-nav">
    <div class="mobile-nav-inner">
      <a href="#/dashboard" class="${location.hash === '#/dashboard' || location.hash === '' ? 'active' : ''}">
        <div class="mobile-nav-icon">🏠</div>
        <span>Keşfet</span>
      </a>
      <a href="#/campaigns" class="${location.hash === '#/campaigns' ? 'active' : ''}">
        <div class="mobile-nav-icon">🏷️</div>
        <span>Fırsatlar</span>
      </a>
      <a href="#/coupons" class="${location.hash === '#/coupons' ? 'active' : ''}">
        <div class="mobile-nav-icon">🎟️</div>
        <span>Kuponlar</span>
      </a>
      <a href="#/profile" class="${location.hash === '#/profile' ? 'active' : ''}">
        <div class="mobile-nav-icon">👤</div>
        <span>Profil</span>
      </a>
    </div>
  </nav>`;
}

export function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <div class="footer-brand"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> UniAvantaj</div>
        <p class="footer-desc">Üniversite öğrencilerine özel kampanya ve indirim fırsatlarını tek bir platformda sunan dijital platform. Yüzlerce markadan özel indirimler seni bekliyor!</p>
      </div>
      <div>
        <div class="footer-title">Keşfet</div>
        <ul class="footer-links">
          <li><a href="#/campaigns">Kampanyalar</a></li>
          <li><a href="#/categories">Kategoriler</a></li>
          <li><a href="#/nearby">Yakındaki Fırsatlar</a></li>
          <li><a href="#/rewards">Puan & Ödüller</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-title">Hesap</div>
        <ul class="footer-links">
          <li><a href="#/login">Giriş Yap</a></li>
          <li><a href="#/register">Kayıt Ol</a></li>
          <li><a href="#/profile">Profil</a></li>
          <li><a href="#/settings">Ayarlar</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-title">Destek</div>
        <ul class="footer-links">
          <li><a href="#/about">Hakkımızda</a></li>
          <li><a href="#/contact">İletişim</a></li>
          <li><a href="#/contact">SSS</a></li>
          <li><a href="#/contact">Gizlilik Politikası</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 UniAvantaj. Tüm hakları saklıdır.</span>
      <div class="footer-social">
        <a href="#">📸</a>
        <a href="#">🐦</a>
        <a href="#">💼</a>
        <a href="#">📘</a>
      </div>
    </div>
  </footer>`;
}

export function renderCampaignCard(campaign, brand) {
  const isFav = user.favoriteCampaignIds && user.favoriteCampaignIds.includes(campaign.id);
  return `
  <div class="card animate-in" onclick="location.hash='/campaign/${campaign.id}'">
    <div class="card-img">
      <img src="${campaign.image}" alt="${campaign.title}" loading="lazy" onerror="this.style.background='var(--surface-3)';this.alt=''" />
      <span class="card-badge">${campaign.discount}</span>
      <span class="card-fav ${isFav ? 'active' : ''}" 
            data-id="${campaign.id}"
            onclick="
        event.stopPropagation();
        const cardId = parseInt(this.getAttribute('data-id'));
        const isActive = this.classList.toggle('active');
        
        // Veriyi güncelle
        if (isActive) {
          if (!window.user.favoriteCampaignIds.includes(cardId)) {
            window.user.favoriteCampaignIds.push(cardId);
          }
        } else {
          window.user.favoriteCampaignIds = window.user.favoriteCampaignIds.filter(id => id !== cardId);
        }
        window.user.favoritesCount = window.user.favoriteCampaignIds.length;

        // Görseli güncelle
        this.innerHTML = isActive ? '❤️' : '🤍';
        
        if (window.showToast) {
          window.showToast(isActive ? 'Favorilere Eklendi' : 'Favorilerden Çıkarıldı');
        }
      ">${isFav ? '❤️' : '🤍'}</span>
    </div>
    <div class="card-body">
      <div class="card-brand">
        <span class="card-brand-logo">${brand ? brand.logo : '🏷️'}</span>
        <span class="card-brand-name">${brand ? brand.name : 'Marka'}</span>
      </div>
      <div class="card-title">${campaign.title}</div>
      <div class="card-meta">
        <span class="card-discount">${campaign.discount} İndirim</span>
        <span class="card-timer">⭐ ${campaign.rating || '4.5'}</span>
      </div>
    </div>
  </div>`;
}

export function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}
export function renderChatWidget() {
  if (document.querySelector('.chat-widget')) return;

  const widget = document.createElement('div');
  widget.className = 'chat-widget';
  widget.innerHTML = `
    <div class="chat-window" id="chatWindow">
      <div class="chat-header">
        <div style="width:40px;height:40px;background:var(--primary);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;">🤖</div>
        <div class="chat-header-info">
          <h4>UniDestek AI</h4>
          <p><span>●</span> Çevrimiçi</p>
        </div>
      </div>
      <div class="chat-body" id="chatBody">
        <div class="chat-msg bot">Merhaba İremsu! Ben UniDestek. Sana bugün nasıl yardımcı olabilirim? 👋</div>
      </div>
      <div class="chat-footer">
        <input type="text" id="chatInput" placeholder="Mesajınızı yazın...">
        <button id="sendChat">✈️</button>
      </div>
    </div>
    <div class="chat-bubble" id="chatBubble">💬</div>
  `;
  document.body.appendChild(widget);

  const bubble = document.getElementById('chatBubble');
  const windowEl = document.getElementById('chatWindow');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendChat');
  const body = document.getElementById('chatBody');

  bubble.onclick = () => windowEl.classList.toggle('open');

  const addMsg = (text, type) => {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${type}`;
    msg.textContent = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
  };

  const getBotResponse = (text) => {
    text = text.toLowerCase();
    if(text.includes('merhaba') || text.includes('selam')) return 'Selam! Harika indirimler keşfetmeye hazır mısın? 😊';
    if(text.includes('kahve') || text.includes('starbucks')) return 'Starbucks\'ta şu an %25 indirim var! Hemen kuponunu alabilirsin. ☕';
    if(text.includes('yemek') || text.includes('pizza')) return 'Pizza Hut\'ta orta boy pizza sadece 59₺! Acıktıysan kaçırma derim. 🍕';
    if(text.includes('kupon')) return 'Aktif kuponlarını "Kuponlarım" sekmesinde görebilir, yenilerini kampanya detaylarından alabilirsin. 🎟️';
    if(text.includes('puan')) return 'Her kullanımda UniPuan kazanırsın. Gold üye olduğun için ekstra avantajların var! 🥇';
    return 'Harika bir soru! Bu konuda detaylı bilgi için SSS sayfamıza bakabilir veya destek ekibimize ulaşabilirsin. 🚀';
  };

  const handleSend = () => {
    const val = input.value.trim();
    if(!val) return;
    addMsg(val, 'user');
    input.value = '';
    
    setTimeout(() => {
      addMsg(getBotResponse(val), 'bot');
    }, 800);
  };

  sendBtn.onclick = handleSend;
  input.onkeypress = (e) => { if(e.key === 'Enter') handleSend(); };
}

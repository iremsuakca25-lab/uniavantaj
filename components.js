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
          <span class="icon">📊</span> Özetim
        </a>
        <a href="#/campaigns" data-link="/campaigns" class="sidebar-link">
          <span class="icon">🏷️</span> Tüm Kampanyalar
          <span class="badge">18</span>
        </a>
        <a href="#/categories" data-link="/categories" class="sidebar-link">
          <span class="icon">📂</span> Kategoriler
        </a>
        <a href="#/nearby" data-link="/nearby" class="sidebar-link">
          <span class="icon">📍</span> Yakındaki Fırsatlar
        </a>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-section-title">Kategoriler</div>
        <a href="#/category/coffee" data-link="/category/coffee" class="sidebar-link">
          <span class="icon">☕</span> Kahve & Cafe
        </a>
        <a href="#/category/restaurant" data-link="/category/restaurant" class="sidebar-link">
          <span class="icon">🍽️</span> Restoran
        </a>
        <a href="#/category/entertainment" data-link="/category/entertainment" class="sidebar-link">
          <span class="icon">🎬</span> Eğlence
        </a>
        <a href="#/category/tech" data-link="/category/tech" class="sidebar-link">
          <span class="icon">💻</span> Teknoloji
        </a>
        <a href="#/category/books" data-link="/category/books" class="sidebar-link">
          <span class="icon">📚</span> Kitap & Kırtasiye
        </a>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-section-title">Hesabım</div>
        <a href="#/profile" data-link="/profile" class="sidebar-link">
          <span class="icon">👤</span> Profil
        </a>
        <a href="#/favorites" data-link="/favorites" class="sidebar-link">
          <span class="icon">❤️</span> Favorilerim
        </a>
        <a href="#/coupons" data-link="/coupons" class="sidebar-link">
          <span class="icon">🎟️</span> Kuponlarım
          <span class="badge">3</span>
        </a>
        <a href="#/coupon-history" data-link="/coupon-history" class="sidebar-link">
          <span class="icon">📋</span> Kupon Geçmişi
        </a>
        <a href="#/rewards" data-link="/rewards" class="sidebar-link">
          <span class="icon">🏆</span> Puan & Ödüller
        </a>
      </div>
      
      <div class="sidebar-section">
        <div class="sidebar-section-title">Diğer</div>
        <a href="#/notifications" data-link="/notifications" class="sidebar-link">
          <span class="icon">🔔</span> Bildirimler
          <span class="badge">3</span>
        </a>
        <a href="#/settings" data-link="/settings" class="sidebar-link">
          <span class="icon">⚙️</span> Ayarlar
        </a>
        <a href="#/about" data-link="/about" class="sidebar-link">
          <span class="icon">ℹ️</span> Hakkımızda
        </a>
        <a href="#/contact" data-link="/contact" class="sidebar-link">
          <span class="icon">📞</span> İletişim
        </a>
      </div>

      <div class="sidebar-section" style="margin-top:auto; padding-top:16px; border-top:1px solid var(--border-2);">
        <a href="#/" class="sidebar-link" style="color:var(--error);">
          <span class="icon">🚪</span> Çıkış Yap
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

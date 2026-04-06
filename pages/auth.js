import { renderNavbar } from '../components.js';

export function renderLogin(container) {
  container.innerHTML = `
  <div class="auth-page">
    <div class="auth-visual">
      <div class="floating-shapes"><span></span><span></span><span></span></div>
      <div class="auth-visual-content">
        <div style="margin-bottom:20px; display:inline-block;"><svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
        <h2 class="auth-visual-title">Tekrar Hoş Geldin!</h2>
        <p class="auth-visual-desc">Kampanyalarını keşfet, kuponlarını kullan ve tasarruf etmeye devam et.</p>
      </div>
    </div>
    <div class="auth-form-side">
      <div class="auth-form-container">
        <a href="#/" class="navbar-brand" style="display:block;margin-bottom:32px;font-size:1.3rem;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> UniAvantaj</a>
        <h1 class="auth-form-title">Giriş Yap</h1>
        <p class="auth-form-subtitle">Hesabına giriş yaparak kampanyalara eriş</p>
        
        <button class="social-btn" onclick="location.hash='/dashboard'">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Google ile Giriş Yap
        </button>

        <div class="auth-divider">veya</div>

        <div class="quick-login-card animate-in-delay-1" onclick="if(window.showToast) window.showToast('Hoş geldin ✨'); location.hash='/dashboard'">
          <div class="quick-login-avatar">IA</div>
          <div class="quick-login-info">
            <h4>İremsu Akca</h4>
            <p>İstanbul Ticaret Üniversitesi</p>
          </div>
          <div style="margin-left:auto; font-size:1.5rem;">➡️</div>
        </div>

        <div class="auth-divider">veya bilgilerini gir</div>

        <form onsubmit="event.preventDefault();location.hash='/dashboard'">
          <div class="form-group">
            <label class="form-label">E-posta Adresi</label>
            <input type="email" class="form-input" placeholder="ornek@edu.tr" required />
          </div>
          <div class="form-group">
            <label class="form-label">Şifre</label>
            <input type="password" class="form-input" placeholder="••••••••" required />
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
            <label style="display:flex;align-items:center;gap:8px;font-size:0.85rem;color:var(--text-2);cursor:pointer;">
              <input type="checkbox" style="accent-color:var(--primary);width:16px;height:16px;" /> Beni hatırla
            </label>
            <a href="#" style="font-size:0.85rem;">Şifremi unuttum</a>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Giriş Yap</button>
        </form>
        
        <p style="text-align:center;margin-top:24px;color:var(--text-2);font-size:0.9rem;">
          Hesabın yok mu? <a href="#/register">Kayıt Ol</a>
        </p>
      </div>
    </div>
  </div>`;
}

export function renderRegister(container) {
  container.innerHTML = `
  <div class="auth-page">
    <div class="auth-visual">
      <div class="floating-shapes"><span></span><span></span><span></span></div>
      <div class="auth-visual-content">
        <div style="font-size:4rem;margin-bottom:20px;">🚀</div>
        <h2 class="auth-visual-title">Aramıza Katıl!</h2>
        <p class="auth-visual-desc">10.000+ öğrenci UniAvantaj ile tasarruf ediyor. Sen de hemen başla!</p>
      </div>
    </div>
    <div class="auth-form-side">
      <div class="auth-form-container">
        <a href="#/" class="navbar-brand" style="display:block;margin-bottom:32px;font-size:1.3rem;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:6px;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg> UniAvantaj</a>
        <h1 class="auth-form-title">Kayıt Ol</h1>
        <p class="auth-form-subtitle">Ücretsiz hesap oluştur ve kampanyalara eriş</p>

        <button class="social-btn" onclick="location.hash='/dashboard'">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Google ile Kayıt Ol
        </button>

        <div class="auth-divider">veya</div>

        <form onsubmit="event.preventDefault();location.hash='/dashboard'">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            <div class="form-group">
              <label class="form-label">Ad</label>
              <input type="text" class="form-input" placeholder="İremsu" required />
            </div>
            <div class="form-group">
              <label class="form-label">Soyad</label>
              <input type="text" class="form-input" placeholder="Akça" required />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Üniversite E-postası</label>
            <input type="email" class="form-input" placeholder="ornek@edu.tr" required />
          </div>
          <div class="form-group">
            <label class="form-label">Üniversite</label>
            <select id="register-uni" class="form-input" required onchange="
              const otherDiv = document.getElementById('other-university-group');
              if (this.value === 'Diğer') {
                otherDiv.style.display = 'block';
                document.getElementById('other-uni-input').required = true;
              } else {
                otherDiv.style.display = 'none';
                document.getElementById('other-uni-input').required = false;
              }
            ">
              <option value="">Üniversite seçin</option>
              <optgroup label="Devlet Üniversiteleri">
                <option>Ankara Üniversitesi</option>
                <option>Atatürk Üniversitesi</option>
                <option>Boğaziçi Üniversitesi</option>
                <option>Dokuz Eylül Üniversitesi</option>
                <option>Ege Üniversitesi</option>
                <option>Erciyes Üniversitesi</option>
                <option>Gazi Üniversitesi</option>
                <option>Hacettepe Üniversitesi</option>
                <option>İstanbul Teknik Üniversitesi (İTÜ)</option>
                <option>İstanbul Üniversitesi</option>
                <option>Karadeniz Teknik Üniversitesi (KTÜ)</option>
                <option>Marmara Üniversitesi</option>
                <option>Mimar Sinan Güzel Sanatlar Üniversitesi</option>
                <option>Orta Doğu Teknik Üniversitesi (ODTÜ)</option>
                <option>Selçuk Üniversitesi</option>
                <option>Yıldız Teknik Üniversitesi (YTÜ)</option>
              </optgroup>
              <optgroup label="Vakıf Üniversiteleri">
                <option>Bahçeşehir Üniversitesi</option>
                <option>Beykent Üniversitesi</option>
                <option>Bilkent Üniversitesi</option>
                <option>İstanbul Aydın Üniversitesi</option>
                <option>İstanbul Bilgi Üniversitesi</option>
                <option>İstanbul Gelişim Üniversitesi</option>
                <option>İstanbul Kültür Üniversitesi</option>
                <option>İstanbul Medipol Üniversitesi</option>
                <option>İstanbul Okan Üniversitesi</option>
                <option>İstanbul Ticaret Üniversitesi</option>
                <option>İstinye Üniversitesi</option>
                <option>Koç Üniversitesi</option>
                <option>Sabancı Üniversitesi</option>
                <option>Yeditepe Üniversitesi</option>
              </optgroup>
              <option value="Diğer">Diğer (Listede Yok)</option>
            </select>
          </div>
          
          <div id="other-university-group" class="form-group animate-in" style="display:none;">
            <label class="form-label">Üniversite Adını Yazın</label>
            <input type="text" id="other-uni-input" class="form-input" placeholder="Üniversitenizin tam adı" />
          </div>

          <div class="form-group">
            <label class="form-label">Şifre</label>
            <input type="password" class="form-input" placeholder="En az 8 karakter" required />
          </div>
          <label style="display:flex;align-items:flex-start;gap:8px;font-size:0.8rem;color:var(--text-2);margin-bottom:20px;cursor:pointer;">
            <input type="checkbox" style="accent-color:var(--primary);width:16px;height:16px;margin-top:2px;" required />
            <span><a href="#">Kullanım koşullarını</a> ve <a href="#">gizlilik politikasını</a> kabul ediyorum.</span>
          </label>
          <button type="submit" class="btn btn-primary" style="width:100%;">Kayıt Ol</button>
        </form>
        
        <p style="text-align:center;margin-top:24px;color:var(--text-2);font-size:0.9rem;">
          Zaten hesabın var mı? <a href="#/login">Giriş Yap</a>
        </p>
      </div>
    </div>
  </div>`;
}

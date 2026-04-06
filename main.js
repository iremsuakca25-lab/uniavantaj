import { initRouter, registerRoute } from './router.js';
import { user } from './data.js';
import { showToast } from './components.js';

// Globalize for components to access easily in HTML strings
window.user = user;
window.showToast = showToast;

// Import Page Renderers
import { renderHome } from './pages/home.js';
import { renderLogin, renderRegister } from './pages/auth.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderCampaigns, renderCampaignDetail } from './pages/campaigns.js';
import { renderCategories, renderCategoryDetail } from './pages/categories.js';
import { renderProfile, renderFavorites } from './pages/profile.js';
import { renderCoupons, renderCouponHistory } from './pages/coupons.js';
import { renderNearby, renderNotifications } from './pages/discover.js';
import { renderSettings, renderRewards } from './pages/settings.js';
import { renderAbout, renderContact, renderNotFound } from './pages/info.js';

// Register Routes
registerRoute('/', renderHome);
registerRoute('/login', renderLogin);
registerRoute('/register', renderRegister);

registerRoute('/dashboard', renderDashboard);
registerRoute('/campaigns', renderCampaigns);
registerRoute('/campaign/:id', renderCampaignDetail);

registerRoute('/categories', renderCategories);
registerRoute('/category/:id', renderCategoryDetail);

registerRoute('/profile', renderProfile);
registerRoute('/favorites', renderFavorites);

registerRoute('/coupons', renderCoupons);
registerRoute('/coupon-history', renderCouponHistory);

registerRoute('/nearby', renderNearby);
registerRoute('/notifications', renderNotifications);

registerRoute('/settings', renderSettings);
registerRoute('/rewards', renderRewards);

registerRoute('/about', renderAbout);
registerRoute('/contact', renderContact);
registerRoute('/404', renderNotFound);

// Start Application
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
});

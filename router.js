import { renderChatWidget } from './components.js';
const routes = {};
let currentPage = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = path;
}

export function getCurrentPath() {
  return window.location.hash.slice(1) || '/';
}

export function initRouter() {
  window.addEventListener('hashchange', () => handleRoute());
  window.addEventListener('load', () => handleRoute());
}

async function handleRoute() {
  const path = getCurrentPath();
  const appEl = document.getElementById('app');
  
  // Find matching route
  let handler = null;
  let params = {};
  
  for (const [pattern, h] of Object.entries(routes)) {
    const match = matchRoute(pattern, path);
    if (match) {
      handler = h;
      params = match;
      break;
    }
  }

  if (!handler) {
    handler = routes['/404'] || routes['/'];
  }

  // Page transition
  appEl.style.opacity = '0';
  appEl.style.transform = 'translateY(10px)';
  
  await new Promise(r => setTimeout(r, 150));
  
  if (handler) {
    currentPage = handler;
    handler(appEl, params);
  }

  await new Promise(r => setTimeout(r, 50));
  appEl.style.opacity = '1';
  appEl.style.transform = 'translateY(0)';
  
  window.scrollTo({ top: 0, behavior: 'instant' });
  updateActiveLinks();

  // Show/Hide Chat Widget based on route (don't show on landing or nearby map to keep it clean)
  if (path === '/' || path === '/nearby') {
    const existing = document.querySelector('.chat-widget');
    if (existing) existing.style.display = 'none';
  } else {
    renderChatWidget();
    const existing = document.querySelector('.chat-widget');
    if (existing) existing.style.display = 'flex';
  }
}

function matchRoute(pattern, path) {
  const patternParts = pattern.split('/');
  const pathParts = path.split('/');
  
  if (patternParts.length !== pathParts.length) return null;
  
  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      params[patternParts[i].slice(1)] = pathParts[i];
    } else if (patternParts[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
}

function updateActiveLinks() {
  const path = getCurrentPath();
  document.querySelectorAll('[data-link]').forEach(link => {
    const href = link.getAttribute('data-link');
    link.classList.toggle('active', href === path || (href !== '/' && path.startsWith(href)));
  });
}

export function createLink(path, text, className = '') {
  return `<a href="#${path}" data-link="${path}" class="${className}">${text}</a>`;
}

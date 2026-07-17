/* ================================================
   The Football Index — FC 26
   Main JavaScript
   ================================================ */

'use strict';

// ── Top Players Data ────────────────────────────────────────────────────────

const TOP_PLAYERS = [
  { rank: 1,  name: 'Kylian Mbappé',      club: 'Real Madrid',           position: 'ST',  rating: 92 },
  { rank: 2,  name: 'Erling Haaland',     club: 'Manchester City',       position: 'ST',  rating: 92 },
  { rank: 3,  name: 'Vinícius Jr.',        club: 'Real Madrid',           position: 'LW',  rating: 91 },
  { rank: 4,  name: 'Rodri',              club: 'Manchester City',       position: 'CDM', rating: 91 },
  { rank: 5,  name: 'Lionel Messi',       club: 'Inter Miami CF',        position: 'CAM', rating: 90 },
  { rank: 6,  name: 'Lamine Yamal',       club: 'FC Barcelona',          position: 'RW',  rating: 90 },
  { rank: 7,  name: 'Bukayo Saka',        club: 'Arsenal',               position: 'RW',  rating: 89 },
  { rank: 8,  name: 'Jude Bellingham',    club: 'Real Madrid',           position: 'CM',  rating: 89 },
  { rank: 9,  name: 'Phil Foden',         club: 'Manchester City',       position: 'CAM', rating: 89 },
  { rank: 10, name: 'Florian Wirtz',      club: 'Bayer Leverkusen',      position: 'CAM', rating: 89 },
  { rank: 11, name: 'Pedri',              club: 'FC Barcelona',          position: 'CM',  rating: 88 },
  { rank: 12, name: 'Harry Kane',         club: 'Bayern Munich',         position: 'ST',  rating: 88 },
  { rank: 13, name: 'Mohamed Salah',      club: 'Liverpool',             position: 'RW',  rating: 88 },
  { rank: 14, name: 'Thibaut Courtois',   club: 'Real Madrid',           position: 'GK',  rating: 88 },
  { rank: 15, name: 'Alisson Becker',     club: 'Liverpool',             position: 'GK',  rating: 88 },
];

// ── News Data ───────────────────────────────────────────────────────────────

const NEWS_ITEMS = [
  {
    category: 'Official Reveal',
    date: 'June 2025',
    title: 'EA Sports FC 26 Officially Announced',
    excerpt: 'EA Sports has officially confirmed FC 26 with a release window of autumn 2025, promising the most feature-rich edition of the franchise yet.',
    color: '#00d45e',
  },
  {
    category: 'Gameplay',
    date: 'June 2025',
    title: 'HyperMotionV Returns with Major Upgrades',
    excerpt: 'The latest iteration of EA\'s motion-capture technology brings a wider range of authentic animations and a revamped ball-physics engine to FC 26.',
    color: '#60a5fa',
  },
  {
    category: 'Ultimate Team',
    date: 'July 2025',
    title: 'FUT Evolutions System Overhauled for FC 26',
    excerpt: 'EA has revealed a completely redesigned Evolutions pathway in FC 26\'s Ultimate Team, giving players more control over how they develop their cards.',
    color: '#ffd700',
  },
  {
    category: 'Ratings',
    date: 'July 2025',
    title: 'Lamine Yamal Rockets Into the FC 26 Top 10',
    excerpt: 'Following his breakthrough season with FC Barcelona and Spain, 17-year-old Lamine Yamal is set to be one of the biggest movers in the FC 26 ratings.',
    color: '#ff6b35',
  },
  {
    category: 'Modes',
    date: 'August 2025',
    title: 'Career Mode Gets a Long-Awaited Overhaul',
    excerpt: 'EA has listened to community feedback — FC 26\'s Career Mode features a new morale system, improved scouting, and deeper financial management.',
    color: '#a855f7',
  },
  {
    category: 'Women\'s Football',
    date: 'August 2025',
    title: 'Expanded Women\'s Game Content Confirmed',
    excerpt: 'FC 26 will include additional women\'s club leagues and a standalone women\'s Ultimate Team experience for the first time.',
    color: '#ec4899',
  },
];

// ── Render Players Table ────────────────────────────────────────────────────

function getRatingClass(rating) {
  if (rating >= 91) return 'player-rating--gold';
  if (rating >= 88) return 'player-rating--green';
  return 'player-rating--blue';
}

function getRankClass(rank) {
  return rank <= 3 ? 'player-rank player-rank--top' : 'player-rank';
}

function renderPlayersTable() {
  const tbody = document.getElementById('playersTableBody');
  if (!tbody) return;

  const rows = TOP_PLAYERS.map(function (p) {
    return `
      <tr>
        <td><span class="${getRankClass(p.rank)}">#${p.rank}</span></td>
        <td><span class="player-name">${escapeHtml(p.name)}</span></td>
        <td><span class="player-club">${escapeHtml(p.club)}</span></td>
        <td><span class="player-position">${escapeHtml(p.position)}</span></td>
        <td><span class="player-rating ${getRatingClass(p.rating)}">${p.rating}</span></td>
      </tr>
    `;
  });

  tbody.innerHTML = rows.join('');
}

// ── Render News Grid ────────────────────────────────────────────────────────

function renderNews() {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;

  const cards = NEWS_ITEMS.map(function (item) {
    return `
      <article class="news-card">
        <div class="news-card__banner" style="background:${item.color}"></div>
        <div class="news-card__body">
          <div class="news-card__meta">
            <span class="news-card__category">${escapeHtml(item.category)}</span>
            <span class="news-card__dot" aria-hidden="true"></span>
            <span class="news-card__date">${escapeHtml(item.date)}</span>
          </div>
          <h3 class="news-card__title">${escapeHtml(item.title)}</h3>
          <p class="news-card__excerpt">${escapeHtml(item.excerpt)}</p>
        </div>
      </article>
    `;
  });

  grid.innerHTML = cards.join('');
}

// ── Mobile Navigation ───────────────────────────────────────────────────────

function initMobileNav() {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a nav link is clicked
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Scroll-based Navbar Highlight ──────────────────────────────────────────

function initScrollSpy() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.navbar__nav a');

  if (!sections.length || !navLinks.length) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            if (link.getAttribute('href') === '#' + id) {
              link.style.color = 'var(--color-primary)';
            } else {
              link.style.color = '';
            }
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(function (s) { observer.observe(s); });
}

// ── Animate-on-Scroll ───────────────────────────────────────────────────────

function initAnimations() {
  var animateTargets = document.querySelectorAll(
    '.card, .feature-item, .mode-card, .news-card, .stat-card'
  );

  if (!animateTargets.length || !('IntersectionObserver' in window)) return;

  animateTargets.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
  );

  animateTargets.forEach(function (el) { observer.observe(el); });
}

// ── Utility: XSS-safe HTML escape ──────────────────────────────────────────

function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Init ────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  renderPlayersTable();
  renderNews();
  initMobileNav();
  initScrollSpy();
  initAnimations();
});

/**
 * app.js — Elektra Eliviana Portfolio
 * Pure Vanilla JavaScript · No frameworks · No imports
 * ============================================================
 * Sections:
 *  1.  Utility Helpers
 *  2.  Data Loading (fetch + globals fallback)
 *  3.  Navigation (smooth scroll, active links, hamburger, scrolled)
 *  4.  Hero (typewriter, stats counter)
 *  5.  Works Grid Rendering
 *  6.  Works Filter System
 *  7.  Detail Modal
 *  8.  Profile Rendering
 *  9.  Scroll Animations (IntersectionObserver reveal + stagger)
 * 10.  Piano Section
 * 11.  Copy Email
 * 12.  Initialisation
 */

'use strict';

/* ============================================================
   1. UTILITY HELPERS
   ============================================================ */

/**
 * debounce — delays callback execution until after `wait` ms of inactivity.
 * @param {Function} fn   The function to debounce.
 * @param {number}   wait Milliseconds to wait.
 * @returns {Function}
 */
function debounce(fn, wait = 150) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

/**
 * slugify — converts a title string into a URL-friendly slug.
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')   // remove non-word chars except hyphens
    .replace(/[\s_]+/g, '-')    // spaces/underscores → hyphens
    .replace(/--+/g, '-');      // collapse multiple hyphens
}

/**
 * formatYear — returns a tidy display string for a year value.
 * Handles plain numbers, strings, and "YYYY–YYYY" ranges.
 * @param {string|number} year
 * @returns {string}
 */
function formatYear(year) {
  if (!year && year !== 0) return '';
  const str = String(year).trim();
  // already a range like "2023–2026" or "2024–Present"
  if (/–|-/.test(str) && str.length > 5) return str;
  return str;
}

/**
 * copyEmail — copies the contact email to the clipboard and shows a tooltip.
 * Bound to the #contact-email click handler.
 */
function copyEmail() {
  const emailEl = document.getElementById('contact-email');
  if (!emailEl) return;

  // Extract only the text content, stripping the hint span
  const hintEl = emailEl.querySelector('.copy-hint');
  const email = emailEl.childNodes[0]
    ? emailEl.childNodes[0].textContent.trim()
    : 'elivianaelektra@gmail.com';

  navigator.clipboard.writeText(email).then(() => {
    if (hintEl) {
      const original = hintEl.textContent;
      hintEl.textContent = 'Copied!';
      hintEl.classList.add('copied');
      setTimeout(() => {
        hintEl.textContent = original;
        hintEl.classList.remove('copied');
      }, 2000);
    }
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = email;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    if (hintEl) {
      hintEl.textContent = 'Copied!';
      setTimeout(() => { hintEl.textContent = 'click to copy'; }, 2000);
    }
  });
}

// Expose copyEmail globally so onclick="copyEmail()" works
window.copyEmail = copyEmail;

/**
 * copyDiscord — copies the Discord tag to clipboard and displays feedback.
 * Bound to the #discord-copy-btn click handler.
 */
function copyDiscord() {
  const tag = '@e1ektra';
  const hintEl = document.getElementById('discord-copy-hint');

  const showCopied = () => {
    if (hintEl) {
      const original = hintEl.textContent;
      hintEl.textContent = 'Copied! ✓';
      hintEl.classList.add('copied');
      setTimeout(() => {
        hintEl.textContent = original;
        hintEl.classList.remove('copied');
      }, 2000);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(tag).then(showCopied).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = tag;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showCopied();
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = tag;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showCopied();
  }
}

// Expose copyDiscord globally so onclick="copyDiscord()" works
window.copyDiscord = copyDiscord;

/* ============================================================
   2. DATA LOADING
   ============================================================ */

/**
 * loadData — fetches profile.json and works.json simultaneously.
 * Falls back to window.PROFILE_DATA / window.WORKS_DATA globals
 * when the fetch fails (e.g., file:// protocol restrictions).
 * @returns {Promise<{profile: Object, works: Array}>}
 */
async function loadData() {
  // On HTTP/S protocols, prefer fresh JSON with cache busting to guarantee real-time updates
  if (window.location.protocol.startsWith('http')) {
    try {
      const [profileRes, worksRes] = await Promise.all([
        fetch('data/profile.json?t=' + Date.now()),
        fetch('data/works.json?t=' + Date.now()),
      ]);

      if (profileRes.ok && worksRes.ok) {
        const profile = await profileRes.json();
        const works   = await worksRes.json();
        return { profile, works };
      }
    } catch (err) {
      console.warn('[Elektra] live fetch failed, falling back to data.js globals:', err.message);
    }
  }

  // Fallback (or file:// protocol): use window globals from data.js
  if (window.PROFILE_DATA && window.WORKS_DATA && Array.isArray(window.WORKS_DATA) && window.WORKS_DATA.length > 0) {
    return { profile: window.PROFILE_DATA, works: window.WORKS_DATA };
  }

  try {
    const [profileRes, worksRes] = await Promise.all([
      fetch('data/profile.json'),
      fetch('data/works.json'),
    ]);

    if (!profileRes.ok) throw new Error(`profile.json: ${profileRes.status}`);
    if (!worksRes.ok)   throw new Error(`works.json: ${worksRes.status}`);

    const profile = await profileRes.json();
    const works   = await worksRes.json();
    return { profile, works };
  } catch (err) {
    console.warn('[Elektra] fetch failed, falling back to globals:', err.message);

    // Graceful fallback: use injected script-tag globals
    if (window.PROFILE_DATA && window.WORKS_DATA) {
      return { profile: window.PROFILE_DATA, works: window.WORKS_DATA };
    }

    // Last resort: return minimal stubs so the page doesn't crash
    console.error('[Elektra] No data source available. Page will render empty.');
    return { profile: {}, works: [] };
  }
}

/* ============================================================
   3. NAVIGATION
   ============================================================ */

/**
 * initNavigation — wires up all nav behaviours:
 *  - Smooth scroll on anchor clicks
 *  - Active link highlighting via IntersectionObserver
 *  - Hamburger menu toggle (mobile)
 *  - .scrolled class on the nav after 50 px scroll
 */
function initNavigation() {
  const nav         = document.querySelector('.nav') || document.querySelector('#navbar') || document.querySelector('#header');
  const hamburger   = document.querySelector('.hamburger');
  const navLinks    = document.querySelectorAll('.nav-link, .nav-links a');
  const sections    = document.querySelectorAll('section[id]');

  /* ---- Smooth scroll ---- */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Close mobile menu on link click
      if (nav) nav.classList.remove('menu-open');
    });
  });

  /* ---- Active link highlighting via IntersectionObserver ---- */
  const setActiveLink = (id) => {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${id}`);
    });
  };

  if (sections.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    sections.forEach(section => sectionObserver.observe(section));
  }

  /* ---- .scrolled class on nav ---- */
  const handleNavScroll = debounce(() => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, 50);

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ---- Hamburger menu toggle ---- */
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('menu-open');
      const isOpen = nav.classList.contains('menu-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }
}

/* ============================================================
   4. HERO SECTION
   ============================================================ */

/**
 * initTypewriter — animates the hero subtitle/headline with a typewriter effect.
 * Cycles through an array of phrases, typing then deleting each in turn.
 */
function initTypewriter() {
  const el = document.getElementById('typewriter-text') || document.getElementById('hero-headline');
  if (!el) return;

  const phrases = [
    'Operations & Process Automation Specialist',
    'AI Engineer in Training',
    'Mathematical Logician',
    'Classical Pianist',
    'Speculative Fiction Author',
    'Fine Art Realist',
    'Chess Champion · Caro-Kann Devotee',
    'Polymath in Progress',
  ];

  let phraseIdx  = 0;
  let charIdx    = 0;
  let isDeleting = false;
  const typingSpeed   = 55;   // ms per character while typing
  const deletingSpeed = 28;   // ms per character while deleting
  const pauseAfter    = 1800; // ms pause when phrase is complete

  function tick() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      charIdx--;
    } else {
      charIdx++;
    }

    el.textContent = currentPhrase.substring(0, charIdx);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIdx === currentPhrase.length) {
      // Finished typing → pause then start deleting
      delay = pauseAfter;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      // Finished deleting → move to next phrase
      isDeleting = false;
      phraseIdx  = (phraseIdx + 1) % phrases.length;
      delay      = 350;
    }

    setTimeout(tick, delay);
  }

  // Slight initial delay so the page has settled
  setTimeout(tick, 800);
}

/**
 * initStatsCounter — animates stat numbers counting up when the stats
 * section enters the viewport.
 */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (!statNumbers.length) return;

  /**
   * animateCount — counts an element from 0 to its data-target value.
   * @param {HTMLElement} el
   */
  function animateCount(el) {
    const target   = parseFloat(el.dataset.target);
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const duration = 1800; // ms
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      const value    = Math.round(eased * target);
      el.textContent = prefix + value.toLocaleString() + suffix;

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statsObserver.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.4 });

  statNumbers.forEach(el => statsObserver.observe(el));
}

/* ============================================================
   5. WORKS GRID RENDERING
   ============================================================ */

/* ── Etched champagne-gold (#C5A059) monoline SVG library ──────────────────
   Replaces every OS colour emoji. Markup is trusted, static and inserted
   un-escaped; all dynamic text elsewhere still goes through escHtml(). */
const GOLD_ETCH = '#C5A059';

/**
 * monoSvg — wraps an inner path string in the shared etched-gold monoline shell.
 * @param {string} inner        SVG child markup (24×24 viewBox coordinates).
 * @param {number} size         Rendered width/height in px.
 * @param {number} strokeWidth  Monoline weight.
 * @param {string} extraClass   Optional extra class on the <svg>.
 * @returns {string}
 */
function monoSvg(inner, size = 14, strokeWidth = 1.6, extraClass = '') {
  return `<svg class="mono-icon${extraClass ? ' ' + extraClass : ''}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${GOLD_ETCH}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;
}

const ICON_PATHS = {
  code:         '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4.5l-4 15"/>',
  research:     '<path d="M9.5 3h5M10.5 3v6L5 19a1.6 1.6 0 0 0 1.4 2.4h11.2A1.6 1.6 0 0 0 19 19l-5.500-10V3"/><path d="M7.600 15h8.800"/>',
  novel:        '<path d="M12 6.500C10 5 7 4.500 3.500 5v13c3.500-.5 6.500 0 8.500 1.500 2-1.500 5-2 8.500-1.500V5c-3.500-.5-6.500 0-8.500 1.500z"/><path d="M12 6.500v13"/>',
  writing:      '<path d="M20 4c-7 0-12 4-14 11l-1.500 5 5-1.500C16 16.500 20 11 20 4z"/><path d="M4.500 20 14 10.500"/>',
  art:          '<rect x="3.500" y="4.500" width="17" height="15" rx="1.500"/><circle cx="9" cy="10" r="1.600"/><path d="m4 18 5.500-5 4 3.500 3-2.500 3.500 4"/>',
  music:        '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
  chess:        '<path d="M7.500 20.500h10M8.500 20.500c0-3.500.3-5 1.800-7-2.200.6-3.800-.6-4.800-2.200l3-3.800.9-2 2 1.200c3 .9 5.100 3.200 5.100 7v6.800"/><circle cx="10.200" cy="9" r=".6"/>',
  performance:  '<path d="m3.500 7.500 15-4 1 3.500-15 4z"/><rect x="3" y="11" width="18" height="9.500" rx="1.500"/><path d="m8 7.500 1 3M13 6.300l1 3"/>',
  'case-study': '<path d="M12 3v17M8 21h8M4 6.500h16"/><path d="M6 6.500 3 13.500h6zM18 6.500l-3 7h6z"/><path d="M3 13.500a3 3 0 0 0 6 0M15 13.500a3 3 0 0 0 6 0"/>',
  operations:   '<path d="M12 2.500 4.500 5.500v6c0 5 3.200 8.300 7.500 10 4.300-1.700 7.500-5 7.500-10v-6z"/><path d="m9 12 2.200 2.200L15.500 10"/>',
  document:     '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M8.500 13h7M8.500 16.500h5"/>',
};

/** Mapping from work type to its etched monoline SVG icon */
const TYPE_ICONS = {
  code:        monoSvg(ICON_PATHS.code),
  research:    monoSvg(ICON_PATHS.research),
  novel:       monoSvg(ICON_PATHS.novel),
  writing:     monoSvg(ICON_PATHS.writing),
  art:         monoSvg(ICON_PATHS.art),
  music:       monoSvg(ICON_PATHS.music),
  chess:       monoSvg(ICON_PATHS.chess),
  performance: monoSvg(ICON_PATHS.performance),
  'case-study':monoSvg(ICON_PATHS['case-study']),
  operations:  monoSvg(ICON_PATHS.operations),
  default:     monoSvg(ICON_PATHS.document),
};

/** Mapping from work status value to CSS class */
const STATUS_CLASSES = {
  live:                'status-live',
  roadmap:             'status-roadmap',
  ongoing:             'status-ongoing',
  complete:            'status-complete',
  accepted:            'status-accepted',
  'exhibition-donated':'status-exhibition',
  showcase:            'status-showcase',
};

/** Human-readable labels for each status */
const STATUS_LABELS = {
  live:                'Live',
  roadmap:             'Roadmap',
  ongoing:             'Ongoing',
  complete:            'Complete',
  accepted:            'Accepted',
  'exhibition-donated':'Exhibited',
  showcase:            'Showcase',
};

/**
 * buildWorkCard — creates a DOM element for a single work entry.
 * @param {Object} work  A works.json entry.
 * @returns {HTMLElement}
 */
function buildWorkCard(work) {
  const card = document.createElement('div');
  card.className = 'work-card';
  card.dataset.type = work.type || 'code';
  card.dataset.id   = work.id   || slugify(work.title || '');

  const icon        = TYPE_ICONS[work.type]   || TYPE_ICONS.default;
  const statusClass = STATUS_CLASSES[work.status] || 'status-roadmap';
  const statusLabel = STATUS_LABELS[work.status]  || work.status || '';

  // Build tags HTML
  const tagsHtml = Array.isArray(work.tags)
    ? work.tags.map(t => `<span class="card-tag">${escHtml(t)}</span>`).join('')
    : '';

  // Subtitle line: composer / genre / field / medium — use whatever is present
  const subtitle = work.composer || work.genre || work.field || work.medium
    || work.subtitle || '';

  const artThumbnail = (work.type === 'art' && work.image)
    ? `<div class="card-art-preview"><img src="${escHtml(encodeURI(work.image))}" alt="${escHtml(work.title || '')}" loading="lazy" /></div>`
    : '';

  // Direct action buttons (e.g. Wattpad, Live Site, GitHub Repository)
  let cardActions = '';
  if (work.links && work.links.wattpad) {
    cardActions = `
      <div class="card-direct-actions">
        <a href="${escHtml(work.links.wattpad)}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-wattpad" onclick="event.stopPropagation()">
          Read on Wattpad ↗
        </a>
      </div>`;
  } else if (work.links && (work.links.live || work.links.github || work.links.charters)) {
    const liveLabel = (work.type === 'case-study') ? 'Executive Charter ↗' : 'Live Site ↗';
    cardActions = `
      <div class="card-direct-actions">
        ${work.links.live ? `<a href="${escHtml(work.links.live)}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-live" onclick="event.stopPropagation()">${liveLabel}</a>` : ''}
        ${work.links.charters ? `<a href="${escHtml(work.links.charters)}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-repo" onclick="event.stopPropagation()">Penal Matrix ↗</a>` : ''}
        ${work.links.github ? `<a href="${escHtml(work.links.github)}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-repo" onclick="event.stopPropagation()">Repository ↗</a>` : ''}
      </div>`;
  }

  card.innerHTML = `
    <span class="card-type-badge card-type-icon">${icon}</span>
    ${artThumbnail}
    <div class="card-body">
      <h3 class="card-title">${escHtml(work.title || 'Untitled')}</h3>
      ${subtitle ? `<p class="card-subtitle">${escHtml(subtitle)}</p>` : ''}
      <div class="card-tags">${tagsHtml}</div>
      <div class="card-footer-row">
        <span class="card-status ${statusClass}">${escHtml(statusLabel)}</span>
        ${cardActions}
      </div>
    </div>
  `;

  // Open detail modal on click
  card.addEventListener('click', () => openModal(work));

  return card;
}

/**
 * renderWorksGrid — populates #works-grid with cards built from works data.
 * @param {Array} works
 */
function renderWorksGrid(works) {
  const grid = document.getElementById('works-grid');
  if (!grid) return;

  grid.innerHTML = '';
  works.forEach(work => {
    grid.appendChild(buildWorkCard(work));
  });
}

/* ============================================================
   6. WORKS FILTER SYSTEM
   ============================================================ */

/**
 * initWorksFilter — wires up the filter buttons above the works grid.
 * Filters cards by their data-type attribute with a fade transition.
 */
function updateFilterPillIndicator(activeBtn) {
  const indicator = document.getElementById('filter-pill-indicator');
  const bar = document.getElementById('works-filter-bar') || document.querySelector('.filter-bar');
  if (!indicator || !bar || !activeBtn) return;

  const barRect = bar.getBoundingClientRect();
  const btnRect = activeBtn.getBoundingClientRect();
  const left = btnRect.left - barRect.left;
  const top = (btnRect.bottom - barRect.top) - 2;
  indicator.style.left = `${left}px`;
  indicator.style.width = `${btnRect.width}px`;
  indicator.style.top = `${top}px`;
}

function initWorksFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  const activeInitial = document.querySelector('.filter-btn.active') || filterBtns[0];
  setTimeout(() => updateFilterPillIndicator(activeInitial), 120);
  window.addEventListener('resize', () => {
    const cur = document.querySelector('.filter-btn.active');
    if (cur) updateFilterPillIndicator(cur);
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateFilterPillIndicator(btn);

      const filter = btn.dataset.filter || 'all';
      applyWorksFilter(filter);
    });
  });
}

/**
 * applyWorksFilter — Phase 6 Recessed Parchment Plane:
 * Unselected cards remain visible & 100% readable in a recessed spatial plane (0.65 opacity, softened border),
 * while selected cards illuminate at 1.0 opacity with a gilded border & elevation halo.
 * @param {string} filter  'all' or a specific type string.
 */
function applyWorksFilter(filter) {
  const grid = document.getElementById('works-grid') || document.querySelector('.works-grid');
  const cards = document.querySelectorAll('#works-grid .work-card');

  if (grid) {
    grid.classList.toggle('has-active-filter', filter !== 'all');
  }

  cards.forEach(card => {
    card.style.display = '';
    card.classList.remove('hidden');

    const cardType = card.dataset.type;
    const matches = filter === 'all' ||
      cardType === filter ||
      (filter === 'novel' && (cardType === 'writing' || cardType === 'novel'));

    if (filter === 'all') {
      card.classList.remove('filter-match', 'filter-not-match');
    } else if (matches) {
      card.classList.add('filter-match');
      card.classList.remove('filter-not-match');
    } else {
      card.classList.remove('filter-match');
      card.classList.add('filter-not-match');
    }
  });
}

/* ============================================================
   7. DETAIL MODAL
   ============================================================ */

/** Reference to the currently displayed work for keyboard/focus management */
let _modalWork = null;

/**
 * openModal — populates and reveals the detail modal for a work entry.
 * @param {Object} work  A works.json entry.
 */
function openModal(work) {
  _modalWork = work;
  clearTimeout(_modalCloseTimer);
  const overlay     = document.getElementById('modal-overlay');
  const contentEl   = document.getElementById('modal-content');
  if (!overlay || !contentEl) return;

  contentEl.innerHTML = buildModalHTML(work);

  // Phase 6: remember where the plate came from so closing folds it back there
  setModalOriginVector(work, false);

  // Lock body scroll
  document.body.classList.add('modal-open');
  overlay.classList.remove('closing');
  overlay.classList.add('active', 'visible', 'open');

  // Focus the close button for accessibility
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.focus();
}

/**
 * closeModal — folds the Clerestory Glass Plate modal back and restores body scroll.
 */
function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay || !_modalWork || overlay.classList.contains('closing')) return; // already closed / folding
  // Re-measure at close time against the settled panel, then fold back into the originating card
  setModalOriginVector(_modalWork, true);
  overlay.classList.add('closing');
  clearTimeout(_modalCloseTimer);
  _modalCloseTimer = setTimeout(() => {
    overlay.classList.remove('active', 'visible', 'open', 'closing');
    document.body.classList.remove('modal-open');
    _modalWork = null;
  }, 360);
}

/** Pending close timer (cleared if a modal re-opens mid-fold) */
let _modalCloseTimer = null;

/**
 * findModalOriginCard — locates the visible [data-id] card that opened the modal.
 * @param {Object|null} work
 * @returns {HTMLElement|null}
 */
function findModalOriginCard(work) {
  if (!work) return null;
  const id = work.id || slugify(work.title || '');
  if (!id) return null;
  const safe = String(id).replace(/["\\]/g, '\\$&');
  const nodes = document.querySelectorAll(`[data-id="${safe}"]`);
  for (const node of nodes) {
    const r = node.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) return node;
  }
  return null;
}

/**
 * setModalOriginVector — stores --origin-dx / --origin-dy / --origin-scale on #modal-panel.
 * The vector runs from the panel's centre to the originating card's centre, so the
 * closing Clerestory Glass Plate physically folds back into that card.
 * @param {Object|null} work
 * @param {boolean}     measurePanel  true → use the settled panel rect, false → assume viewport-centred.
 */
function setModalOriginVector(work, measurePanel) {
  const panel = document.getElementById('modal-panel');
  if (!panel) return;
  const card = findModalOriginCard(work);
  if (!card) {
    panel.style.removeProperty('--origin-dx');
    panel.style.removeProperty('--origin-dy');
    panel.style.removeProperty('--origin-scale');
    return;
  }
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const cr = card.getBoundingClientRect();
  const pr = panel.getBoundingClientRect();
  const usePanel = measurePanel && pr.width > 0 && pr.height > 0;
  const pcx = usePanel ? pr.left + pr.width / 2  : vw / 2;
  const pcy = usePanel ? pr.top  + pr.height / 2 : vh / 2;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const dx = clamp((cr.left + cr.width / 2) - pcx, -vw, vw);
  const dy = clamp((cr.top + cr.height / 2) - pcy, -vh, vh);
  let scale = 0.86;
  if (usePanel) scale = clamp(Math.min(cr.width / pr.width, cr.height / pr.height), 0.16, 0.6);
  panel.style.setProperty('--origin-dx', `${dx.toFixed(1)}px`);
  panel.style.setProperty('--origin-dy', `${dy.toFixed(1)}px`);
  panel.style.setProperty('--origin-scale', scale.toFixed(3));
}

/**
 * buildModalHTML — generates the inner HTML for the modal content area.
 * Adapts to work type for art, music, research, and novel specifics.
 * @param {Object} work
 * @returns {string}
 */
function buildModalHTML(work) {
  const icon        = TYPE_ICONS[work.type]        || TYPE_ICONS.default;
  const statusClass = STATUS_CLASSES[work.status]  || 'status-roadmap';
  const statusLabel = STATUS_LABELS[work.status]   || work.status || '';
  const tagsHtml    = Array.isArray(work.tags)
    ? work.tags.map(t => `<span class="modal-tag">${escHtml(t)}</span>`).join('')
    : '';

  // Build type-specific content block
  let typeSpecificHtml = '';

  if (work.type === 'art') {
    const artId = work.id || slugify(work.title || '');
    const imgSrc = work.image ? encodeURI(work.image) : `assets/art/${escHtml(artId)}.jpg`;
    typeSpecificHtml = `
      <div class="modal-image-area">
        <img
          src="${escHtml(imgSrc)}"
          alt="${escHtml(work.title)}"
          class="modal-art-img"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="modal-art-placeholder" style="display:none;">
          <span class="art-placeholder-icon">${monoSvg(ICON_PATHS.art, 40, 1.2)}</span>
          <p class="art-placeholder-note">Add your image to <code>${escHtml(imgSrc)}</code></p>
        </div>
      </div>`;
  }

  if (work.type === 'music') {
    const composer = work.composer || '';
    const era      = work.era      || work.genre || '';
    typeSpecificHtml = `
      <div class="modal-player">
        <button class="player-play-btn" aria-label="Play/Pause" onclick="toggleMiniPlayer(this)">
          <span class="play-icon">▶</span>
        </button>
        <div class="player-info">
          ${composer ? `<p class="player-composer">${escHtml(composer)}</p>` : ''}
          ${era      ? `<p class="player-era">${escHtml(era)}</p>`           : ''}
          <div class="player-track-bar">
            <div class="player-track-progress" id="modal-track-progress"></div>
          </div>
          <span class="player-label">Audio preview — add file to <code>assets/audio/${escHtml(work.id || '')}.mp3</code></span>
        </div>
      </div>`;
  }

  if (work.type === 'research') {
    const abstract = work.abstract || work.description || work.synopsis || '';
    const paperId  = work.id || slugify(work.title || '');
    const pdfPath  = work.pdf || `assets/papers/${escHtml(paperId)}.pdf`;
    typeSpecificHtml = `
      ${abstract ? `<div class="modal-abstract"><h4 class="modal-section-label">Abstract</h4><p>${escHtml(abstract)}</p></div>` : ''}
      <a class="modal-pdf-btn" href="${escHtml(pdfPath)}" target="_blank" rel="noopener">
        ${monoSvg(ICON_PATHS.document, 16, 1.6, 'btn-icon')}<span>Download PDF</span>
      </a>`;
  }

  if (work.type === 'novel' || work.type === 'writing') {
    const synopsis = work.synopsis || work.description || '';
    typeSpecificHtml = `
      ${synopsis ? `<div class="modal-synopsis"><h4 class="modal-section-label">Synopsis</h4><p>${escHtml(synopsis)}</p></div>` : ''}
      <button class="modal-excerpt-btn" onclick="alert('Full excerpt coming soon…')">
        ${monoSvg(ICON_PATHS.novel, 16, 1.6, 'btn-icon')}<span>Read Excerpt</span>
      </button>`;
  }

  if (work.type === 'case-study' || work.case_study_html) {
    typeSpecificHtml = `
      <div class="modal-case-study-wrapper">
        ${work.case_study_html || ''}
      </div>`;
  }

  // External links
  let linksHtml = '';
  if (work.links && typeof work.links === 'object') {
    const linkEntries = Object.entries(work.links);
    if (linkEntries.length) {
      linksHtml = `<div class="modal-links">` +
        linkEntries.map(([label, url]) =>
          `<a class="modal-link-btn" href="${escHtml(url)}" target="_blank" rel="noopener">
            ${escHtml(formatLinkLabel(label))}
          </a>`
        ).join('') +
      `</div>`;
    }
  }
  if (work.repo) {
    linksHtml += `<div class="modal-links">
      <a class="modal-link-btn" href="https://github.com/${escHtml(work.repo)}" target="_blank" rel="noopener">
        ⌥ GitHub Repository
      </a>
    </div>`;
  }

  // General description (shown for all types unless type-specific block already has it)
  const descriptionSrc =
    (work.type === 'research' || work.type === 'novel' || work.type === 'writing' || work.type === 'case-study' || work.case_study_html)
      ? '' // already included in typeSpecificHtml
      : (work.description || work.synopsis || '');

  return `
    <div class="modal-header">
      <span class="modal-type-badge">${icon}<span class="modal-type-label">${escHtml(work.type || '')}</span></span>
      <span class="modal-year">${escHtml(formatYear(work.year))}</span>
      <span class="modal-status-badge ${statusClass}">${escHtml(statusLabel)}</span>
    </div>
    <h2 class="modal-title">${escHtml(work.title || 'Untitled')}</h2>
    ${tagsHtml ? `<div class="modal-tags">${tagsHtml}</div>` : ''}
    ${descriptionSrc ? `<p class="modal-description">${escHtml(descriptionSrc)}</p>` : ''}
    ${typeSpecificHtml}
    ${linksHtml}
  `;
}

/**
 * formatLinkLabel — humanises a camelCase or snake_case link key.
 * e.g. "liveDemo" → "Live Demo", "github_repo" → "Github Repo"
 * @param {string} key
 * @returns {string}
 */
function formatLinkLabel(key) {
  const k = key.toLowerCase();
  if (k === 'wattpad') return 'Read on Wattpad ↗';
  if (k === 'live')    return 'Live Site ↗';
  if (k === 'github')  return 'Repository ↗';
  return key
    .replace(/[_-]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, c => c.toUpperCase()) + ' ↗';
}

/**
 * toggleMiniPlayer — plays/pauses the in-modal audio player UI.
 * No real audio — purely visual state machine.
 * @param {HTMLButtonElement} btn
 */
function toggleMiniPlayer(btn) {
  const isPlaying = btn.classList.toggle('playing');
  const icon = btn.querySelector('.play-icon');
  if (icon) icon.textContent = isPlaying ? '⏸' : '▶';

  const progress = document.getElementById('modal-track-progress');
  if (progress) {
    if (isPlaying) {
      progress.style.animation = 'trackProgress 240s linear forwards';
    } else {
      progress.style.animationPlayState = 'paused';
    }
  }
}
window.toggleMiniPlayer = toggleMiniPlayer;

/**
 * initModal — attaches close listeners to overlay, X button, and Escape key.
 */
function initModal() {
  const overlay  = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (overlay) {
    overlay.addEventListener('click', e => {
      // Close only when clicking the backdrop (not the panel itself)
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && _modalWork) closeModal();
  });
}

/* ============================================================
   8. PROFILE RENDERING
   ============================================================ */

/**
 * renderProfile — populates all profile-driven DOM regions from profile.json.
 * @param {Object} profile
 */
function renderProfile(profile) {
  // ---- Basic identity fields ----
  setTextContent('#profile-name',     profile.name     || '');
  setTextContent('#profile-headline', profile.headline || '');
  setTextContent('#hero-headline',    profile.headline || '');
  setTextContent('#profile-bio',      profile.bio      || '');

  // ---- About tags ----
  const aboutTagsEl = document.querySelector('.about-tags');
  if (aboutTagsEl) {
    const highlights = [
      'Mathematician', 'Novelist', 'Classical Pianist', 'Fine Artist', 'Interdisciplinary Researcher', 'Process Automator'
    ];
    aboutTagsEl.innerHTML = highlights.map(t => `<span class="work-tag" style="padding: 4px 12px; font-size: 0.8rem;">${escHtml(t)}</span>`).join('');
  }

  // ---- Languages ----
  renderLanguages(profile.languages || []);

  // ---- Certificates ----
  renderCertificates(profile.certificates || []);

  // ---- Skills ----
  renderSkills(profile.skills || {});

  // ---- Experience ----
  renderExperience(profile.experience || []);

  // ---- Education ----
  renderEducation(profile.education || []);

  // ---- Honors / Awards ----
  renderHonors(profile.honors || []);

  // ---- Social links (contact section + footer) ----
  renderSocials(profile.socials || [], '#social-links',   false);
  renderSocials(profile.socials || [], '#footer-socials', true);
}

/** BCP-47 tags so each watermark picks the right script font / shaping */
const LANG_HTML_TAGS = { EN: 'en', ID: 'id', SU: 'su', JA: 'ja', AR: 'ar', ZH: 'zh-Hans' };

/**
 * langWatermarkAttrs — lang / dir attributes for a language watermark span.
 * @param {string} code  ISO-ish language code (EN, ID, SU, JA, AR, ZH).
 * @returns {string}
 */
function langWatermarkAttrs(code) {
  const up  = String(code || '').toUpperCase();
  const tag = LANG_HTML_TAGS[up];
  return (tag ? ` lang="${tag}"` : '') + (up === 'AR' ? ' dir="rtl"' : '');
}

/**
 * renderLanguages — renders language cards into #languages-grid.
 * Displays subtle national flags and proficiency levels.
 * @param {Array} languages
 */
function renderLanguages(languages) {
  const grid = document.getElementById('languages-grid');
  if (!grid) return;

  grid.innerHTML = languages.map(lang => `
    <div class="lang-card reveal" data-lang="${escHtml(String(lang.code || '').toUpperCase())}">
      <!-- Cultural calligraphic watermark: Spencerian (EN), italic serif (ID), engraved native script (SU/JA/AR/ZH) -->
      <span class="lang-native-watermark" aria-hidden="true"${langWatermarkAttrs(lang.code)}>${escHtml(lang.watermark || lang.native || '')}</span>

      <div class="lang-header">
        <div class="lang-identity">
          <span class="lang-iso-badge">${escHtml(lang.code || '')}</span>
          <h4 class="lang-name">${escHtml(lang.name || '')}</h4>
        </div>
        <span class="lang-native-label">${escHtml(lang.native || '')}</span>
      </div>

      <div class="lang-level-badge">${escHtml(lang.level || '')}</div>

      <!-- Fluency Progress Bar -->
      <div class="lang-meter-track" role="progressbar" aria-valuenow="${lang.percent}" aria-valuemin="0" aria-valuemax="100">
        <div class="lang-meter-fill" style="width: ${lang.percent}%;"></div>
      </div>

      <div class="lang-detail">${escHtml(lang.detail || '')}</div>
    </div>
  `).join('');
}

/**
 * renderCertificates — renders certificate cards into #certificates-grid.
 * @param {Array} certs
 */
function renderCertificates(certs) {
  const grid = document.getElementById('certificates-grid');
  if (!grid) return;

  grid.innerHTML = certs.map(cert => `
    <div class="cert-card reveal">
      <div class="cert-header">
        <span class="cert-title">${escHtml(cert.title || '')}</span>
        <span class="cert-verified" title="Verified">✓</span>
      </div>
      <span class="cert-issuer">${escHtml(cert.issuer || '')}</span>
      <div class="cert-footer" style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
        <span class="cert-year">${escHtml(formatYear(cert.year))}</span>
        ${cert.file ? `<a href="${escHtml(cert.file)}" target="_blank" rel="noopener noreferrer" class="cert-link" style="font-family:var(--font-mono); font-size:0.72rem; color:var(--accent-primary); text-decoration:none;" title="View credential">View Credential ↗</a>` : ''}
      </div>
    </div>
  `).join('');
}

/**
 * renderSkills — renders skill groups into #skills-section.
 * profile.skills is an object: { "Category Name": ["skill1", …], … }
 * @param {Object} skills
 */
function renderSkills(skills) {
  const section = document.getElementById('skills-section');
  if (!section) return;

  const html = Object.entries(skills).map(([category, items]) => {
    const listItems = Array.isArray(items)
      ? items.map(s => `<li class="skill-item">${escHtml(s)}</li>`).join('')
      : '';
    return `
      <div class="skill-group reveal">
        <h4 class="skill-category">${escHtml(category)}</h4>
        <ul class="skill-list">${listItems}</ul>
      </div>`;
  }).join('');

  section.innerHTML = html;
}

/**
 * renderExperience — renders timeline items into #experience-timeline.
 * @param {Array} jobs
 */
function renderExperience(jobs) {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;

  timeline.innerHTML = jobs.map(job => {
    const rawHighlights = job.highlights || job.bullets || [];
    const bullets = Array.isArray(rawHighlights) && rawHighlights.length
      ? `<ul class="exp-bullets">${rawHighlights.map(b => `<li>${escHtml(b)}</li>`).join('')}</ul>`
      : '';
    const title = job.role || job.title || '';
    const org   = job.organization || job.company || job.institution || '';
    const date  = job.period || job.dateRange || job.date || '';

    return `
      <div class="exp-item reveal">
        <div class="exp-meta">
          <span class="exp-date">${escHtml(date)}</span>
          <span class="exp-company">${escHtml(org)}</span>
        </div>
        <div class="exp-body">
          <h4 class="exp-title">${escHtml(title)}</h4>
          ${bullets}
        </div>
      </div>`;
  }).join('');
}

/**
 * renderEducation — renders education entries into #education-list.
 * @param {Array} education
 */
function renderEducation(education) {
  const list = document.getElementById('education-list');
  if (!list) return;

  list.innerHTML = education.map(edu => {
    const period = edu.period || edu.years || edu.year || '';
    return `
      <div class="edu-item reveal">
        <div class="edu-year">${escHtml(period)}</div>
        <div class="edu-body">
          <h4 class="edu-degree">${escHtml(edu.degree || '')}</h4>
          <p class="edu-institution">${escHtml(edu.institution || '')}</p>
          ${edu.gpa   ? `<span class="edu-grade">GPA ${escHtml(String(edu.gpa))}</span>` : ''}
          ${edu.grade ? `<span class="edu-grade">Grade ${escHtml(String(edu.grade))}</span>` : ''}
        </div>
      </div>`;
  }).join('');
}

/** Bespoke etched crest motifs for the Curated Achievements cards (24×24, inside a ring) */
const HONOR_PATHS = {
  knight:    '<path d="M8.500 18.500h8M9.500 18.500c0-2.800.3-4.400 1.800-6.200-2.200.6-3.800-.6-4.800-2.200l3-3.600.9-1.800 1.900 1.100c2.600.8 4.600 2.800 4.600 6.600v6.100"/><circle cx="11.200" cy="8.900" r=".5"/>',
  astrolabe: '<circle cx="12" cy="12" r="2.600"/><ellipse cx="12" cy="12" rx="7.200" ry="2.700" transform="rotate(-28 12 12)"/><path d="M12 4.800v1.700M12 17.500v1.700M4.800 12h1.700M17.500 12h1.700"/>',
  euler:     '<path d="M12 5.500 5.800 17h12.400z"/><circle cx="12" cy="13.600" r="2.400"/><path d="M12 5.500v5.700"/>',
  scales:    '<path d="M12 5.500v12M9 18h6M6 8h12"/><path d="m6 8-2.200 5h4.400zM18 8l-2.200 5h4.400z"/><path d="M3.800 13a2.200 2.200 0 0 0 4.400 0M15.800 13a2.200 2.200 0 0 0 4.400 0"/>',
  atom:      '<circle cx="12" cy="12" r="1.200"/><ellipse cx="12" cy="12" rx="7.200" ry="2.800"/><ellipse cx="12" cy="12" rx="7.200" ry="2.800" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="7.200" ry="2.800" transform="rotate(120 12 12)"/>',
  lyre:      '<path d="M8 6c-.8 3.400-.6 6.400 1 9 .8 1.300 1.800 2 3 2s2.200-.7 3-2c1.600-2.600 1.800-5.600 1-9"/><path d="M12 6v11M10 7.500v8M14 7.500v8M10 19.500h4"/>',
  trophy:    '<path d="M8.500 5.500h7v4a3.500 3.500 0 0 1-7 0zM8.500 7H6.200a2.300 2.300 0 0 0 2.600 3.200M15.500 7h2.300a2.300 2.300 0 0 1-2.600 3.200M12 13v4M9 19.500h6M10 17h4"/>',
};

/**
 * getHonorMonolineSvg — returns a bespoke etched #C5A059 monoline crest for an honor.
 * Any legacy emoji stored in profile.json is ignored; only a known crest key,
 * or the category / title, selects the motif.
 * @param {string} category
 * @param {string} title
 * @param {string} [iconKey]
 * @returns {string}
 */
function getHonorMonolineSvg(category, title, iconKey) {
  const t = String(title || '').toLowerCase();
  const c = String(category || '').toLowerCase();
  let key = (iconKey && HONOR_PATHS[iconKey]) ? iconKey : '';
  if (!key) {
    if (t.includes('catur') || t.includes('chess') || c.includes('chess')) key = 'knight';
    else if (t.includes('astronomi') || c.includes('astronomy')) key = 'astrolabe';
    else if (t.includes('debat') || c.includes('debate')) key = 'scales';
    else if (t.includes('sains') || c.includes('natural science')) key = 'atom';
    else if (t.includes('piano') || c.includes('classical')) key = 'lyre';
    else if (t.includes('matematika') || c.includes('math')) key = 'euler';
    else key = 'trophy';
  }
  const ring = '<circle cx="12" cy="12" r="10.600" stroke-opacity="0.38"/>';
  return monoSvg(ring + HONOR_PATHS[key], 30, 1.2, 'honor-crest');
}

/**
 * renderHonors — renders curated achievements into #honors-list with bespoke
 * etched #C5A059 monoline SVG crests:
 *   Knight → Chess · Astrolabe → Astronomy · Euler triangle → Mathematics
 *   Scales → Debate / Theology · Atom → Natural Sciences · Lyre → Classical Piano
 * @param {Array} honors
 */
function renderHonors(honors) {
  const list = document.getElementById('honors-list');
  if (!list) return;

  list.innerHTML = honors.map(honor => {
    const title    = typeof honor === 'string' ? honor : (honor.title || honor.name || '');
    const category = typeof honor === 'object' ? (honor.category || '') : '';
    const iconKey  = (typeof honor === 'object' && honor.icon) ? honor.icon : '';
    const crest    = getHonorMonolineSvg(category, title, iconKey);

    return `
      <div class="achievement-card reveal">
        <span class="achievement-icon honor-card-icon" aria-hidden="true">${crest}</span>
        <div class="achievement-body">
          <h4 class="achievement-title">${escHtml(title)}</h4>
          ${category ? `<span class="achievement-category">${escHtml(category)}</span>` : ''}
        </div>
      </div>`;
  }).join('');
}

/** Social platform etched monoline SVG icons (replaces glyph / emoji stand-ins) */
const SOCIAL_PATHS = {
  github:    '<path d="M9 19c-4.300 1.400-4.300-2.500-6-3m12 5v-3.500c0-1 .1-1.400-.5-2 2.800-.3 5.500-1.400 5.500-6a4.600 4.600 0 0 0-1.300-3.200 4.200 4.200 0 0 0-.1-3.200s-1.100-.3-3.500 1.300a12.300 12.300 0 0 0-6.200 0C6.500 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21"/>',
  youtube:   '<rect x="2.500" y="5" width="19" height="14" rx="4"/><path d="m10 9.200 5 2.800-5 2.800z"/>',
  linkedin:  '<rect x="3" y="3" width="18" height="18" rx="2.500"/><path d="M8 10.500V17M8 7.500v.01M12 17v-6.500M12 13.500c0-2 1.300-3 2.800-3s2.700 1 2.700 3V17"/>',
  bluesky:   '<path d="M12 11.200C10.900 9 8.200 5.500 5.400 4.300 3.800 3.700 3 4.200 3 5.800c0 1.200.5 4.800 1 5.800.8 1.600 2.400 2.200 4.200 2-2.600.5-3.600 2-1.800 3.800 1.700 1.700 3.400.4 4.200-2.200L12 14l.4 1.200c.8 2.600 2.500 3.900 4.200 2.200 1.800-1.800.8-3.300-1.800-3.800 1.800.2 3.400-.4 4.200-2 .5-1 1-4.600 1-5.800 0-1.600-.8-2.100-2.400-1.500C15.800 5.500 13.100 9 12 11.200z"/>',
  twitter:   '<path d="M4 4h4.500L20 20h-4.500zM19.500 4l-6.300 6.900M4.500 20l6.300-6.900"/>',
  instagram: '<rect x="3.500" y="3.500" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".6"/>',
  discord:   '<path d="M8.500 7C6.600 7.400 5.100 8.100 4 9c-1.300 3.200-1.800 6.200-1.500 9.200 1.400 1 3 1.700 4.700 2l1-1.700M15.500 7c1.900.4 3.400 1.100 4.500 2 1.300 3.200 1.800 6.200 1.500 9.200-1.400 1-3 1.700-4.700 2l-1-1.700M9 7c2-.8 4-.8 6 0M8.200 17.300c2.500 1 5.100 1 7.600 0"/><circle cx="9.200" cy="12.500" r="1.300"/><circle cx="14.800" cy="12.500" r="1.300"/>',
  email:     '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.500 7 8.500 6.500L20.500 7"/>',
  link:      '<path d="M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1"/>',
};

const SOCIAL_ICONS = {};
Object.keys(SOCIAL_PATHS).forEach(k => { SOCIAL_ICONS[k] = monoSvg(SOCIAL_PATHS[k], 20, 1.5, 'social-svg'); });

/** Social platform display labels */
const SOCIAL_LABELS = {
  github:    'GitHub',
  youtube:   'YouTube',
  linkedin:  'LinkedIn',
  bluesky:   'Bluesky',
  twitter:   'Twitter / X',
  instagram: 'Instagram',
  discord:   'Discord',
  email:     'Email',
};

/**
 * renderSocials — renders social link icons into the given selector.
 * @param {Array}   socials   Array of { platform, url } objects.
 * @param {string}  selector  CSS selector for the container element.
 * @param {boolean} iconsOnly If true, renders icon-only links (for footer).
 */
function renderSocials(socials, selector, iconsOnly = false) {
  const container = document.querySelector(selector);
  if (!container) return;

  container.innerHTML = socials.map(s => {
    const platform = s.platform || s.name || '';
    const url      = s.url      || '#';
    const icon     = SOCIAL_ICONS[platform] || SOCIAL_ICONS.link;
    const label    = SOCIAL_LABELS[platform] || platform;
    const href     = platform === 'email' ? `mailto:${url.replace('mailto:', '')}` : url;

    if (iconsOnly) {
      return `<a class="social-icon-link" href="${escHtml(href)}" target="${platform === 'email' ? '_self' : '_blank'}" rel="noopener" aria-label="${escHtml(label)}">${icon}</a>`;
    }
    return `
      <a class="social-link" href="${escHtml(href)}" target="${platform === 'email' ? '_self' : '_blank'}" rel="noopener">
        <span class="social-icon">${icon}</span>
        <span class="social-label">${escHtml(label)}</span>
      </a>`;
  }).join('');
}

/* ============================================================
   9. SCROLL ANIMATIONS
   ============================================================ */

/**
 * initScrollAnimations — sets up IntersectionObserver on all .reveal elements.
 * When 15 % of an element enters the viewport, .visible is added.
 * Grid children get a staggered --delay CSS variable.
 */
function initScrollAnimations() {
  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Stagger delay for direct grid children. The index wraps every 6 cards so a
  // card far down a long grid never waits seconds for its entrance (row ripple).
  const grids = document.querySelectorAll(
    '.works-grid, .certificates-grid, .languages-grid, .honors-list, .honors-grid-3, .pillars-grid, .tools-grid-6, .research-companion-grid, .skills-section'
  );
  grids.forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.setProperty('--delay', `${(i % 6) * 65}ms`);
    });
  });

  // Also ensure .tool-dock-item elements are observed for Horological Velvet Sinking entrance
  document.querySelectorAll('.tool-dock-item').forEach((item, idx) => {
    item.classList.add('reveal');
    item.style.setProperty('--delay', `${(idx % 6) * 65}ms`);
  });

  // Once the entrance transition has finished, mark the element "settled" so CSS
  // drops the stagger delay and hover interactions respond instantly.
  const settle = el => {
    if (prefersReducedMotion) { el.classList.add('settled'); return; }
    const delay = parseFloat(el.style.getPropertyValue('--delay')) || 0;
    setTimeout(() => el.classList.add('settled'), delay + 700);
  };

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'revealed');
        settle(entry.target);
        revealObserver.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.05 });

  // Observe all current .reveal elements (and newly injected ones)
  const observeReveals = () => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
      revealObserver.observe(el);
    });
  };

  observeReveals();

  // Re-run after short delay to pick up dynamically injected .reveal nodes
  setTimeout(observeReveals, 300);
  setTimeout(observeReveals, 800);

  // Safety fallback: ensure no element remains permanently invisible
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
      el.classList.add('visible', 'revealed');
      settle(el);
    });
  }, 1200);
}

/* ============================================================
   10. PIANO SECTION: THE CONCERT SALON & URTEXT MANUSCRIPT CADENCE
   ============================================================ */

let _salonMusicWorks = [];
let _salonActiveIdx  = 0;
let _salonAudio      = null;
let _salonIsPlaying  = false;
let _salonSimTimer   = null;
let _salonSimSeconds = 0;
let _salonDurationSec = 570; // 9:30 default
let _urtextAnimId    = null;
let _urtextVisible   = true;   // flipped by IntersectionObserver on #piano
let _urtextObserver  = null;
let _urtextCanvas    = null;
let _urtextCtx       = null;
let _urtextPhase     = 0;

/** Phase 8: elastic-tension scrubber state (all positions are 0‒1 fractions of the timeline) */
const _scrub = {
  dragging: false, animating: false, pointerId: null,
  target: 0,                 // where the visitor's pointer wants the needle
  thumb: 0, thumbV: 0,       // needle position / velocity (under-damped → springs & overshoots)
  fill: 0,  fillV: 0,        // gilded trail (critically damped → trails the needle)
  raf: 0, lastT: 0,
};

/**
 * renderPianoGrid — populates #salon-tracklist and initialises the Concert Salon.
 * @param {Array} works
 */
function renderPianoGrid(works) {
  _salonMusicWorks = (works || []).filter(w => w.type === 'music');
  const tracklistEl = document.getElementById('salon-tracklist');
  if (!tracklistEl || !_salonMusicWorks.length) return;

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  tracklistEl.innerHTML = _salonMusicWorks.map((work, idx) => {
    const rNum = romanNumerals[idx] || (idx + 1);
    const keyInfo = work.key || work.era || '';
    const opusInfo = work.opus ? ` · ${work.opus}` : '';
    const isActive = idx === _salonActiveIdx ? 'active' : '';

    return `
      <div class="salon-track-item ${isActive}" data-idx="${idx}" onclick="selectSalonPiece(${idx})">
        <span class="track-num">${rNum}</span>
        <div class="track-info">
          <h4 class="track-title">${escHtml(work.title || 'Untitled')}</h4>
          <div class="track-meta">
            <span>${escHtml(work.composer || '')}</span>
            <span>${escHtml(keyInfo + opusInfo)}</span>
          </div>
        </div>
        <div class="track-play-indicator" id="salon-track-indicator-${idx}">
          ${idx === _salonActiveIdx && _salonIsPlaying ? '⏸' : '▶'}
        </div>
      </div>
    `;
  }).join('');

  // Setup Stage Plate
  updateSalonStage(_salonActiveIdx);

  // Setup Controls
  initSalonControls();

  // Setup Urtext Canvas
  setupUrtextCanvas();
}

/**
 * selectSalonPiece — selects and loads a piece into the Active Recital Stage.
 * @param {number} idx
 */
function selectSalonPiece(idx) {
  if (idx < 0 || idx >= _salonMusicWorks.length) return;

  const wasPlaying = _salonIsPlaying;
  if (_salonIsPlaying) {
    pauseSalonPiece();
  }

  _salonActiveIdx = idx;
  _salonSimSeconds = 0;

  // Update tracklist active states
  document.querySelectorAll('.salon-track-item').forEach((item, i) => {
    item.classList.toggle('active', i === idx);
    const ind = document.getElementById(`salon-track-indicator-${i}`);
    if (ind) ind.textContent = '▶';
  });

  // Phase 8: Archival Manuscript Page Turn in Soft Darkness
  triggerPageTurn(() => {
    updateSalonStage(idx);
  });

  if (wasPlaying) {
    setTimeout(() => playSalonPiece(), 290);
  }
}
window.selectSalonPiece = selectSalonPiece;

/**
 * triggerPageTurn — Phase 8 archival vellum score page-turn transition.
 */
function triggerPageTurn(callback) {
  const plate = document.querySelector('.salon-stage, .salon-stage-plate');
  if (plate) {
    plate.classList.add('track-turning');
    setTimeout(() => {
      if (callback) callback();
      plate.classList.remove('track-turning');
    }, 260);
  } else if (callback) {
    callback();
  }
}
window.triggerPageTurn = triggerPageTurn;

/**
 * parseDurationSec — parses "MM:SS" string to total seconds.
 */
function parseDurationSec(str) {
  if (!str) return 300;
  const parts = str.split(':').map(Number);
  if (parts.length === 2) return (parts[0] * 60) + parts[1];
  return 300;
}

/**
 * formatTimeSec — formats seconds to "M:SS".
 */
function formatTimeSec(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

/**
 * updateSalonStage — populates the Right Pane (Active Recital Stage Plate).
 */
function updateSalonStage(idx) {
  const work = _salonMusicWorks[idx];
  if (!work) return;

  const stageTitle = document.getElementById('stage-title');
  const stageComposer = document.getElementById('stage-composer');
  const stageEra = document.getElementById('stage-era');
  const stageKey = document.getElementById('stage-key');
  const stageTempo = document.getElementById('stage-tempo');
  const stageDesc = document.getElementById('stage-desc');
  const timeTotal = document.getElementById('time-total');
  const urtextTempo = document.getElementById('urtext-tempo-marking');
  const urtextExpr = document.getElementById('urtext-expression');
  const fill = document.getElementById('stage-scrub-fill');
  const thumb = document.getElementById('stage-scrub-thumb');
  const timeCur = document.getElementById('time-current');

  if (stageTitle) stageTitle.textContent = work.title || '';
  if (stageComposer) stageComposer.textContent = work.composer || '';
  if (stageEra) stageEra.textContent = work.era ? `${work.era} Canon` : 'Romantic Canon';
  if (stageKey) stageKey.textContent = `${work.key || 'Solo Repertoire'}${work.opus ? ` · ${work.opus}` : ''}`;
  if (stageTempo) stageTempo.textContent = work.tempo || 'Virtuoso Movement';
  if (stageDesc) stageDesc.textContent = work.description || '';
  if (urtextTempo) urtextTempo.textContent = work.tempo ? work.tempo.split('–')[0].trim() : 'Presto con fuoco';
  if (urtextExpr) urtextExpr.textContent = idx % 2 === 0 ? 'espress. e legato' : 'appassionato e brillante';

  // A new piece cancels any in-flight scrub spring
  cancelAnimationFrame(_scrub.raf);
  _scrub.raf = 0; _scrub.animating = false; _scrub.dragging = false;
  _scrub.target = _scrub.thumb = _scrub.fill = 0; _scrub.thumbV = _scrub.fillV = 0;

  _salonDurationSec = parseDurationSec(work.duration);
  if (timeTotal) timeTotal.textContent = work.duration || formatTimeSec(_salonDurationSec);
  if (fill) fill.style.width = '0%';
  if (thumb) thumb.style.left = '0%';
  if (timeCur) timeCur.textContent = '0:00';
}

/**
 * initSalonControls — wires up play/pause button and scrub bar.
 */
function initSalonControls() {
  const playBtn = document.getElementById('stage-play-btn');
  if (playBtn) {
    playBtn.onclick = () => {
      if (_salonIsPlaying) {
        pauseSalonPiece();
      } else {
        playSalonPiece();
      }
    };
  }

  const scrubBar = document.getElementById('stage-scrub-bar');
  if (scrubBar && !scrubBar.dataset.scrubBound) {
    scrubBar.dataset.scrubBound = '1';
    scrubBar.setAttribute('role', 'slider');
    scrubBar.setAttribute('tabindex', '0');
    scrubBar.setAttribute('aria-label', 'Playback position');
    scrubBar.setAttribute('aria-valuemin', '0');
    scrubBar.setAttribute('aria-valuemax', '100');

    const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pctFrom = (e) => {
      const rect = scrubBar.getBoundingClientRect();
      return Math.max(0, Math.min(1, (e.clientX - rect.left) / Math.max(1, rect.width)));
    };

    scrubBar.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      _scrub.dragging  = true;
      _scrub.pointerId = e.pointerId;
      try { scrubBar.setPointerCapture(e.pointerId); } catch (_) {}
      scrubBar.classList.remove('is-settling');
      scrubBar.classList.add('is-scrubbing');
      // Start the springs from wherever the playhead currently rests
      if (!_scrub.animating) {
        const cur = Math.min(1, _salonSimSeconds / Math.max(1, _salonDurationSec));
        _scrub.thumb = _scrub.fill = cur;
        _scrub.thumbV = _scrub.fillV = 0;
      }
      _scrub.target = pctFrom(e);
      scrubStart(scrubBar, reduced());
    });

    scrubBar.addEventListener('pointermove', (e) => {
      if (!_scrub.dragging || e.pointerId !== _scrub.pointerId) return;
      _scrub.target = pctFrom(e);
      if (reduced()) scrubStart(scrubBar, true);
    });

    const release = (e) => {
      if (!_scrub.dragging || (e && e.pointerId !== _scrub.pointerId)) return;
      _scrub.dragging = false;
      try { scrubBar.releasePointerCapture(_scrub.pointerId); } catch (_) {}
      _scrub.pointerId = null;
      scrubBar.classList.remove('is-scrubbing');
      scrubBar.classList.add('is-settling');   // springy overshoot pop on the needle

      // Commit the playhead (real audio when available, simulated clock otherwise)
      _salonSimSeconds = _scrub.target * _salonDurationSec;
      if (_salonAudio && !isNaN(_salonAudio.duration) && _salonAudio.duration > 0) {
        try { _salonAudio.currentTime = _scrub.target * _salonAudio.duration; } catch (_) {}
      }
      scrubStart(scrubBar, reduced());
    };
    scrubBar.addEventListener('pointerup', release);
    scrubBar.addEventListener('pointercancel', release);
    scrubBar.addEventListener('lostpointercapture', release);

    // Keyboard: ←/→ nudge 5 s, Home/End jump
    scrubBar.addEventListener('keydown', (e) => {
      const dur = Math.max(1, _salonDurationSec);
      let secs = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') secs = _salonSimSeconds + 5;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') secs = _salonSimSeconds - 5;
      else if (e.key === 'Home') secs = 0;
      else if (e.key === 'End') secs = dur;
      if (secs === null) return;
      e.preventDefault();
      secs = Math.max(0, Math.min(dur, secs));
      _salonSimSeconds = secs;
      if (_salonAudio && !isNaN(_salonAudio.duration) && _salonAudio.duration > 0) {
        try { _salonAudio.currentTime = (secs / dur) * _salonAudio.duration; } catch (_) {}
      }
      updateSalonTimeline();
    });
  }
}

/**
 * scrubStart — (re)starts the elastic spring loop that drives the gilded needle & trail.
 * @param {HTMLElement} bar
 * @param {boolean} instant  true under prefers-reduced-motion: snap, no spring.
 */
function scrubStart(bar, instant) {
  if (instant) {
    cancelAnimationFrame(_scrub.raf);
    _scrub.thumb = _scrub.fill = _scrub.target;
    _scrub.thumbV = _scrub.fillV = 0;
    scrubRender(bar);
    if (!_scrub.dragging) scrubFinish(bar);
    return;
  }
  _scrub.animating = true;
  if (_scrub.raf) return;
  _scrub.lastT = 0;
  const tick = (t) => {
    const dt = Math.min(0.032, _scrub.lastT ? (t - _scrub.lastT) / 1000 : 0.016);
    _scrub.lastT = t;

    // Needle: under-damped spring (ζ≈0.6) → elastic lag while dragging, overshoot on release
    const kT = 420, cT = 24;
    _scrub.thumbV += (-kT * (_scrub.thumb - _scrub.target) - cT * _scrub.thumbV) * dt;
    _scrub.thumb  += _scrub.thumbV * dt;

    // Gilded trail: critically damped spring (c = 2√k) → trails the needle without ringing
    const kF = 160, cF = 2 * Math.sqrt(kF);
    _scrub.fillV += (-kF * (_scrub.fill - _scrub.target) - cF * _scrub.fillV) * dt;
    _scrub.fill  += _scrub.fillV * dt;

    scrubRender(bar);

    const settled = !_scrub.dragging
      && Math.abs(_scrub.thumb - _scrub.target) < 0.0004 && Math.abs(_scrub.thumbV) < 0.004
      && Math.abs(_scrub.fill  - _scrub.target) < 0.0004 && Math.abs(_scrub.fillV)  < 0.004;
    if (settled) {
      _scrub.raf = 0;
      scrubFinish(bar);
      return;
    }
    _scrub.raf = requestAnimationFrame(tick);
  };
  _scrub.raf = requestAnimationFrame(tick);
}

/** scrubRender — paints needle, trail, clock and the live Urtext canvas for the current spring state. */
function scrubRender(bar) {
  const fill    = document.getElementById('stage-scrub-fill');
  const thumb   = document.getElementById('stage-scrub-thumb');
  const timeCur = document.getElementById('time-current');
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const thumbPct = clamp01(_scrub.thumb);
  const fillPct  = clamp01(_scrub.fill);

  if (fill)  fill.style.width = `${(fillPct * 100).toFixed(3)}%`;
  if (thumb) thumb.style.left = `${(thumbPct * 100).toFixed(3)}%`;
  // Elastic stretch of the needle grows with the tension between pointer and trail
  const tension = Math.min(0.9, Math.abs(_scrub.target - _scrub.fill) * 8);
  bar.style.setProperty('--scrub-stretch', (1 + tension).toFixed(3));

  _salonSimSeconds = thumbPct * _salonDurationSec;
  if (timeCur) timeCur.textContent = formatTimeSec(_salonSimSeconds);
  bar.setAttribute('aria-valuenow', String(Math.round(thumbPct * 100)));
  drawUrtextFrame(_urtextPhase);   // real-time Urtext feedback
}

/** scrubFinish — lands the playhead exactly on target and hands control back to the playback clock. */
function scrubFinish(bar) {
  _scrub.animating = false;
  _salonSimSeconds = _scrub.target * _salonDurationSec;
  bar.style.removeProperty('--scrub-stretch');
  bar.classList.remove('is-settling');
  updateSalonTimeline();
}

/**
 * playSalonPiece — starts audio playback (real or synthetic fallback).
 */
function playSalonPiece() {
  const work = _salonMusicWorks[_salonActiveIdx];
  if (!work) return;

  _salonIsPlaying = true;
  const playIcon = document.getElementById('stage-play-icon');
  if (playIcon) playIcon.textContent = '⏸';

  const trackInd = document.getElementById(`salon-track-indicator-${_salonActiveIdx}`);
  if (trackInd) trackInd.textContent = '⏸';

  const audioSrc = work.audio || `assets/audio/${work.id || 'track'}.mp3`;

  // Attempt real audio if present
  let realAudioStarted = false;
  try {
    if (!_salonAudio || _salonAudio.src !== new URL(audioSrc, window.location.href).href) {
      if (_salonAudio) _salonAudio.pause();
      _salonAudio = new Audio(audioSrc);
    }
    const playPromise = _salonAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        realAudioStarted = true;
        const statusEl = document.getElementById('time-status');
        if (statusEl) statusEl.textContent = 'Live Audio Playing';
      }).catch(() => {
        // Fallback to synthetic
        realAudioStarted = false;
      });
    }
  } catch (_) {
    realAudioStarted = false;
  }

  // Fallback simulator loop (runs smoothly whether audio plays or is in preview)
  clearInterval(_salonSimTimer);
  _salonSimTimer = setInterval(() => {
    if (_scrub.dragging || _scrub.animating) return;   // visitor is scrubbing
    if (_salonAudio && realAudioStarted && !isNaN(_salonAudio.currentTime) && _salonAudio.duration > 0) {
      _salonSimSeconds = _salonAudio.currentTime;
      _salonDurationSec = _salonAudio.duration;
    } else {
      _salonSimSeconds += 0.25;
      if (_salonSimSeconds >= _salonDurationSec) {
        _salonSimSeconds = 0;
        selectSalonPiece((_salonActiveIdx + 1) % _salonMusicWorks.length);
        return;
      }
    }
    updateSalonTimeline();
  }, 250);

  // Start Urtext canvas animation loop
  startUrtextAnimation();
}

/**
 * pauseSalonPiece — pauses audio and halts animation.
 */
function pauseSalonPiece() {
  _salonIsPlaying = false;
  const playIcon = document.getElementById('stage-play-icon');
  if (playIcon) playIcon.textContent = '▶';

  const trackInd = document.getElementById(`salon-track-indicator-${_salonActiveIdx}`);
  if (trackInd) trackInd.textContent = '▶';

  if (_salonAudio) {
    try { _salonAudio.pause(); } catch (_) {}
  }

  clearInterval(_salonSimTimer);
  _salonSimTimer = null;
}

/**
 * updateSalonTimeline — updates scrub bar fill and timestamp labels.
 */
function updateSalonTimeline() {
  if (_scrub.dragging || _scrub.animating) return;   // springs own the needle while scrubbing
  const pct = Math.min(100, (_salonSimSeconds / Math.max(1, _salonDurationSec)) * 100);
  const fill = document.getElementById('stage-scrub-fill');
  const thumb = document.getElementById('stage-scrub-thumb');
  const timeCur = document.getElementById('time-current');

  if (fill) fill.style.width = `${pct}%`;
  if (thumb) thumb.style.left = `${pct}%`;
  if (timeCur) timeCur.textContent = formatTimeSec(_salonSimSeconds);
}

/**
 * setupUrtextCanvas — initialises the Classical Grand Staff Canvas.
 */
function setupUrtextCanvas() {
  _urtextCanvas = document.getElementById('urtext-canvas');
  if (!_urtextCanvas) return;
  _urtextCtx = _urtextCanvas.getContext('2d');

  // Resize canvas to match display container
  const rect = _urtextCanvas.getBoundingClientRect();
  if (rect.width > 0) {
    _urtextCanvas.width = rect.width * (window.devicePixelRatio || 1);
    _urtextCanvas.height = 90 * (window.devicePixelRatio || 1);
  }

  // Pause the render loop whenever #piano is off-screen (GPU / battery conservation)
  if (!_urtextObserver && 'IntersectionObserver' in window) {
    const piano = document.getElementById('piano') || _urtextCanvas;
    _urtextVisible = false; // the observer reports the true state on first callback
    _urtextObserver = new IntersectionObserver((entries) => {
      const entry = entries[entries.length - 1];
      _urtextVisible = entry.isIntersecting;
      if (_urtextVisible) startUrtextAnimation();
      else stopUrtextAnimation();
    }, { threshold: 0 });
    _urtextObserver.observe(piano);
  }

  startUrtextAnimation();
}

/**
 * startUrtextAnimation — runs continuous render loop (taut piano string rest tremor + active harmonic waves).
 * No-op while #piano is off-screen; the IntersectionObserver resumes it.
 */
function startUrtextAnimation() {
  cancelAnimationFrame(_urtextAnimId);
  _urtextAnimId = null;
  if (!_urtextVisible) return;
  function loop() {
    _urtextPhase += _salonIsPlaying ? 0.055 : 0.015;
    drawUrtextFrame(_urtextPhase);
    _urtextAnimId = requestAnimationFrame(loop);
  }
  _urtextAnimId = requestAnimationFrame(loop);
}

/**
 * stopUrtextAnimation — cancels the render loop (called when #piano leaves the viewport).
 */
function stopUrtextAnimation() {
  cancelAnimationFrame(_urtextAnimId);
  _urtextAnimId = null;
}

/**
 * drawUrtextFrame — renders the Urtext 5-line grand staff, barlines, taut string micro-tremor, and measure-bar harmonic waves.
 */
function drawUrtextFrame(phase) {
  if (!_urtextCanvas || !_urtextCtx) return;
  const ctx = _urtextCtx;
  const w = _urtextCanvas.width;
  const h = _urtextCanvas.height;

  ctx.clearRect(0, 0, w, h);

  const staffTop = h * 0.25;
  const lineSpacing = (h * 0.45) / 4;
  const pct = Math.min(1, _salonSimSeconds / Math.max(1, _salonDurationSec));
  const activeX = (w * 0.04) + (pct * w * 0.92);

  // 1. Draw 5 golden staff lines with taut piano string tension (rest: 0.35px tremor; playing: harmonic propagation)
  ctx.strokeStyle = 'rgba(201, 168, 76, 0.32)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const baseY = staffTop + (i * lineSpacing);
    ctx.beginPath();
    for (let x = w * 0.04; x <= w * 0.96; x += 6) {
      const distFromPlayhead = Math.abs(x - activeX);
      const decay = Math.exp(-distFromPlayhead / (w * 0.18));
      const amp = _salonIsPlaying ? (0.4 + 2.4 * decay) : 0.35;
      const dy = Math.sin((x * 0.025) - (phase * 2.2) + (i * 0.7)) * amp;
      if (x === w * 0.04) ctx.moveTo(x, baseY + dy);
      else ctx.lineTo(x, baseY + dy);
    }
    ctx.stroke();
  }

  // 2. Measure barlines with vertical harmonic ripple
  const measureCount = 4;
  const measureW = (w * 0.92) / measureCount;
  for (let m = 0; m <= measureCount; m++) {
    const x = (w * 0.04) + (m * measureW);
    const distM = Math.abs(x - activeX);
    const barGlow = _salonIsPlaying && distM < (w * 0.12);
    ctx.strokeStyle = barGlow ? 'rgba(223, 194, 133, 0.75)' : 'rgba(201, 168, 76, 0.38)';
    ctx.lineWidth = barGlow ? 1.5 : 1;
    ctx.beginPath();
    for (let y = staffTop; y <= staffTop + (4 * lineSpacing); y += 3) {
      const waveX = _salonIsPlaying
        ? Math.sin((y * 0.12) + (phase * 3) + m) * (barGlow ? 2.2 : 0.7)
        : 0;
      if (y === staffTop) ctx.moveTo(x + waveX, y);
      else ctx.lineTo(x + waveX, y);
    }
    ctx.stroke();
  }

  // 3. Classical Musical Noteheads & Harmonic Cadence Nodes
  const notePositions = [
    { m: 0, pitch: 3, type: 'quarter' },
    { m: 0, pitch: 1, type: 'quarter' },
    { m: 1, pitch: 2, type: 'eighth' },
    { m: 1, pitch: 0, type: 'eighth' },
    { m: 2, pitch: 4, type: 'quarter' },
    { m: 2, pitch: 2, type: 'quarter' },
    { m: 3, pitch: 1, type: 'half' },
  ];

  // Playhead glowing vertical hairline
  ctx.strokeStyle = 'rgba(201, 168, 76, 0.85)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(activeX, staffTop - 8);
  ctx.lineTo(activeX, staffTop + (4 * lineSpacing) + 8);
  ctx.stroke();

  // Draw notes
  notePositions.forEach((note, i) => {
    const nx = (w * 0.08) + (i * (w * 0.12));
    const ny = staffTop + (note.pitch * (lineSpacing / 2));
    const distToPlayhead = Math.abs(nx - activeX);
    const isLit = distToPlayhead < (w * 0.08) && _salonIsPlaying;

    ctx.save();
    ctx.translate(nx, ny);
    ctx.rotate(-0.25); // Slanted classical notehead

    ctx.beginPath();
    ctx.ellipse(0, 0, 5, 3.8, 0, 0, Math.PI * 2);
    if (isLit) {
      const pulseScale = 1 + (0.35 * Math.sin(phase * 4 + i));
      ctx.fillStyle = '#fffaf0';
      ctx.shadowColor = 'rgba(201, 168, 76, 0.9)';
      ctx.shadowBlur = 12 * pulseScale;
      ctx.fill();
    } else {
      ctx.fillStyle = 'rgba(201, 168, 76, 0.75)';
      ctx.fill();
    }
    ctx.restore();

    // Note stem
    ctx.strokeStyle = isLit ? '#fffaf0' : 'rgba(201, 168, 76, 0.65)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(nx + 4.5, ny);
    ctx.lineTo(nx + 4.5, ny - 24);
    ctx.stroke();
  });

  // 4. Polyphonic Harmonic Waveform Ribbon across Measure Bars
  if (_salonIsPlaying) {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(201, 168, 76, 0.38)';
    ctx.lineWidth = 1.5;
    for (let x = w * 0.04; x <= w * 0.96; x += 4) {
      const wave = Math.sin((x * 0.02) + phase * 2) * 5
                 + Math.sin((x * 0.04) - phase * 1.5) * 3;
      const y = staffTop + (2 * lineSpacing) + wave;
      if (x === w * 0.04) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

// Window resize listener to keep canvas crisp
window.addEventListener('resize', () => {
  setupUrtextCanvas();
});

/**
 * openWorkById — helper to open the rich detail modal from any link or button.
 * @param {string} id
 */
function openWorkById(id) {
  const allWorks = window.WORKS_DATA || [];
  const work = allWorks.find(w => w.id === id);
  if (work) {
    openModal(work);
  } else {
    console.warn('[Elektra] Work not found for id:', id);
  }
}
window.openWorkById = openWorkById;

/* ============================================================
   HELPER: HTML escaping
   ============================================================ */

/**
 * escHtml — escapes a string for safe insertion into HTML.
 * @param {string} str
 * @returns {string}
 */
function escHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
}

/**
 * setTextContent — safely sets the textContent of an element matched by selector.
 * @param {string} selector
 * @param {string} text
 */
function setTextContent(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

/* ============================================================
   11. COPY EMAIL (binding — function defined in §1)
   ============================================================ */
// copyEmail() is defined in §1 and exposed on window.
// The HTML uses onclick="copyEmail()" directly.

/* ============================================================
   11b. HORIZONS AMBIENT ATMOSPHERE CONTROLLER
   ============================================================ */
/**
 * initHorizonsAura — manages atmospheric chromatic auras on pillar hover/touch.
 * Completely responsive and agnostic to viewport minimize/maximize.
 */
function initHorizonsAura() {
  const horizonsSection = document.getElementById('horizons');
  if (!horizonsSection) return;

  const cards = horizonsSection.querySelectorAll('.pillar-card');
  if (!cards.length) return;

  cards.forEach(card => {
    const id = card.dataset.pillarId;
    if (!id) return;

    card.addEventListener('mouseenter', () => {
      horizonsSection.dataset.activePillar = id;
    });

    card.addEventListener('mouseleave', () => {
      horizonsSection.dataset.activePillar = '0';
    });

    card.addEventListener('touchstart', () => {
      horizonsSection.dataset.activePillar = id;
    }, { passive: true });
  });

  // Tap outside dismisses aura on touch viewports
  document.addEventListener('touchstart', (e) => {
    if (!horizonsSection.contains(e.target)) {
      horizonsSection.dataset.activePillar = '0';
    }
  }, { passive: true });
}

/* ============================================================
   11c. TOOLS DOCK INTERACTION CONTROLLER (Google Workspace Style)
   ============================================================ */
/**
 * initToolDockInteraction — manages click & touch toggle for tool popovers.
 */
function initToolDockInteraction() {
  const dockItems = document.querySelectorAll('.tool-dock-item');
  if (!dockItems.length) return;

  dockItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // Toggle active state on mobile tap
      const wasActive = item.classList.contains('is-active');
      dockItems.forEach(d => d.classList.remove('is-active'));
      if (!wasActive) item.classList.add('is-active');
    });
  });

  // Tap outside dismisses any open mobile tool card
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.tool-dock-item')) {
      dockItems.forEach(d => d.classList.remove('is-active'));
    }
  });
}

/* ============================================================
   12. INITIALISATION — DOMContentLoaded entry point
   ============================================================ */

document.addEventListener('DOMContentLoaded', async () => {

  /* ---- A. Navigation (runs immediately, no data needed) ---- */
  initNavigation();

  /* ---- B. Hero animations (no data needed) ---- */
  initTypewriter();
  initStatsCounter();

  /* ---- B2. Horizons Ambient Atmosphere ---- */
  initHorizonsAura();

  /* ---- B3. Tools Google Workspace Dock ---- */
  initToolDockInteraction();

  /* ---- C. Modal close wiring ---- */
  initModal();

  /* ---- D. Scroll animations base pass ---- */
  initScrollAnimations();

  /* ---- E. Load data ---- */
  let profile = {};
  let works   = [];

  try {
    const data = await loadData();
    profile = data.profile || {};
    works   = Array.isArray(data.works) ? data.works : [];
    window.PROFILE_DATA = profile;
    window.WORKS_DATA   = works;
  } catch (err) {
    console.error('[Elektra] Data load error:', err);
  }

  /* ---- F. Render profile-driven sections ---- */
  renderProfile(profile);

  /* ---- G. Render works grid ---- */
  renderWorksGrid(works);

  /* ---- H. Wire up works filter buttons ---- */
  initWorksFilter();

  /* ---- I. Render piano repertoire ---- */
  renderPianoGrid(works);

  /* ---- J. Second pass of scroll animations to pick up injected .reveal nodes ---- */
  initScrollAnimations();

  /* ---- K. Keyboard trap inside modal (tab cycling) ---- */
  document.addEventListener('keydown', e => {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay || !overlay.classList.contains('active')) return;

    if (e.key !== 'Tab') return;
    const focusable = overlay.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  console.info('[Elektra] Portfolio initialised ✓ — profile loaded, works loaded:', works.length);
});

/* ============================================================
   STRATEGIC & KINETIC THEATER CONSOLE CONTROLLER (PHASE 9)
   4-Video Architecture · Blueprint Inline Accordion · Frosted Echo
   ============================================================ */
const STRATEGIC_DISCIPLINES = {
  overture: {
    id: "overture",
    theme: "chess",
    title: "Synthesized Kinetic Reflexes — Polymath Overview",
    kicker: "TRI-DISCIPLINE MASTER OVERTURE · AMBIENT FEED",
    badge: "Tri-Discipline Composite",
    description: "Unified synthesis of Grandmaster positional chess calculation, high-accuracy European geospatial deduction, and high-BPM multi-finger rhythm reflexes.",
    repertoireLabel: "Synthesized Domains:",
    repertoireLine: "Positional Game Theory · European Topographical Meta · Virtuoso Multi-Finger Mechanics",
    videoSrc: "assets/video/overture-montage.mp4",
    videoTitle: "Tri-Discipline Master Overture Montage",
    telemetry: "1920 × 1080 · 60 FPS · Composite Master Feed"
  },
  chess: {
    id: "chess",
    theme: "chess",
    title: "Chess — Competitive Strategy",
    kicker: "ACTIVE FEED · CHESS STRATEGY",
    badge: "Campus & IAPI Champion",
    description: "Deep positional play, dynamic tactical foresight, and sharp opening theoretical preparation. Campus and national competitive tournament champion.",
    repertoireLabel: "Favorite Repertoire:",
    repertoireLine: "Caro-Kann Defense · Queen's Gambit · Sicilian Najdorf Variation",
    videoSrc: "assets/video/chess-analysis.mp4",
    videoTitle: "Chess Analysis & Tactical Repertoire",
    telemetry: "1920 × 1080 · 60 FPS · Tournament Replay"
  },
  geoguessr: {
    id: "geoguessr",
    theme: "geoguessr",
    title: "GeoGuessr — Regional Topography",
    kicker: "ACTIVE FEED · GEOGUESSR TOPOGRAPHY",
    badge: "European Meta Specialist",
    description: "High-accuracy regional deduction via architectural nuances, flora geography, utility infrastructure, road meta, and linguistic visual cues.",
    repertoireLabel: "Domain Focus:",
    repertoireLine: "European Meta · Regional Topography · High-Accuracy Location Inference",
    videoSrc: "assets/video/geoguessr-analysis.mp4",
    videoTitle: "GeoGuessr European Meta Deduction",
    telemetry: "1920 × 1080 · 60 FPS · NMPZ 5k Runs"
  },
  rhythm: {
    id: "rhythm",
    theme: "rhythm",
    title: "Rhythm Games — High-BPM Kinetic Reflexes",
    kicker: "ACTIVE FEED · KINETIC REFLEXES",
    badge: "High-BPM Kinetic Reflexes",
    description: "Million Master in Cytus; elite multi-finger coordination across VOEZ, Deemo, Dynamix, BanG Dream!, and osu! Directly connects multi-finger kinetic speed to virtuoso classical piano mechanics.",
    repertoireLabel: "Kinetic Link:",
    repertoireLine: "Directly connects multi-finger kinetic speed & finger independence to virtuoso classical piano mechanics.",
    videoSrc: "assets/video/rhythm-gameplay.mp4",
    videoTitle: "High-BPM Multi-Finger Finger Cam & Play",
    telemetry: "1920 × 1080 · 60 FPS · Million Master"
  }
};

let _activeStrategicId = 'chess';
let _overtureIdleTimer = null;
let _theaterSoundUnmuted = false;

function selectStrategicDiscipline(id) {
  clearTimeout(_overtureIdleTimer);
  const data = STRATEGIC_DISCIPLINES[id];
  if (!data) return;

  if (_activeStrategicId === id) return;
  _activeStrategicId = id;

  const consoleEl = document.getElementById('strategic-theater');
  if (consoleEl) consoleEl.setAttribute('data-active-theme', data.theme);

  // 1. Update Blueprint Inline Accordion Items & Stamped Golden Wax Seals
  if (id !== 'overture') {
    document.querySelectorAll('.theater-accordion-item').forEach(item => {
      const isMatch = item.dataset.id === id;
      item.classList.toggle('active', isMatch);
    });

    document.querySelectorAll('.theater-tab-btn').forEach(btn => {
      const isMatch = btn.dataset.id === id;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      if (isMatch) {
        const badge = btn.querySelector('.tab-badge');
        if (badge) {
          badge.style.animation = 'none';
          void badge.offsetHeight;
          badge.style.animation = '';
        }
      }
    });
  }

  // 2. Update Under-Video Metadata Anchor Box (Directly beneath 16:9 Video Frame)
  const repBox = document.getElementById('theater-repertoire-box');
  const repLabel = document.getElementById('repertoire-label');
  const repLine = document.getElementById('repertoire-line');
  if (repBox) {
    repBox.classList.add('updating');
    setTimeout(() => {
      if (repLabel) repLabel.textContent = data.repertoireLabel;
      if (repLine) repLine.textContent = data.repertoireLine;
      repBox.classList.remove('updating');
    }, 160);
  } else {
    if (repLabel) repLabel.textContent = data.repertoireLabel;
    if (repLine) repLine.textContent = data.repertoireLine;
  }

  // 3. 16:9 Video Stage Frosted Glass Defocus / Refocus Transition (180ms)
  const wrapper = document.querySelector('.theater-screen-wrapper');
  if (wrapper) {
    wrapper.classList.add('defocusing');
    setTimeout(() => {
      const video = document.getElementById('strategic-video-player');
      const source = document.getElementById('strategic-video-source');
      const poster = document.getElementById('theater-standby-poster');
      const standbyKicker = document.getElementById('standby-kicker');
      const standbyTitle = document.getElementById('standby-title');
      const telemetry = document.getElementById('telemetry-focus');

      if (video) {
        video.pause();
        video.style.display = 'none';
      }
      if (poster) poster.style.display = 'flex';
      if (source) source.src = data.videoSrc;
      if (video) video.load();
      if (standbyKicker) standbyKicker.textContent = data.kicker;
      if (standbyTitle) standbyTitle.textContent = data.videoTitle;
      if (telemetry) telemetry.textContent = data.telemetry;
      wrapper.classList.remove('defocusing');
    }, 180);
  }
}
window.selectStrategicDiscipline = selectStrategicDiscipline;

/**
 * handleTheaterMouseLeave — politely cross-fades the 16:9 stage to the Tri-Discipline Master Overture
 * after a 1.8s idle delay when the cursor leaves the theater console.
 */
function handleTheaterMouseLeave() {
  clearTimeout(_overtureIdleTimer);
  _overtureIdleTimer = setTimeout(() => {
    const video = document.getElementById('strategic-video-player');
    if (video && !video.paused && video.style.display !== 'none') return;
    selectStrategicDiscipline('overture');
  }, 1800);
}
window.handleTheaterMouseLeave = handleTheaterMouseLeave;

/**
 * toggleTheaterSoundstage — Acoustic Sovereignty Guardrail:
 * Muted by default; unmuting pauses the Classical Piano Recital so audio streams never collide.
 */
function toggleTheaterSoundstage(e) {
  if (e) e.stopPropagation();
  _theaterSoundUnmuted = !_theaterSoundUnmuted;
  const btn = document.getElementById('theater-soundstage-toggle');
  const label = document.getElementById('soundstage-label');
  const video = document.getElementById('strategic-video-player');

  if (btn) btn.classList.toggle('unmuted', _theaterSoundUnmuted);
  if (label) {
    label.textContent = _theaterSoundUnmuted ? 'SOUNDSTAGE ACTIVE' : 'MUTED · AMBIENT OVERLAY';
  }
  if (video) {
    video.muted = !_theaterSoundUnmuted;
  }
  if (_theaterSoundUnmuted && typeof pauseSalonPiece === 'function' && _salonIsPlaying) {
    pauseSalonPiece();
  }
}
window.toggleTheaterSoundstage = toggleTheaterSoundstage;

/**
 * handleTheaterPosterClick — attempts to play video or indicates standby status.
 */
const THEATER_STANDBY_MSG = 'Match Telemetry & Analysis Reel currently in post-production (1080p 60fps). Full footage dropping soon.';
// Flip to true once assets/video/chess-analysis.mp4 is published.
const THEATER_VIDEO_AVAILABLE = false;

/**
 * showTheaterToast — luxury champagne toast (obsidian glass pill, auto-dismiss).
 */
function showTheaterToast(msg) {
  let toast = document.querySelector('.theater-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'theater-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  // Force a reflow so the transition replays when re-triggered
  void toast.offsetWidth;
  toast.classList.add('is-visible');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('is-visible'), 3800);
}
window.showTheaterToast = showTheaterToast;

function handleTheaterPosterClick() {
  const video = document.getElementById('strategic-video-player');
  const poster = document.getElementById('theater-standby-poster');

  // Intercept before any network request: the master footage is still in post-production.
  if (!THEATER_VIDEO_AVAILABLE) {
    showTheaterToast(THEATER_STANDBY_MSG);
    return;
  }

  if (video) {
    const source = document.getElementById('strategic-video-source');
    if (source && source.dataset.src && !video.src) {
      video.src = source.dataset.src;
    }
    video.muted = !_theaterSoundUnmuted;
    video.style.display = 'block';
    if (poster) poster.style.display = 'none';
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (poster) poster.style.display = 'flex';
        video.style.display = 'none';
        const badge = document.getElementById('standby-badge');
        if (badge) {
          badge.textContent = 'Master Footage in Final Post-Production · 1080p 60fps';
        }
      });
    }
  }
}
window.handleTheaterPosterClick = handleTheaterPosterClick;

/* ============================================================
   PHASE 10: DIPLOMATIC DISPATCH CONSOLE (WAX SEAL COMPRESSION)
   ============================================================ */
function handleDiplomaticDispatch(e) {
  if (e) e.preventDefault();
  const btn = document.getElementById('dispatch-submit-btn');
  const textEl = document.getElementById('dispatch-submit-text');
  const nameEl = document.getElementById('dispatch-name');
  const domainEl = document.getElementById('dispatch-domain');
  const msgEl = document.getElementById('dispatch-message');

  const name = nameEl ? nameEl.value.trim() : '';
  const domain = domainEl ? domainEl.value.trim() : 'Scholarly Inquiry';
  const msg = msgEl ? msgEl.value.trim() : '';

  if (btn) {
    btn.classList.add('wax-sealing');
    if (textEl) textEl.textContent = 'Compressing Golden Wax Seal...';
  }

  setTimeout(() => {
    if (btn) btn.classList.remove('wax-sealing');
    if (textEl) textEl.textContent = 'Treatise Sealed & Transmitted ✓';

    const subject = encodeURIComponent(`[Archival Dispatch] ${domain} — ${name}`);
    const body = encodeURIComponent(`Correspondent: ${name}\nDomain: ${domain}\n\n${msg}`);
    window.location.href = `mailto:elivianaelektra@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      if (textEl) textEl.textContent = 'Seal & Dispatch Treatise';
      const form = document.getElementById('diplomatic-dispatch-form');
      if (form) form.reset();
    }, 3200);
  }, 420);
}
window.handleDiplomaticDispatch = handleDiplomaticDispatch;

/* ============================================================
   CSS KEYFRAME INJECTION (trackProgress animation)
   ============================================================ */
(function injectKeyframes() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes trackProgress {
      from { width: 0%; }
      to   { width: 100%; }
    }
  `;
  document.head.appendChild(style);
})();

/* ============================================================
   PHASE 0 & 2: GRAVITATIONAL LENS CURSOR & 2.5D BOTANICAL TILT
   ============================================================ */
(function initGravitationalCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  const trail = document.createElement('div');
  trail.id = 'custom-cursor-trail';
  document.body.appendChild(cursor);
  document.body.appendChild(trail);

  cursor.style.opacity = '0';
  trail.style.opacity = '0';

  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;
  let hasMoved = false;

  const heroDeco = document.querySelector('.hero-deco');

  // Hybrid / touchscreen guardrail: any touch hides the cursor so it never freezes at a tap point.
  document.addEventListener('touchstart', () => {
    cursor.style.display = 'none';
    trail.style.display = 'none';
  }, { passive: true });

  document.addEventListener('mousemove', (e) => {
    // Ignore compatibility mouse events synthesised from touch input
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents === true) return;
    if (cursor.style.display === 'none') {
      cursor.style.display = '';
      trail.style.display = '';
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    if (!hasMoved) {
      hasMoved = true;
      trailX = mouseX;
      trailY = mouseY;
      cursor.style.opacity = '1';
      trail.style.opacity = '1';
    }

    // Phase 2: Subtle 2.5D Optical Parallax Tilt on Hero Botanical Watermark
    if (heroDeco && window.scrollY < window.innerHeight) {
      const nx = (mouseX / window.innerWidth) - 0.5;
      const ny = (mouseY / window.innerHeight) - 0.5;
      heroDeco.style.transform = `translate(calc(-50% + ${nx * -16}px), calc(-50% + ${ny * -16}px)) rotateX(${ny * -4}deg) rotateY(${nx * 4}deg)`;
    }
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    trail.style.left = trailX + 'px';
    trail.style.top = trailY + 'px';
    requestAnimationFrame(animateTrail);
  }
  requestAnimationFrame(animateTrail);

  const interactiveSelectors = 'a, button, [role="button"], input, textarea, select, .nav-link, .work-card, .tool-dock-item, .theater-tab-btn, .filter-btn, .social-pill, .pillar-card, .companion-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.remove('cursor-hover');
    }
  });

  // Gravitational Lens Magnetic Pull on Typography & Nav Links
  const magneticEls = document.querySelectorAll('.hero-name, .section-title, .nav-link, .subsection-title');
  magneticEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) * 0.055;
      const dy = (e.clientY - centerY) * 0.055;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.style.transition = 'transform 0.1s ease';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)';
    });
  });

  // Phase 0: Gravitational pull on hairline dividers.
  // Within 80px the header bows ≤2px toward the cursor and its hairline + heading
  // shift to luminous #dfc285 (class .hairline-attracted; transitions live in CSS).
  const HAIRLINE_SELECTOR = '.tools-group-header, .salon-program-header, .dispatch-console-header';
  const HAIRLINE_RADIUS   = 80;
  const hairlineReduced   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let hairlineQueued = false;

  function updateHairlinePull() {
    hairlineQueued = false;
    document.querySelectorAll(HAIRLINE_SELECTOR).forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -HAIRLINE_RADIUS || r.top > window.innerHeight + HAIRLINE_RADIUS) {
        el.classList.remove('hairline-attracted');
        return;
      }
      // distance from the cursor to the nearest point of the header box
      const nx = Math.max(r.left, Math.min(mouseX, r.right));
      const ny = Math.max(r.top,  Math.min(mouseY, r.bottom));
      const dist = Math.hypot(mouseX - nx, mouseY - ny);
      if (dist <= HAIRLINE_RADIUS) {
        const strength = 1 - dist / HAIRLINE_RADIUS;                  // 0 → 1
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const px = Math.max(-1, Math.min(1, (mouseX - cx) / Math.max(1, r.width / 2)));
        const py = Math.max(-1, Math.min(1, (mouseY - cy) / Math.max(1, r.height / 2)));
        const pull = hairlineReduced ? 0 : 2 * strength;               // ≤ 2px
        el.style.setProperty('--hairline-dx', `${(px * pull).toFixed(2)}px`);
        el.style.setProperty('--hairline-dy', `${(py * pull).toFixed(2)}px`);
        el.style.setProperty('--hairline-glow', strength.toFixed(2));
        el.classList.add('hairline-attracted');
      } else if (el.classList.contains('hairline-attracted')) {
        el.classList.remove('hairline-attracted');
        el.style.removeProperty('--hairline-dx');
        el.style.removeProperty('--hairline-dy');
        el.style.removeProperty('--hairline-glow');
      }
    });
  }
  document.addEventListener('mousemove', () => {
    if (hairlineQueued) return;
    hairlineQueued = true;
    requestAnimationFrame(updateHairlinePull);
  }, { passive: true });
})();

/* ============================================================
   PHASE 0: LATERAL INK-BLEED TITLE UNVEILING
   Section titles inside a .reveal section animate via pure CSS when that section
   gets .revealed. Titles outside one (e.g. #works) and every subsection title are
   observed individually and get .ink-revealed as they enter the viewport.
   ============================================================ */
(function initInkBleedTitles() {
  const titles = Array.from(document.querySelectorAll('.section-title, .subsection-title'))
    .filter(el => el.classList.contains('subsection-title') || !el.closest('.reveal'));
  if (!titles.length) return;

  if (!('IntersectionObserver' in window)) {
    titles.forEach(el => el.classList.add('ink-revealed'));
    return;
  }
  titles.forEach(el => el.classList.add('ink-pending'));
  const inkObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('ink-pending');
      entry.target.classList.add('ink-revealed');
      inkObserver.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  titles.forEach(el => inkObserver.observe(el));
  // Safety net: never leave a heading permanently hidden
  setTimeout(() => titles.forEach(el => {
    if (el.classList.contains('ink-pending')) {
      el.classList.remove('ink-pending');
      el.classList.add('ink-revealed');
    }
  }), 4000);
})();

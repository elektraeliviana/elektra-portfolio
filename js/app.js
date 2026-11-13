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
  // If window.PROFILE_DATA & window.WORKS_DATA are already provided via data.js, use them directly
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

/** Mapping from work type to its emoji icon */
const TYPE_ICONS = {
  code:        '⚡',
  research:    '🔬',
  novel:       '📖',
  writing:     '✍️',
  art:         '🎨',
  music:       '🎹',
  chess:       '♟️',
  performance: '🎬',
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

  const icon        = TYPE_ICONS[work.type]   || '📄';
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
  } else if (work.links && (work.links.live || work.links.github)) {
    cardActions = `
      <div class="card-direct-actions">
        ${work.links.live ? `<a href="${escHtml(work.links.live)}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-live" onclick="event.stopPropagation()">Live Site ↗</a>` : ''}
        ${work.links.github ? `<a href="${escHtml(work.links.github)}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-repo" onclick="event.stopPropagation()">Repository ↗</a>` : ''}
      </div>`;
  }

  card.innerHTML = `
    <span class="card-type-badge">${icon}</span>
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
function initWorksFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter || 'all';
      applyWorksFilter(filter);
    });
  });
}

/**
 * applyWorksFilter — shows/hides work cards based on the selected type.
 * Uses a CSS class .hidden for display:none and opacity fade.
 * @param {string} filter  'all' or a specific type string.
 */
function applyWorksFilter(filter) {
  const cards = document.querySelectorAll('#works-grid .work-card');
  cards.forEach(card => {
    const cardType = card.dataset.type;
    const matches = filter === 'all' ||
      cardType === filter ||
      (filter === 'novel' && (cardType === 'writing' || cardType === 'novel'));
    // Fade out first, then hide
    if (matches) {
      card.style.display = '';
      // Let the browser paint before adding visible
      requestAnimationFrame(() => card.classList.remove('hidden'));
    } else {
      card.classList.add('hidden');
      // After CSS transition, actually hide from layout
      card.addEventListener('transitionend', function handler() {
        if (card.classList.contains('hidden')) card.style.display = 'none';
        card.removeEventListener('transitionend', handler);
      });
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
  const overlay     = document.getElementById('modal-overlay');
  const contentEl   = document.getElementById('modal-content');
  if (!overlay || !contentEl) return;

  contentEl.innerHTML = buildModalHTML(work);

  // Lock body scroll
  document.body.classList.add('modal-open');
  overlay.classList.add('active', 'visible');

  // Focus the close button for accessibility
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.focus();
}

/**
 * closeModal — hides the detail modal and restores body scroll.
 */
function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('active', 'visible');
  document.body.classList.remove('modal-open');
  _modalWork = null;
}

/**
 * buildModalHTML — generates the inner HTML for the modal content area.
 * Adapts to work type for art, music, research, and novel specifics.
 * @param {Object} work
 * @returns {string}
 */
function buildModalHTML(work) {
  const icon        = TYPE_ICONS[work.type]        || '📄';
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
          <span class="art-placeholder-icon">🎨</span>
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
        📄 Download PDF
      </a>`;
  }

  if (work.type === 'novel' || work.type === 'writing') {
    const synopsis = work.synopsis || work.description || '';
    typeSpecificHtml = `
      ${synopsis ? `<div class="modal-synopsis"><h4 class="modal-section-label">Synopsis</h4><p>${escHtml(synopsis)}</p></div>` : ''}
      <button class="modal-excerpt-btn" onclick="alert('Full excerpt coming soon…')">
        📖 Read Excerpt
      </button>`;
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
    (work.type === 'research' || work.type === 'novel' || work.type === 'writing')
      ? '' // already included in typeSpecificHtml
      : (work.description || work.synopsis || '');

  return `
    <div class="modal-header">
      <span class="modal-type-badge">${icon} ${escHtml(work.type || '')}</span>
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

/**
 * renderLanguages — renders language cards into #languages-grid.
 * Displays subtle national flags and proficiency levels.
 * @param {Array} languages
 */
function renderLanguages(languages) {
  const grid = document.getElementById('languages-grid');
  if (!grid) return;

  grid.innerHTML = languages.map(lang => `
    <div class="lang-card reveal">
      <div class="lang-top">
        <span class="lang-flag" aria-hidden="true">${escHtml(lang.flag || '🌐')}</span>
        <span class="lang-name">${escHtml(lang.name || '')}</span>
      </div>
      <div class="lang-level">${escHtml(lang.level || '')}</div>
      ${lang.detail ? `<div class="lang-detail">${escHtml(lang.detail)}</div>` : ''}
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

/**
 * renderHonors — renders curated achievements into #honors-list with semantic icons.
 * ♞ Knight: Chess Champion
 * 🪐 Saturn: Astronomy Olympiad
 * 🌾 Rural / Geometry: Mathematics Olympiad & Exams
 * ⚖️ Balance Scale: Mathematics & Islamic Theology Debate
 * 🔬 Microscope: Science Olympiad
 * 🎹 Piano Keys: Classical Piano Soloist
 * @param {Array} honors
 */
function renderHonors(honors) {
  const list = document.getElementById('honors-list');
  if (!list) return;

  list.innerHTML = honors.map(honor => {
    const title = typeof honor === 'string' ? honor : (honor.title || honor.name || '');
    let icon = (typeof honor === 'object' && honor.icon) ? honor.icon : '';
    const category = typeof honor === 'object' ? (honor.category || '') : '';

    if (!icon) {
      const lower = title.toLowerCase();
      if (lower.includes('catur') || lower.includes('chess')) icon = '♞';
      else if (lower.includes('astronomi')) icon = '🪐';
      else if (lower.includes('matematika') && (lower.includes('olimpiade') || lower.includes('ulangan'))) icon = '🌾';
      else if (lower.includes('debat')) icon = '⚖️';
      else if (lower.includes('sains')) icon = '🔬';
      else if (lower.includes('piano')) icon = '🎹';
      else icon = '🏆';
    }

    return `
      <div class="achievement-card reveal">
        <span class="achievement-icon" aria-hidden="true">${icon}</span>
        <div class="achievement-body">
          <h4 class="achievement-title">${escHtml(title)}</h4>
          ${category ? `<span class="achievement-category">${escHtml(category)}</span>` : ''}
        </div>
      </div>`;
  }).join('');
}

/** Social platform icon mapping */
const SOCIAL_ICONS = {
  github:    '⌥',  // GitHub
  youtube:   '▶',
  linkedin:  'in',
  bluesky:   '🦋',
  twitter:   '𝕏',
  instagram: '◈',
  discord:   '◎',
  email:     '✉',
};

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
    const icon     = SOCIAL_ICONS[platform] || '🔗';
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
  // Stagger delay for direct grid children
  const grids = document.querySelectorAll(
    '.works-grid, .certificates-grid, .languages-grid, .honors-list, .skills-section'
  );
  grids.forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.setProperty('--delay', `${i * 60}ms`);
    });
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible', 'revealed');
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
    });
  }, 1200);
}

/* ============================================================
   10. PIANO SECTION
   ============================================================ */

/**
 * renderPianoGrid — populates #piano-grid with music-type works.
 * @param {Array} works  All works; will be filtered to type===music.
 */
function renderPianoGrid(works) {
  const grid = document.getElementById('piano-grid');
  if (!grid) return;

  const musicWorks = works.filter(w => w.type === 'music');
  if (!musicWorks.length) {
    grid.innerHTML = '<p class="piano-empty">No repertoire entries found.</p>';
    return;
  }

  grid.innerHTML = musicWorks.map((work, idx) => {
    const composer = work.composer || '';
    const era      = work.era || work.genre || '';
    const statusClass = STATUS_CLASSES[work.status] || 'status-complete';
    const audioSrc = work.audio || `assets/audio/${work.id || 'track'}.mp3`;

    return `
      <div class="piano-card reveal" style="--delay: ${idx * 80}ms" data-id="${escHtml(work.id || slugify(work.title || ''))}">
        <div class="piano-card-header">
          <span class="piano-icon">🎹</span>
          <span class="piano-status ${statusClass}">${escHtml(STATUS_LABELS[work.status] || '')}</span>
        </div>
        <h3 class="piano-title">${escHtml(work.title || 'Untitled')}</h3>
        ${composer ? `<p class="piano-composer">${escHtml(composer)}</p>` : ''}
        ${era      ? `<p class="piano-era">${escHtml(era)}</p>`           : ''}
        <div class="piano-player">
          <button
            class="piano-play-piece-btn"
            aria-label="Play ${escHtml(work.title || '')}"
            onclick="togglePianoPlayer(this, ${idx}, '${escHtml(audioSrc)}', '${escHtml(work.title || '')}', '${escHtml(composer)}')"
          >
            <span class="soundwave-pulse" aria-hidden="true">
              <span></span><span></span><span></span><span></span>
            </span>
            <span class="piano-btn-label">Play a piece</span>
            <span class="piano-play-icon">▶</span>
          </button>
          <div class="piano-progress-bar">
            <div class="piano-progress-fill" id="piano-progress-${idx}"></div>
          </div>
        </div>
        ${Array.isArray(work.tags) && work.tags.length
          ? `<div class="piano-tags">${work.tags.map(t => `<span class="card-tag">${escHtml(t)}</span>`).join('')}</div>`
          : ''}
      </div>`;
  }).join('');
}

/** Track which piano player is currently "playing" (by index) */
let _activePianoIdx = null;
let _globalAudio = null;

/**
 * togglePianoPlayer — visual play/pause state machine with template audio wiring.
 * Only one card plays at a time; clicking another pauses the first.
 * @param {HTMLButtonElement} btn
 * @param {number}            idx       Card index.
 * @param {string}            audioSrc  Path to mp3.
 * @param {string}            title     Track title.
 * @param {string}            composer  Composer.
 */
function togglePianoPlayer(btn, idx, audioSrc, title, composer) {
  const isPlaying = btn.classList.contains('playing');
  const labelEl = btn.querySelector('.piano-btn-label');
  const iconEl  = btn.querySelector('.piano-play-icon');

  // Sync with persistent audio player bar
  const pTitle    = document.getElementById('player-title');
  const pComposer = document.getElementById('player-composer');
  const pPlay     = document.getElementById('player-play');
  if (pTitle && title)       pTitle.textContent = title;
  if (pComposer && composer) pComposer.textContent = composer;

  // Pause any previously playing card
  if (_activePianoIdx !== null && _activePianoIdx !== idx) {
    const prevBtn = document.querySelector(`.piano-play-piece-btn.playing`);
    if (prevBtn) {
      prevBtn.classList.remove('playing');
      const prevLbl = prevBtn.querySelector('.piano-btn-label');
      if (prevLbl) prevLbl.textContent = 'Play a piece';
      const prevIcn = prevBtn.querySelector('.piano-play-icon');
      if (prevIcn) prevIcn.textContent = '▶';
      const prevProg = document.getElementById(`piano-progress-${_activePianoIdx}`);
      if (prevProg) {
        prevProg.style.animation = 'none';
        prevProg.style.width = '0%';
      }
    }
    if (_globalAudio) {
      _globalAudio.pause();
      _globalAudio = null;
    }
  }

  if (isPlaying) {
    btn.classList.remove('playing');
    if (labelEl) labelEl.textContent = 'Play a piece';
    if (iconEl)  iconEl.textContent = '▶';
    if (pPlay)   pPlay.textContent = '▶';
    const progress = document.getElementById(`piano-progress-${idx}`);
    if (progress) progress.style.animationPlayState = 'paused';
    if (_globalAudio) _globalAudio.pause();
    _activePianoIdx = null;
  } else {
    btn.classList.add('playing');
    if (labelEl) labelEl.textContent = 'Playing...';
    if (iconEl)  iconEl.textContent = '⏸';
    if (pPlay)   pPlay.textContent = '⏸';

    const progress = document.getElementById(`piano-progress-${idx}`);
    if (progress) {
      progress.style.animation = 'none';
      void progress.offsetWidth; // Force reflow
      progress.style.animation = 'trackProgress 180s linear forwards';
    }

    if (audioSrc) {
      try {
        if (_globalAudio) _globalAudio.pause();
        _globalAudio = new Audio(audioSrc);
        _globalAudio.play().catch(() => {
          console.info('[Elektra Audio] Playing template preview mode:', audioSrc);
        });
      } catch (err) {
        console.info('[Elektra Audio] Template preview active');
      }
    }

    _activePianoIdx = idx;
  }
}
window.togglePianoPlayer = togglePianoPlayer;

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
   CSS KEYFRAME INJECTION (trackProgress animation)
   We inject it here so the JS file is self-contained and the
   progress bar animation works without editing the CSS file.
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

/* ===========================================================
   xyz's Global Solutions — Header & Footer Component Script
   Usage: <div id="site-header"></div> ... <div id="site-footer"></div>
          then include this file with <script src="script.js"></script>
   =========================================================== */

// ---- 1. Theme tokens (change these 3 values to swap the whole gradient) ----
const THEME = {
  gradientStart: "#2DD4BF", // turquoise
  gradientMid: "#38BDF8", // sky blue
  gradientEnd: "#A78BFA", // soft lilac
  footerBg: "#F7F3FA", // light lavender-tinted footer background
  footerBorder: "#E9E1F2",
  light: "#ffffff",
  text: "#1f1b2e",
  textMuted: "#5c5570",
};

// ---- 2. Company info (edit once here, reused in header + footer) ----
const COMPANY = {
  name: "xyz's Global Solutions",
  tagline: "End-to-End IT Solutions",
  phone: "+91 00000 00000",
  email: "info@xyzsglobalsolutions.com",
  whatsapp: "910000000000",
  address: "Your Office Address, City, State, India",
  // Path to the logo file, RELATIVE to the HTML pages (index.html, about_us.html, etc.).
  // Copy the logo image into an "images" folder inside the project and point here.
  // Falls back to text initials automatically if this fails to load.
  logo: "images/kgs.png",
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
  nav: [
    { label: "Home", href: "index.html" },
    { label: "About Us", href: "about_us.html" },
    { label: "Services", href: "services.html" },
    { label: "Industries", href: "industries.html" },
    { label: "Why Us", href: "why-us.html" },
    { label: "Process", href: "process.html" },
    { label: "FAQ", href: "faq.html" },
    { label: "Contact", href: "contact.html" },
  ],
  servicesLinks: [
    {
      label: "Custom Software Development",
      href: "services.html#custom-software",
    },
    { label: "Mobile App Development", href: "services.html#mobile-apps" },
    { label: "Web Development", href: "services.html#web-dev" },
    { label: "Cloud & IT Solutions", href: "services.html#cloud-it" },
    { label: "UI/UX Design", href: "services.html#ui-ux" },
    { label: "Support & Maintenance", href: "services.html#support" },
  ],
  companyLinks: [
    { label: "About Us", href: "about_us.html" },
    { label: "Careers", href: "careers.html" },
    { label: "Contact", href: "contact.html" },
    { label: "Privacy Policy", href: "privacy.html" },
  ],
};

// ---- 3. Inject theme + component CSS once ----
function injectStyles() {
  if (document.getElementById("bgs-styles")) return;

  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap";
  document.head.appendChild(fontLink);

  const style = document.createElement("style");
  style.id = "bgs-styles";
  style.textContent = `
    :root {
      --grad-start: ${THEME.gradientStart};
      --grad-mid: ${THEME.gradientMid};
      --grad-end: ${THEME.gradientEnd};
      --bgs-footer-bg: ${THEME.footerBg};
      --bgs-footer-border: ${THEME.footerBorder};
      --bgs-light: ${THEME.light};
      --bgs-text: ${THEME.text};
      --bgs-text-muted: ${THEME.textMuted};
      --bgs-gradient: linear-gradient(135deg, var(--grad-start), var(--grad-mid), var(--grad-end));
    }

    /* Safety net: this script can run on pages that don't define their own
       global box-sizing reset, so the header/footer set their own. This,
       plus the smaller logo and the raised nav breakpoint below, is what
       stops the page from ever getting wider than the viewport. */
    html {
      overflow-x: hidden;
    }
    #site-header *, .bgs-footer *, .bgs-footer__floating * {
      box-sizing: border-box;
    }

    #site-header {
      height: auto;
      min-height: 0;
      margin: 0;
      padding: 0;
    }
    .bgs-header {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 16px;
      height: 72px;
      padding: 0 32px;
      margin: 0;
      width: 100%;
      background: var(--bgs-light);
      box-shadow: 0 2px 10px rgba(0,0,0,0.06);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      line-height: 1;
      font-family: 'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif;
    }
    .bgs-header__brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      flex-shrink: 0;
    }
    /* Logo fills the full header height edge-to-edge (no empty space above
       or below it). The header now has a fixed height (72px) so this 100%
       has something concrete to resolve against. Width follows automatically
       from the logo image's own aspect ratio, so it never looks stretched. */
    .bgs-header__logo {
      width: auto;
      height: 100%;
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      overflow: visible;
      background: transparent;
      border: none;
      box-shadow: none;
      margin-left: -20px;
    }
    .bgs-header__logo img {
      height: 100%;
      width: auto;
      max-width: none;
      object-fit: contain;
      display: block;
      background: transparent;
      border: none;
      box-shadow: none;
    }
    .bgs-header__name-block {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }
    .bgs-header__name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: var(--bgs-text);
    }
    .bgs-header__tagline {
      font-size: 11px;
      color: #777;
      letter-spacing: 0.3px;
    }
    .bgs-header__nav {
      display: flex;
      align-items: center;
      gap: 16px;
      list-style: none;
      margin: 0 0 0 auto;
      padding: 0;
      flex-wrap: nowrap;
      min-width: 0;
    }
    .bgs-header__nav a {
      text-decoration: none;
      color: var(--bgs-text);
      font-size: 13.5px;
      font-weight: 500;
      white-space: nowrap;
      transition: opacity 0.2s;
    }
    .bgs-header__nav a:hover { opacity: 0.6; }
    .bgs-header__actions {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-shrink: 0;
    }
    .bgs-header__phone {
      font-size: 13px;
      color: var(--bgs-text);
      text-decoration: none;
      font-weight: 500;
      white-space: nowrap;
    }
    .bgs-btn {
      background: var(--bgs-gradient);
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      white-space: nowrap;
    }
    .bgs-header__toggle {
      display: none;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--bgs-text);
      flex-shrink: 0;
    }
    .bgs-mobile-nav {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--bgs-light);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      padding: 10px 24px 20px;
      gap: 4px;
      z-index: 99;
    }
    .bgs-mobile-nav.open { display: flex; }
    .bgs-mobile-nav a {
      text-decoration: none;
      color: var(--bgs-text);
      font-size: 15px;
      font-weight: 500;
      padding: 12px 0;
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }
    .bgs-mobile-nav a:last-child { border-bottom: none; }

    /* Breakpoint raised from 900px to 1140px: at in-between widths
       (900–1140px) the 8-item nav plus logo plus actions no longer had
       enough room to fit on one line without wrapping/overflowing, which
       was the direct cause of the horizontal squeeze. Switching to the
       hamburger earlier avoids that dead zone. */
    @media (max-width: 1140px) {
      .bgs-header__nav { display: none; }
      .bgs-header__toggle { display: block; }
      .bgs-header__actions .bgs-header__phone { display: none; }
      .bgs-header__actions .bgs-btn { display: none; }
    }
    @media (min-width: 1141px) {
      .bgs-mobile-nav { display: none !important; }
    }

    .bgs-footer {
      background: var(--bgs-footer-bg);
      color: var(--bgs-text-muted);
      font-family: 'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif;
      padding: 48px 32px 20px;
      border-top: 1px solid var(--bgs-footer-border);
    }
    .bgs-footer__top {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
      gap: 32px;
      max-width: 1200px;
      margin: 0 auto 32px;
    }
    .bgs-footer__brand-block .bgs-header__logo {
      height: 70px;
      padding-left: 0;
      margin-left: 0;
      margin-bottom: 12px;
      justify-content: flex-start;
    }
    .bgs-footer__desc {
      font-size: 13px;
      color: var(--bgs-text-muted);
      margin-top: 10px;
      line-height: 1.6;
    }
    .bgs-footer h4 {
      font-family: 'Space Grotesk', sans-serif;
      color: var(--bgs-text);
      font-size: 14px;
      margin-bottom: 14px;
      letter-spacing: 0.3px;
    }
    .bgs-footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .bgs-footer li { margin-bottom: 9px; }
    .bgs-footer a {
      color: var(--bgs-text-muted);
      text-decoration: none;
      font-size: 13px;
    }
    .bgs-footer a:hover { color: var(--grad-mid); }
    .bgs-footer__social {
      display: flex;
      gap: 12px;
      margin-top: 16px;
    }
    .bgs-footer__social a {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: #fff;
      border: 1px solid var(--bgs-footer-border);
      color: var(--bgs-text);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
    .bgs-footer__bottom {
      border-top: 1px solid var(--bgs-footer-border);
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 12px;
      color: var(--bgs-text-muted);
    }
    .bgs-footer__floating {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 200;
    }
    .bgs-footer__floating a {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 20px;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    }
    .bgs-footer__floating .whatsapp { background: #25D366; }
    .bgs-footer__floating .call { background: var(--bgs-gradient); }

    @media (max-width: 800px) {
      .bgs-footer__top { grid-template-columns: 1fr 1fr; }
    }
  `;
  document.head.appendChild(style);
}

// ---- 4. Build header HTML ----

// Shared by header + footer so both always show the same logo (or the
// same initials fallback) instead of drifting out of sync.
function getLogoInitials() {
  return COMPANY.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getLogoMarkup() {
  const initials = getLogoInitials();
  if (!COMPANY.logo) return initials;
  // onerror actually performs the "falls back to initials" swap the
  // original comment promised but never wired up.
  return `<img src="${COMPANY.logo}" alt="${COMPANY.name} logo" onerror="this.onerror=null;this.parentElement.textContent='${initials}';" />`;
}

function renderHeader() {
  const logoMarkup = getLogoMarkup();

  const navItems = COMPANY.nav
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  return `
    <header class="bgs-header">
      <a href="index.html" class="bgs-header__brand">
        <div class="bgs-header__logo">${logoMarkup}</div>
      </a>
      <ul class="bgs-header__nav">${navItems}</ul>
      <div class="bgs-header__actions">
        <button class="bgs-header__toggle" id="bgs-menu-toggle" aria-label="Menu" aria-expanded="false">☰</button>
      </div>
      <nav class="bgs-mobile-nav" id="bgs-mobile-nav">
        ${COMPANY.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
    </header>
  `;
}

// ---- 5. Build footer HTML ----
function renderFooter() {
  const servicesList = COMPANY.servicesLinks
    .map((s) => `<li><a href="${s.href}">${s.label}</a></li>`)
    .join("");
  const companyList = COMPANY.companyLinks
    .map((c) => `<li><a href="${c.href}">${c.label}</a></li>`)
    .join("");

  return `
    <footer class="bgs-footer">
      <div class="bgs-footer__top">
        <div class="bgs-footer__brand-block">
         <div class="bgs-header__logo">${getLogoMarkup()}</div> 
          <p class="bgs-footer__desc">${COMPANY.tagline} — helping businesses build reliable, scalable software.</p>
          <div class="bgs-footer__social">
            <a href="${COMPANY.social.linkedin}">in</a>
            <a href="${COMPANY.social.instagram}">ig</a>
            <a href="${COMPANY.social.facebook}">fb</a>
            <a href="${COMPANY.social.twitter}">x</a>
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>${servicesList}</ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>${companyList}</ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <ul>
            <li>${COMPANY.address}</li>
            <li><a href="tel:${COMPANY.phone}">${COMPANY.phone}</a></li>
            <li><a href="mailto:${COMPANY.email}">${COMPANY.email}</a></li>
          </ul>
        </div>
      </div>
      <div class="bgs-footer__bottom">
        <span>© ${new Date().getFullYear()} ${COMPANY.name}. All Rights Reserved.</span>
        <span>Built for scalable, end-to-end IT solutions.</span>
      </div>
    </footer>

  
  `;
}

// ---- 6. Mount on page load ----
function initSiteChrome() {
  injectStyles();
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.innerHTML = renderHeader();
  if (footerMount) footerMount.innerHTML = renderFooter();

  const toggle = document.getElementById("bgs-menu-toggle");
  const mobileNav = document.getElementById("bgs-mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu when a link inside it is tapped
    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      }
    });

    // Close the menu when tapping outside of it
    document.addEventListener("click", function (e) {
      if (
        mobileNav.classList.contains("open") &&
        !mobileNav.contains(e.target) &&
        e.target !== toggle
      ) {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", initSiteChrome);

/* ============================================================
   DISABLE COPY / RIGHT-CLICK / DEVTOOLS SHORTCUTS
============================================================ */
(function lockDownSite() {
  // Disable right-click context menu
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // Disable text selection
  // document.addEventListener("selectstart", (e) => e.preventDefault());

  // Disable copy, cut, paste
  document.addEventListener("copy", (e) => e.preventDefault());
  document.addEventListener("cut", (e) => e.preventDefault());
  document.addEventListener("paste", (e) => e.preventDefault());

  // Disable dragging images/links
  document.addEventListener("dragstart", (e) => e.preventDefault());

  // Block common devtools / view-source / save shortcuts
  document.addEventListener("keydown", (e) => {
    const k = e.key.toUpperCase();
    // if (
    //   e.key === "F12" ||
    //   (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(k)) || // devtools panels
    //   (e.ctrlKey && ["U", "S", "P"].includes(k)) || // view-source, save, print
    //   (e.metaKey && e.altKey && ["I", "J", "C"].includes(k)) // Mac devtools
    // ) {
    //   e.preventDefault();
    // }
  });
})();

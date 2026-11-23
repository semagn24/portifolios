/**
 * SEMANGN LEGESE — PORTFOLIO CLIENT LOGIC
 * High-performance, accessible, vanilla JavaScript micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Reading Progress Bar
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
      progressBar.style.width = `${scrolled}%`;
    }
  }, { passive: true });

  // 2. Dark / Light Theme System with persistence
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'light') {
      themeToggle.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      themeToggle.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    }
  }

  // Initial Theme determination
  const initialTheme = savedTheme || (prefersDark.matches ? 'dark' : 'dark'); // Default to dark for high craft
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isCurrentlyLight = document.body.classList.contains('light-mode');
      const newTheme = isCurrentlyLight ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Scroll Reveal Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll('.fade-in-section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 5. Active Nav Link on Scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // 6. Interactive Projects Filter Bar
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 7. Interactive Live Preview Modal
  const modal = document.getElementById('preview-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalExternalBtn = document.getElementById('modal-external-link');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const previewBtns = document.querySelectorAll('.btn-preview');

  function openPreview(url, title) {
    if (!modal || !modalIframe) return;
    modalTitle.textContent = title || 'Live Project Preview';
    modalExternalBtn.href = url;
    modalIframe.src = url;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePreview() {
    if (!modal || !modalIframe) return;
    modal.classList.remove('open');
    modalIframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  previewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const demoUrl = btn.getAttribute('data-demo');
      const title = btn.getAttribute('data-title');
      openPreview(demoUrl, title);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closePreview);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePreview();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closePreview();
      }
    });
  }

  // 8. One-Click Copy Email Pill
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyTooltip = document.getElementById('copy-tooltip');

  if (copyEmailBtn && copyTooltip) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'semagnlegese@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copyTooltip.textContent = 'Copied to clipboard!';
        copyTooltip.classList.add('show');
        setTimeout(() => {
          copyTooltip.classList.remove('show');
        }, 2200);
      } catch (err) {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        copyTooltip.textContent = 'Copied to clipboard!';
        copyTooltip.classList.add('show');
        setTimeout(() => {
          copyTooltip.classList.remove('show');
        }, 2200);
      }
    });
  }

  // 9. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!name || !email || !message) return;

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <svg class="btn-icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Launching Email...
      `;
      submitBtn.disabled = true;

      // Construct mailto link
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Hello Semagn,\n\nYou have received a message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--\nSent from Portfolio Contact Form`
      );
      const mailtoUrl = `mailto:semagnlegese@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        window.location.href = mailtoUrl;

        if (formStatus) {
          formStatus.textContent = 'Thank you! Your email client has been opened to finalize and send your message.';
          formStatus.classList.add('success');
        }

        contactForm.reset();
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }, 700);
    });
  }

  // 10. Dynamic Year & Back to Top
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

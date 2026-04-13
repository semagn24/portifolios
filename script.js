// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle;

// Check local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        icon.textContent = '🌙';
    }
});

// Scroll Animations
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Dynamic Year
document.getElementById('year').textContent = new Date().getFullYear();

// Working Contact Form Handling (Using mailto for direct email)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create a pre-filled email link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`You have received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:semagnlegese@gmail.com?subject=${subject}&body=${body}`;

    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Opening Email Client...';
    btn.disabled = true;

    // Pop open the default email client after a short animation
    setTimeout(() => {
        window.location.href = mailtoUrl;
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;

        // Optional: Suggest switching to Formspree if you prefer a backend without email app popups
        // To do that, change the form action in index.html to: <form action="https://formspree.io/f/YOUR_ID" method="POST">
    }, 1000);
});

// Highlight Active Nav Link
const navLinks = document.querySelectorAll('nav a');

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Only handle internal links (starting with #)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add parallax effect to hero section image (subtle)
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Add animation to skill tags on load
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skills-list li');
    skillItems.forEach((skill, index) => {
        skill.style.animation = `fadeInUp 0.5s ease-out ${index * 0.05}s backwards`;
    });
});

// Mobile Hero Menu Toggle
const heroMenuToggle = document.getElementById('hero-menu-toggle');
const heroButtonsContainer = document.getElementById('hero-buttons-container');

if (heroMenuToggle) {
    heroMenuToggle.addEventListener('click', () => {
        heroButtonsContainer.classList.toggle('show');
    });
}

// Mobile Top Nav Toggle
const navHamburger = document.getElementById('nav-hamburger');
const navLinksContainer = document.getElementById('nav-links');

if (navHamburger) {
    navHamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });
}

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

// Simple Form Handling (Simulation)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate sending
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
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
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
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

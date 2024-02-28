document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.page');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinksContainer = document.querySelector('nav');

    particlesJS('particles-js', {
        particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            shape: { type: 'polygon' },
            opacity: { value: 0.7, anim: { enable: true, speed: 1, opacity_min: 0 } },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' },
            line_linked: { enable: false, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        },
        interactivity: {
            events: { onhover: { enable: true, mode: 'repulse' } },
        },
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                const targetSection = document.getElementById(targetId);
                targetSection.classList.add('active');
            }
        });
    });

    mobileMenuIcon.addEventListener('click', function () {
        navLinksContainer.classList.toggle('active');
    });
});
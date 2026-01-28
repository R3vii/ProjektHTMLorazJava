document.addEventListener('DOMContentLoaded', () => {

// Menu mobilne
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

// Tryb ciemny
    const themeToggle = document.querySelector('.theme-toggle');
    const root = document.documentElement;

    // Sprawdzenie preferencji systemowej
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.setAttribute('data-theme', 'dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', newTheme);
        });
    }

});

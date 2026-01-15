/**
 * IDE Navbar - Active Tab Handler
 * Highlights the active tab based on scroll position
 */
(function () {
    'use strict';

    const navbar = document.getElementById('navbar');
    const navTabs = document.querySelectorAll('.nav-tab');
    const sections = ['about', 'stack', 'projects', 'contact'];

    // Offset for navbar height
    const navbarHeight = 60;

    /**
     * Update active tab based on scroll position
     */
    function updateActiveTab() {
        const scrollPosition = window.scrollY + navbarHeight + 100;

        let currentSection = '';

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = sectionId;
                }
            }
        });

        // Update active class
        navTabs.forEach(tab => {
            const tabSection = tab.dataset.section;
            if (tabSection === currentSection) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }

    /**
     * Smooth scroll with offset for navbar
     */
    function handleTabClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - navbarHeight + 10;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }

    /**
     * Initialize navbar functionality
     */
    function init() {
        // Add click handlers to tabs
        navTabs.forEach(tab => {
            tab.addEventListener('click', handleTabClick);
        });

        // Update active tab on scroll
        window.addEventListener('scroll', updateActiveTab, { passive: true });

        // Initial check
        updateActiveTab();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', function() {
    // Create intersection observer for section animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate cards with stagger effect
                const cards = entry.target.querySelectorAll('.card-animate');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('#about, #skill, #service, #project, #team, #contact');
    sections.forEach(section => {
        section.classList.add('section-animate');
        observer.observe(section);
    });

    // Add card-animate class to service items, portfolio items, and team items
    const serviceItems = document.querySelectorAll('.service-item');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const teamItems = document.querySelectorAll('.team-item');
    
    [...serviceItems, ...portfolioItems, ...teamItems].forEach((item, index) => {
        item.classList.add('card-animate');
        if (index < 6) {
            item.classList.add(`delay-${index + 1}`);
        }
    });

    // Add floating animation to buttons and important elements
    const floatingElements = document.querySelectorAll('.btn-primary, .btn-play, .social-icon');
    floatingElements.forEach(element => {
        element.classList.add('float-animation');
    });

    // Add pulse animation to achievement pills
    const achievementPills = document.querySelectorAll('.nav-pills .nav-link');
    achievementPills.forEach(pill => {
        pill.classList.add('pulse-animation');
    });

    // Smooth scroll enhancement for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                const navbarToggler = document.querySelector('.navbar-toggler');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }

                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Handle mobile menu overlay click to close
    document.addEventListener('click', function(e) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbar = document.querySelector('.navbar');

        if (navbarCollapse.classList.contains('show') &&
            !navbar.contains(e.target)) {
            navbarToggler.click();
        }
    });

    // Add parallax effect to background patterns
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('#about::before, #skill::before, #project::before, #team::before, #contact::before');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add hover effects to cards
    const allCards = document.querySelectorAll('.service-item, .portfolio-item, .team-item');
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
});

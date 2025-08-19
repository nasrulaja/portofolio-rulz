// JavaScript untuk interactive elements
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle menu mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

// Create particles for background effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = 30;
    
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 5 and 30 pixels
        const size = Math.random() * 25 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration between 10 and 30 seconds
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `-${Math.random() * 20}s`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Add animation to elements on scroll
    const animatedElements = document.querySelectorAll('.skill-card, .single-project');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
    
    // Sembunyikan placeholder jika gambar berhasil dimuat
    const aboutImg = document.querySelector('.about-img img');
    const projectImg = document.querySelector('.project-img img');
    
    if (aboutImg && aboutImg.complete && aboutImg.naturalHeight !== 0) {
        document.getElementById('about-placeholder').style.display = 'none';
    }
    
    if (projectImg && projectImg.complete && projectImg.naturalHeight !== 0) {
        document.getElementById('project-placeholder').style.display = 'none';
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah dikirim. Saya akan membalasnya segera.');
            contactForm.reset();
        });
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('nav-links').classList.remove('active');
    });
});
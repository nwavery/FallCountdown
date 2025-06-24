// Fall 2025 Countdown JavaScript

// Target date: September 1st, 2025
const targetDate = new Date('2025-09-01T00:00:00').getTime();

// DOM elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const particlesContainer = document.getElementById('particles');

// Countdown function
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the display with zero padding
        daysElement.textContent = String(days).padStart(3, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        // Add pulse animation to seconds for visual feedback
        secondsElement.style.transform = 'scale(1.1)';
        setTimeout(() => {
            secondsElement.style.transform = 'scale(1)';
        }, 100);
    } else {
        // Countdown has reached zero
        daysElement.textContent = '000';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        
        // Update the subtitle to indicate fall has arrived
        document.querySelector('.subtitle').textContent = 'Fall Has Arrived! 🍂';
        document.querySelector('.target-date p').textContent = 'Welcome to Autumn 2025!';
    }
}

// Particle system for floating autumn elements
function createParticles() {
    // Don't create particles on mobile devices for performance
    if (window.innerWidth <= 768) return;

    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove and recreate particle after animation completes for continuous effect
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 12000 + Math.random() * 6000);
    }
}

// Enhanced particle system with different shapes
function createAdvancedParticles() {
    if (window.innerWidth <= 768) return;

    const shapes = ['🍂', '🍁', '⭐', '✨'];
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
        particle.style.background = 'none';
        particle.style.borderRadius = '0';
        
        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation properties
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        particlesContainer.appendChild(particle);
        
        // Clean up after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 15000 + Math.random() * 5000);
    }
}

// Responsive handling
function handleResize() {
    // Clear existing particles on resize
    particlesContainer.innerHTML = '';
    
    // Recreate particles if screen is large enough
    if (window.innerWidth > 768) {
        setTimeout(() => {
            createParticles();
            createAdvancedParticles();
        }, 100);
    }
}

// Performance optimization for animations
function optimizePerformance() {
    // Reduce animations if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.style.setProperty('--animation-duration', '0.01ms');
        return;
    }
    
    // Throttle particle creation on lower-end devices
    const isLowEndDevice = navigator.hardwareConcurrency <= 4 || 
                          (navigator.deviceMemory && navigator.deviceMemory <= 4);
    
    if (isLowEndDevice) {
        // Reduce particle count and animation frequency
        const intervals = [8000, 12000]; // Longer intervals between particle creation
        return intervals;
    }
    
    return [3000, 6000]; // Normal intervals
}

// Initialize the application
function init() {
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Get performance-optimized intervals
    const intervals = optimizePerformance();
    
    // Create initial particles if screen is large enough
    if (window.innerWidth > 768) {
        createParticles();
        createAdvancedParticles();
        
        // Set up particle recreation intervals
        setInterval(createParticles, intervals[0]);
        setInterval(createAdvancedParticles, intervals[1]);
    }
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Add loading class removal for smoother initial animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// Enhanced countdown with special date handling
function getTimeUntilFall() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let fallDate = new Date(currentYear, 8, 1); // September 1st of current year
    
    // If we've passed this year's fall date, target next year
    if (now > fallDate) {
        fallDate = new Date(currentYear + 1, 8, 1);
    }
    
    return fallDate.getTime();
}

// Error handling for date calculations
function safeUpdateCountdown() {
    try {
        updateCountdown();
    } catch (error) {
        console.error('Error updating countdown:', error);
        // Fallback display
        daysElement.textContent = '---';
        hoursElement.textContent = '--';
        minutesElement.textContent = '--';
        secondsElement.textContent = '--';
    }
}

// Add accessibility features
function addAccessibilityFeatures() {
    // Add aria-labels for screen readers
    const timeUnits = document.querySelectorAll('.time-unit');
    timeUnits.forEach((unit, index) => {
        const labels = ['days', 'hours', 'minutes', 'seconds'];
        unit.setAttribute('aria-label', `${labels[index]} remaining`);
    });
    
    // Add live region for countdown updates
    const countdown = document.getElementById('countdown');
    countdown.setAttribute('aria-live', 'polite');
    countdown.setAttribute('aria-atomic', 'true');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        addAccessibilityFeatures();
    });
} else {
    init();
    addAccessibilityFeatures();
}

// Service worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Only register if we have a service worker file
        // This is commented out since we're not creating a service worker in this simple version
        // navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed'));
    });
} 
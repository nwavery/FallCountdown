// Multi-Holiday Countdown System
// Expanded from original Fall 2025 Countdown

// Holiday Configuration System
const HOLIDAYS = {
    // Major Holidays (9)
    christmas: {
        name: 'Christmas',
        emoji: '🎄',
        subtitle: 'Until Christmas Magic',
        getDate: (year) => new Date(year, 11, 25), // Dec 25
        theme: {
            primaryColor: '#C41E3A',
            secondaryColor: '#228B22', 
            accentColor: '#FFD700',
            bgGradient: 'linear-gradient(135deg, #0F1C0F 0%, #1B2F1B 50%, #C41E3A 100%)',
            font: 'serif'
        },
        particles: ['❄️', '⭐', '🎁', '✨'],
        decorations: ['🎄', '🎅', '⛄', '🔔', '🎁']
    },
    newyear: {
        name: 'New Year\'s Day',
        emoji: '🎆',
        subtitle: 'Until the New Year',
        getDate: (year) => new Date(year, 0, 1), // Jan 1
        theme: {
            primaryColor: '#FFD700',
            secondaryColor: '#FF6B35',
            accentColor: '#9932CC',
            bgGradient: 'linear-gradient(135deg, #000000 0%, #1A1A2E 50%, #16213E 100%)',
            font: 'serif'
        },
        particles: ['🎆', '✨', '🎊', '🥂'],
        decorations: ['🎉', '🎊', '🥂', '🎆', '✨']
    },
    valentines: {
        name: 'Valentine\'s Day',
        emoji: '💕',
        subtitle: 'Until Love is in the Air',
        getDate: (year) => new Date(year, 1, 14), // Feb 14
        theme: {
            primaryColor: '#FF1493',
            secondaryColor: '#FF69B4',
            accentColor: '#FFB6C1',
            bgGradient: 'linear-gradient(135deg, #2C1810 0%, #4A1A2C 50%, #8B0020 100%)',
            font: 'serif'
        },
        particles: ['💕', '💖', '🌹', '💝'],
        decorations: ['💕', '🌹', '💖', '💝', '💘']
    },
    easter: {
        name: 'Easter',
        emoji: '🐰',
        subtitle: 'Until Easter Joy',
        getDate: calculateEaster,
        theme: {
            primaryColor: '#FFB347',
            secondaryColor: '#98FB98',
            accentColor: '#DDA0DD',
            bgGradient: 'linear-gradient(135deg, #F0F8F0 0%, #E8F5E8 50%, #FFB347 100%)',
            font: 'serif'
        },
        particles: ['🐰', '🥚', '🌸', '🌷'],
        decorations: ['🐰', '🥚', '🌸', '🌷', '🐣']
    },
    mothersday: {
        name: 'Mother\'s Day',
        emoji: '🌸',
        subtitle: 'Until We Honor Mom',
        getDate: (year) => getNthWeekday(year, 4, 0, 2), // 2nd Sunday in May
        theme: {
            primaryColor: '#FF69B4',
            secondaryColor: '#98FB98',
            accentColor: '#FFB6C1',
            bgGradient: 'linear-gradient(135deg, #FFF0F5 0%, #F8F8FF 50%, #E6E6FA 100%)',
            font: 'serif'
        },
        particles: ['🌸', '🌺', '💐', '🌷'],
        decorations: ['🌸', '🌺', '💐', '🌷', '💝']
    },
    fathersday: {
        name: 'Father\'s Day',
        emoji: '👔',
        subtitle: 'Until We Honor Dad',
        getDate: (year) => getNthWeekday(year, 5, 0, 3), // 3rd Sunday in June
        theme: {
            primaryColor: '#4169E1',
            secondaryColor: '#2F4F4F',
            accentColor: '#FFD700',
            bgGradient: 'linear-gradient(135deg, #1C1C1C 0%, #2F4F4F 50%, #4169E1 100%)',
            font: 'serif'
        },
        particles: ['👔', '⚡', '🏆', '⭐'],
        decorations: ['👔', '🏆', '⚡', '🎯', '💙']
    },
    independence: {
        name: 'Independence Day',
        emoji: '🎆',
        subtitle: 'Until We Blow Stuff Up... For America',
        getDate: (year) => new Date(year, 6, 4), // July 4
        theme: {
            primaryColor: '#FFFFFF',
            secondaryColor: '#0000FF',
            accentColor: '#FFD700',
            bgGradient: 'linear-gradient(135deg, #000080 0%, #FF0000 50%, #FFFFFF 100%)',
            font: 'serif'
        },
        particles: ['🎆', '⭐', '🎊', '🇺🇸'],
        decorations: ['🇺🇸', '🎆', '🎇', '⭐', '🎊']
    },
    halloween: {
        name: 'Halloween',
        emoji: '🎃',
        subtitle: 'Until Halloween Magic',
        dedication: '(For Tara)', // Keep original dedication
        getDate: (year) => new Date(year, 9, 31), // Oct 31
        theme: {
            primaryColor: '#FF6B35',
            secondaryColor: '#F7931E',
            accentColor: '#FFD700',
            bgGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2F2F2F 50%, #4B0082 100%)',
            font: 'Creepster, cursive'
        },
        particles: ['🎃', '🦇', '👻', '🍂'],
        decorations: ['🎃', '🦇', '👻', '🕷️', '🍂']
    },
    thanksgiving: {
        name: 'Thanksgiving',
        emoji: '🦃',
        subtitle: 'Until We Give Thanks',
        getDate: (year) => getNthWeekday(year, 10, 4, 4), // 4th Thursday in November
        theme: {
            primaryColor: '#CD853F',
            secondaryColor: '#D2691E',
            accentColor: '#FF8C00',
            bgGradient: 'linear-gradient(135deg, #2F1B14 0%, #8B4513 50%, #CD853F 100%)',
            font: 'serif'
        },
        particles: ['🦃', '🍂', '🌽', '🥧'],
        decorations: ['🦃', '🍂', '🌽', '🥧', '🎯']
    },

    // Seasons (4)
    spring: {
        name: 'Spring Equinox',
        emoji: '🌱',
        subtitle: 'Until Spring Awakens',
        getDate: (year) => new Date(year, 2, 20), // Mar 20 (approximate)
        theme: {
            primaryColor: '#32CD32',
            secondaryColor: '#98FB98',
            accentColor: '#FFB6C1',
            bgGradient: 'linear-gradient(135deg, #F0FFF0 0%, #98FB98 50%, #32CD32 100%)',
            font: 'serif'
        },
        particles: ['🌱', '🌸', '🌿', '🦋'],
        decorations: ['🌱', '🌸', '🌿', '🦋', '🌷']
    },
    summer: {
        name: 'Summer Solstice',
        emoji: '☀️',
        subtitle: 'Until Summer\'s Peak',
        getDate: (year) => new Date(year, 5, 21), // Jun 21 (approximate)
        theme: {
            primaryColor: '#FFFFFF',
            secondaryColor: '#FF8C00',
            accentColor: '#FF4500',
            bgGradient: 'linear-gradient(135deg, #87CEEB 0%, #FFD700 50%, #FF8C00 100%)',
            font: 'serif'
        },
        particles: ['☀️', '🌻', '🏖️', '🦋'],
        decorations: ['☀️', '🌻', '🏖️', '🦋', '🌺']
    },
    fall: {
        name: 'Fall Equinox',
        emoji: '🍂',
        subtitle: 'Countdown to Autumn Magic',
        dedication: '(For Tara)', // Keep original dedication
        getDate: (year) => new Date(year, 8, 1), // Sep 1st (keeping original date)
        theme: {
            primaryColor: '#FF6B35',
            secondaryColor: '#F7931E',
            accentColor: '#FFD700',
            bgGradient: 'linear-gradient(135deg, #1a1a1a 0%, #2F2F2F 50%, #4B0082 100%)',
            font: 'Creepster, cursive'
        },
        particles: ['🍂', '🍁', '⭐', '✨'],
        decorations: ['🎃', '🍂', '🦇', '🍁', '⭐']
    },
    winter: {
        name: 'Winter Solstice',
        emoji: '❄️',
        subtitle: 'Until Winter\'s Depth',
        getDate: (year) => new Date(year, 11, 21), // Dec 21 (approximate)
        theme: {
            primaryColor: '#FFFFFF',
            secondaryColor: '#87CEEB',
            accentColor: '#B0E0E6',
            bgGradient: 'linear-gradient(135deg, #000080 0%, #4169E1 50%, #87CEEB 100%)',
            font: 'serif'
        },
        particles: ['❄️', '⭐', '🌨️', '✨'],
        decorations: ['❄️', '⭐', '🌨️', '✨', '🔵']
    }
};

// Date calculation utilities for variable holidays
function calculateEaster(year) {
    // Easter calculation using the Western algorithm
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
}

function getNthWeekday(year, month, weekday, n) {
    // Get the nth occurrence of a weekday in a month
    // weekday: 0=Sunday, 1=Monday, etc.
    // n: 1=first, 2=second, etc.
    const firstDay = new Date(year, month, 1);
    const firstWeekday = firstDay.getDay();
    const offset = (weekday - firstWeekday + 7) % 7;
    const date = 1 + offset + (n - 1) * 7;
    return new Date(year, month, date);
}

// Current state management
let currentHoliday = null;
let countdownInterval = null;
let particleIntervals = [];

// DOM elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const particlesContainer = document.getElementById('particles');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const titleElement = document.querySelector('.title');
const subtitleElement = document.querySelector('.subtitle');
const dedicationElement = document.querySelector('.dedication');
const decorationsContainer = document.querySelector('.decorations');

// Smart holiday detection - find next upcoming holiday
function getNextHoliday() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextHoliday = null;
    let minTimeDiff = Infinity;

    // Check all holidays for current and next year
    for (const [key, holiday] of Object.entries(HOLIDAYS)) {
        for (let year = currentYear; year <= currentYear + 1; year++) {
            const holidayDate = holiday.getDate(year);
            const timeDiff = holidayDate.getTime() - now.getTime();
            
            if (timeDiff > 0 && timeDiff < minTimeDiff) {
                minTimeDiff = timeDiff;
                nextHoliday = { 
                    key, 
                    ...holiday, 
                    date: holidayDate,
                    year: year 
                };
            }
        }
    }

    return nextHoliday;
}

// Get holiday from URL hash or determine next upcoming
function determineHoliday() {
    const hash = window.location.hash.slice(1);
    if (hash && HOLIDAYS[hash]) {
        const holiday = HOLIDAYS[hash];
        const now = new Date();
        const currentYear = now.getFullYear();
        
        // Get next occurrence of this specific holiday
        let holidayDate = holiday.getDate(currentYear);
        if (holidayDate.getTime() <= now.getTime()) {
            holidayDate = holiday.getDate(currentYear + 1);
        }
        
        return {
            key: hash,
            ...holiday,
            date: holidayDate,
            year: holidayDate.getFullYear()
        };
    }
    
    return getNextHoliday();
}

// Apply theme to page
function applyTheme(holiday) {
    const root = document.documentElement;
    const theme = holiday.theme;
    
    // Update CSS custom properties
    root.style.setProperty('--primary-color', theme.primaryColor);
    root.style.setProperty('--secondary-color', theme.secondaryColor);
    root.style.setProperty('--accent-color', theme.accentColor);
    root.style.setProperty('--bg-gradient', theme.bgGradient);
    
    // Update page content
    document.title = `${holiday.name} Countdown`;
    titleElement.textContent = holiday.name;
    titleElement.style.fontFamily = theme.font;
    subtitleElement.textContent = holiday.subtitle;
    
    // Handle dedication (only for Fall and Halloween)
    if (holiday.dedication) {
        dedicationElement.textContent = holiday.dedication;
        dedicationElement.style.display = 'block';
    } else {
        dedicationElement.style.display = 'none';
    }
    
    // Update favicon
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${holiday.emoji}</text></svg>`;
    
    // Update decorations
    updateDecorations(holiday);
}

// Update decorative elements
function updateDecorations(holiday) {
    decorationsContainer.innerHTML = '';
    
    holiday.decorations.forEach((emoji, index) => {
        const decoration = document.createElement('div');
        decoration.className = `decoration decoration-${index + 1}`;
        decoration.textContent = emoji;
        decoration.style.cssText = `
            position: absolute;
            font-size: clamp(1.5rem, 4vw, 3rem);
            animation: float 3s ease-in-out infinite;
            animation-delay: ${index * 0.5}s;
            z-index: 0;
        `;
        
        // Position decorations around the screen
        const positions = [
            { top: '10%', left: '10%' },
            { top: '20%', right: '15%' },
            { bottom: '15%', left: '20%' },
            { bottom: '10%', right: '10%' },
            { top: '60%', left: '5%' }
        ];
        
        if (positions[index]) {
            Object.assign(decoration.style, positions[index]);
        }
        
        decorationsContainer.appendChild(decoration);
    });
}

// Countdown function
function updateCountdown() {
    if (!currentHoliday) return;
    
    const now = new Date().getTime();
    const timeLeft = currentHoliday.date.getTime() - now;

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
            if (secondsElement) secondsElement.style.transform = 'scale(1)';
        }, 100);
    } else {
        // Countdown has reached zero - find next holiday
        daysElement.textContent = '000';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        
        subtitleElement.textContent = `${currentHoliday.name} Has Arrived! ${currentHoliday.emoji}`;
        
        // Auto-switch to next holiday after 5 seconds
        setTimeout(() => {
            switchToNextHoliday();
        }, 5000);
    }
}

// Switch to next upcoming holiday
function switchToNextHoliday() {
    const nextHoliday = getNextHoliday();
    if (nextHoliday) {
        window.location.hash = nextHoliday.key;
        location.reload(); // Simple reload to reset everything
    }
}

// Particle system adapted for different themes
function createParticles() {
    if (!currentHoliday || window.innerWidth <= 768) return;

    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Use theme-specific particles
        const shapes = currentHoliday.particles;
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

// Create holiday dropdown navigation
function createHolidayDropdown() {
    const dropdown = document.createElement('div');
    dropdown.className = 'holiday-dropdown';
    dropdown.innerHTML = `
        <button class="dropdown-toggle" aria-label="Switch Holiday">
            ${currentHoliday.emoji} Switch Holiday
        </button>
        <div class="dropdown-menu">
            ${Object.entries(HOLIDAYS).map(([key, holiday]) => `
                <a href="#${key}" class="dropdown-item ${key === currentHoliday.key ? 'active' : ''}"
                   data-holiday="${key}">
                    ${holiday.emoji} ${holiday.name}
                </a>
            `).join('')}
        </div>
    `;
    
    // Style the dropdown to match current theme
    dropdown.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
    `;
    
    document.body.appendChild(dropdown);
    
    // Add dropdown functionality
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
    
    // Handle holiday selection
    dropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('dropdown-item')) {
            e.preventDefault();
            const holidayKey = e.target.dataset.holiday;
            window.location.hash = holidayKey;
            location.reload();
        }
    });
}

// Initialize particle system with intervals
function initParticleSystem() {
    // Clear existing intervals
    particleIntervals.forEach(interval => clearInterval(interval));
    particleIntervals = [];
    
    if (window.innerWidth > 768) {
        createParticles();
        
        const intervals = optimizePerformance();
        particleIntervals.push(
            setInterval(createParticles, intervals[0])
        );
    }
}

// Performance optimization for animations
function optimizePerformance() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.style.setProperty('--animation-duration', '0.01ms');
        return [15000, 20000]; // Very slow intervals
    }
    
    const isLowEndDevice = navigator.hardwareConcurrency <= 4 || 
                          (navigator.deviceMemory && navigator.deviceMemory <= 4);
    
    return isLowEndDevice ? [8000, 12000] : [4000, 7000];
}

// Responsive handling
function handleResize() {
    particlesContainer.innerHTML = '';
    initParticleSystem();
}

// Fullscreen functionality
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen().catch(err => {
            console.log(`Error attempting to exit fullscreen: ${err.message}`);
        });
    }
}

function updateFullscreenButton() {
    const iconExpand = fullscreenBtn.querySelector('.icon-expand');
    if (document.fullscreenElement) {
        iconExpand.style.transform = 'rotate(180deg)';
        fullscreenBtn.title = 'Exit Fullscreen';
    } else {
        iconExpand.style.transform = 'rotate(0deg)';
        fullscreenBtn.title = 'Enter Fullscreen';
    }
}

// Add accessibility features
function addAccessibilityFeatures() {
    const timeUnits = document.querySelectorAll('.time-unit');
    timeUnits.forEach((unit, index) => {
        const labels = ['days', 'hours', 'minutes', 'seconds'];
        unit.setAttribute('aria-label', `${labels[index]} remaining until ${currentHoliday.name}`);
    });
    
    const countdown = document.getElementById('countdown');
    countdown.setAttribute('aria-live', 'polite');
    countdown.setAttribute('aria-atomic', 'true');
    
    fullscreenBtn.setAttribute('aria-label', 'Toggle fullscreen mode');
}

// Initialize the application
function init() {
    // Determine which holiday to display
    currentHoliday = determineHoliday();
    
    if (!currentHoliday) {
        console.error('No upcoming holidays found');
        return;
    }
    
    console.log(`Loading ${currentHoliday.name} countdown for ${currentHoliday.date.toDateString()}`);
    
    // Apply theme
    applyTheme(currentHoliday);
    
    // Create dropdown navigation
    createHolidayDropdown();
    
    // Start countdown
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    
    // Initialize particle system
    initParticleSystem();
    
    // Event listeners
    window.addEventListener('resize', handleResize);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    document.addEventListener('fullscreenchange', updateFullscreenButton);
    
    // Handle hash changes for direct linking
    window.addEventListener('hashchange', () => {
        location.reload();
    });
    
    updateFullscreenButton();
    addAccessibilityFeatures();
    
    // Add loading class removal for smoother initial animation
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// Error handling wrapper
function safeInit() {
    try {
        init();
    } catch (error) {
        console.error('Error initializing application:', error);
        // Fallback to basic countdown
        document.querySelector('.title').textContent = 'Holiday Countdown';
        document.querySelector('.subtitle').textContent = 'Something went wrong, but we\'re still counting!';
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', safeInit);
} else {
    safeInit();
}

// Service worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Only register if we have a service worker file
        // This is commented out since we're not creating a service worker in this simple version
        // navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed'));
    });
} 
# 🍂 Fall 2025 Countdown

A visually stunning, Halloween-themed countdown website targeting September 1st, 2025. Features a dark cozy aesthetic with animated elements perfect for hosting on GitHub Pages.

## ✨ Features

- **Real-time Countdown**: Live countdown to Fall 2025 (September 1st) with days, hours, minutes, and seconds
- **Dark Halloween Theme**: Cozy autumn aesthetic with deep oranges, purples, and golden accents
- **Animated Effects**: 
  - Floating autumn particles (leaves, stars, sparkles)
  - Flying bat animations
  - Glowing text effects
  - Smooth hover interactions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: 
  - Reduced animations on mobile for better battery life
  - Performance detection for lower-end devices
  - Respects user's motion preferences
- **Accessible**: Screen reader friendly with proper ARIA labels and semantic HTML

## 🎨 Design Elements

- **Typography**: Creepster font for headers, Crimson Text for body
- **Color Palette**: 
  - Primary Orange: `#FF6B35`
  - Secondary Orange: `#F7931E` 
  - Dark Red: `#8B0000`
  - Golden Yellow: `#FFD700`
  - Deep Purple: `#4B0082`
- **Decorative Elements**: Floating pumpkins, flying bats, particle effects

## 📁 Project Structure

```
FallCountdown/
├── index.html          # Main HTML structure
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── script.js      # Countdown logic and effects
└── README.md          # This file
```

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/FallCountdown.git
   cd FallCountdown
   ```

2. **Open locally**:
   - Simply open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000`

3. **Deploy to GitHub Pages**:
   - Push to your GitHub repository
   - Enable GitHub Pages in repository settings
   - Select source branch (usually `main`)

## 🌐 GitHub Pages Deployment

This project is ready for GitHub Pages deployment:

1. Go to your repository settings
2. Scroll to "Pages" section
3. Select source: "Deploy from a branch"
4. Choose branch: `main` and folder: `/ (root)`
5. Your site will be available at: `https://yourusername.github.io/FallCountdown`

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: CSS Grid, Flexbox, CSS Custom Properties, ES6+

## ⚡ Performance Features

- **Mobile Optimized**: Particle effects disabled on smaller screens
- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Device Detection**: Adjusts animation frequency based on device capabilities
- **Lightweight**: No external dependencies, vanilla JavaScript only

## 🎯 Customization

### Change Target Date
Edit the target date in `js/script.js`:
```javascript
const targetDate = new Date('2025-09-01T00:00:00').getTime();
```

### Modify Colors
Update CSS custom properties in `css/style.css`:
```css
:root {
    --primary-orange: #FF6B35;
    --secondary-orange: #F7931E;
    /* ... other colors */
}
```

### Adjust Animations
Modify animation intervals in `js/script.js`:
```javascript
return [3000, 6000]; // [particles, advanced particles] in milliseconds
```

## 🐛 Troubleshooting

- **Countdown not updating**: Check browser console for JavaScript errors
- **Animations not smooth**: Try refreshing or check device performance
- **Mobile layout issues**: Ensure viewport meta tag is present
- **Fonts not loading**: Check internet connection for Google Fonts

## 📜 License

This project is open source. Feel free to use, modify, and distribute.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

---

Built with ❤️ for the autumn season 🍂🎃

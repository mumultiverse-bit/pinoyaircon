# Kabayan Aircon - Professional Aircon Servicing Website

A modern, professional one-stop handyman website specialized in aircon servicing, featuring premium design aesthetics with glassmorphism effects, smooth animations, and mobile-first responsive design.

## Features

- 🎨 **Premium Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast & Lightweight**: Built with vanilla HTML, CSS, and JavaScript
- 🎯 **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- 📝 **Contact Form**: Interactive form with validation and notifications
- 🌟 **Smooth Animations**: Intersection Observer API for scroll-triggered animations

## Quick Start

### Using Docker Compose (Recommended)

1. Make sure Docker and Docker Compose are installed
2. Run the website:

```bash
docker-compose up -d
```

3. Access the website at `http://localhost:8080`

4. To stop the website:

```bash
docker-compose down
```

### Using Docker

1. Build the image:

```bash
docker build -t kabayan-aircon .
```

2. Run the container:

```bash
docker run -d -p 8080:80 --name kabayan-aircon kabayan-aircon
```

3. Access the website at `http://localhost:8080`

### Local Development (Python)

1. Navigate to the project directory
2. Start a local server:

```bash
python3 -m http.server 8080
```

3. Open `http://localhost:8080` in your browser

## Project Structure

```
pinoyaircon/
├── index.html          # Main HTML file
├── style.css           # Comprehensive CSS with design system
├── script.js           # JavaScript for interactivity
├── images/             # Image assets
│   ├── hero-aircon.png
│   └── service-icon.png
├── docker-compose.yml  # Docker Compose configuration
├── Dockerfile          # Docker image definition
└── README.md           # This file
```

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Services**: Grid layout showcasing 6 core services
3. **Why Choose Us**: Feature boxes highlighting key differentiators
4. **Contact**: Interactive form with validation and contact information
5. **Footer**: Business information and quick links

## Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Custom properties, Grid, Flexbox, Animations)
- JavaScript (ES6+, Intersection Observer API)
- Google Fonts (Inter)
- Docker & Docker Compose
- Nginx (Alpine)

## Customization

### Colors

Edit CSS custom properties in `style.css`:

```css
:root {
  --color-primary: #0a1628;
  --color-accent: #00d4ff;
  /* ... more variables */
}
```

### Content

Update text content in `index.html` to match your business details.

### Images

Replace images in the `images/` directory with your own assets.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal specificity
- Efficient JavaScript with event delegation
- Lazy-loaded animations with Intersection Observer
- Lightweight Alpine-based Docker image (~40MB)

## License

© 2026 Kabayan Aircon. All rights reserved.

## Contact

For inquiries about this website or services:
- 📞 Phone: +63 912 345 6789
- 📧 Email: info@kabayanaircon.com
- 📍 Location: Metro Manila, Philippines

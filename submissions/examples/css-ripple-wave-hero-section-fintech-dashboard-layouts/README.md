# CSS Ripple-Wave Hero Section for Fintech Dashboard Layouts

A modern fintech dashboard hero section featuring smooth ripple-wave animations built using pure HTML and CSS.

This component is part of the EaseMotion CSS animation showcase collection.

## ✨ Features

- 🌊 Smooth CSS ripple-wave background animation
- 💳 Modern fintech dashboard hero layout
- 📊 Animated dashboard preview card
- 🎨 Glassmorphism UI styling
- ⚡ Pure HTML and CSS implementation
- 📱 Fully responsive design
- ♿ Supports `prefers-reduced-motion`
- 🚀 Lightweight and framework-free

## 📂 Files


css-ripple-wave-hero-section-fintech-dashboard-layouts/
│
├── demo.html
├── style.css
└── README.md


## 🚀 Usage

1. Copy the component folder into your project.

2. Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
Open demo.html in your browser.

No JavaScript or external dependencies are required.

🎨 CSS Custom Properties

The component uses CSS variables for easy customization:

:root {
  --primary: #00d4ff;
  --secondary: #6366f1;
  --background: #07111f;
  --card-bg: rgba(255,255,255,0.08);
  --text: #ffffff;
}
Customization

You can modify:

Variable	Purpose
--primary	Main accent color
--secondary	Gradient highlight color
--background	Hero background
--card-bg	Glass card appearance
--text	Text color
🌊 Animation Details
Ripple Wave

The ripple effect uses CSS keyframes:

@keyframes ripple-wave {
  from {
    transform: scale(.7);
    opacity: 0;
  }

  to {
    transform: scale(1.4);
    opacity: 0;
  }
}

Multiple ripple layers create a continuous wave expansion effect.

Dashboard Floating Animation

The dashboard card uses a smooth floating animation:

@keyframes floating-card {
  50% {
    transform: translateY(-20px);
  }
}
📱 Responsive Behavior

The layout automatically adapts for:

Desktop screens
Tablets
Mobile devices

On smaller screens:

Hero content stacks vertically
Dashboard preview scales down
Buttons remain accessible
♿ Accessibility

The component includes support for reduced motion preferences:

@media (prefers-reduced-motion: reduce)

Users who disable animations will receive a simplified experience.

🛠 Technologies
HTML5
CSS3
CSS Animations
CSS Variables
Responsive Design
📜 License

Contributed to the EaseMotion CSS animation showcase collection.
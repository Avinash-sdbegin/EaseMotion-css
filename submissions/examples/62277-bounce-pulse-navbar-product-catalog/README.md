# CSS Bounce-Pulse Navbar for Product Catalog Layouts

## Overview

The CSS Bounce-Pulse Navbar for Product Catalog Layouts is a modern animated navigation component built using pure HTML and CSS.

This component demonstrates a product catalog navbar with smooth bounce entrance animation, pulse effects, interactive hover states, and responsive design without using JavaScript.

It is developed for the EaseMotion CSS collection to showcase lightweight, reusable, and performant CSS animation patterns.

---

## Features

- Pure HTML and CSS implementation
- Smooth bounce entrance animation
- Pulse animation effect
- Product catalog navigation layout
- CSS-only hover interactions
- Smooth transitions and keyframe animations
- Responsive design for desktop, tablet, and mobile
- CSS custom properties for easy customization
- Accessible reduced motion support

---

## Folder Structure


62277-bounce-pulse-navbar-product-catalog/

├── demo.html
├── style.css
└── README.md


---

## Technologies Used

- HTML5
- CSS3
- CSS Animations
- CSS Variables
- Responsive Web Design

---

## Usage

1. Place this folder inside:


submissions/examples/


2. Open `demo.html` in any modern browser.

3. Customize CSS variables inside `style.css` to change colors, spacing, and animation behavior.

---

## CSS Custom Properties

The component uses CSS variables for easy customization.

```css
:root {
    --bg-color: #08111f;
    --nav-bg: rgba(255,255,255,0.08);
    --border-color: rgba(255,255,255,0.18);
    --text-color: #ffffff;
    --accent-color: #38bdf8;
    --accent-secondary: #a78bfa;
    --radius: 22px;
}
Customization Examples

Change accent color:

--accent-color: #22c55e;

Change navbar radius:

--radius: 30px;
Animation Details
Bounce Entrance Animation

The navbar uses CSS keyframes to create a smooth bounce effect.

Animation includes:

Fade in
Vertical movement
Bounce transition
Smooth appearance
Pulse Effect

The logo uses a pulse animation that creates a subtle scaling effect for better visual engagement.

Hover Effects

Navigation items include:

Scale transformation
Color transition
Background highlight
Smooth movement
Responsive Design

The component is optimized for:

Desktop screens
Tablets
Mobile devices

Responsive improvements include:

Flexible navigation layout
Adaptive spacing
Mobile-friendly alignment
Accessibility

The component supports users who prefer reduced motion.

Using:

@media (prefers-reduced-motion: reduce)

animations and transitions are minimized for a comfortable experience.

Browser Support

Compatible with:

Google Chrome
Microsoft Edge
Mozilla Firefox
Safari
Contribution

This component is created as part of the EaseMotion CSS open-source contribution collection under GSSoC-26.

License

This project follows the licensing guidelines of the EaseMotion CSS repository.
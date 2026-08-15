# SaaS Modern Header Navbar Menu - Accessibility Setup

This example demonstrates an accessible and responsive SaaS-style header navigation.

## Features

- Semantic HTML structure
- Responsive navigation
- Mobile menu toggle
- Keyboard-friendly controls
- ARIA attributes
- Visible keyboard focus states
- CSS custom property overrides
- Reduced-motion support

## HTML Usage

```html
<header class="saas-header">
  <a href="#" class="brand">CloudFlow</a>

  <button
    class="menu-toggle"
    type="button"
    aria-label="Open navigation menu"
    aria-expanded="false"
    aria-controls="main-navigation">
    ☰
  </button>

  <nav id="main-navigation" class="navbar" aria-label="Main navigation">
    <a href="#features">Features</a>
    <a href="#pricing">Pricing</a>
    <a href="#solutions">Solutions</a>
  </nav>
</header>
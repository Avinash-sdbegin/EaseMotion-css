# CSS Overlay with Progress

A pure CSS loading overlay featuring an animated radial progress indicator. This component provides a lightweight and reusable loading state without requiring JavaScript or external libraries.

## Features

* Pure CSS implementation
* Animated radial progress indicator
* Circular progress visualization
* Semi-transparent loading overlay
* Smooth entrance and pulse animations
* Responsive across different screen sizes
* Accessible progress semantics using ARIA attributes
* `prefers-reduced-motion` support
* No JavaScript dependencies
* No external libraries

## Files

```text
css-overlay-progress/
├── demo.html
├── style.css
└── README.md
```

### `demo.html`

Contains the demo page and accessible loading overlay markup.

### `style.css`

Contains all styling, radial progress visualization, animations, responsive behavior, and reduced-motion support.

## How It Works

The radial progress indicator is created using CSS `conic-gradient()`.

The progress value is controlled through the `--progress` custom property:

```css
.radial-progress {
    --progress: 75%;

    background:
        conic-gradient(
            var(--accent-light) var(--progress),
            var(--progress-track) var(--progress)
        );
}
```

The inner circle is created using a pseudo-element, producing the donut-style progress appearance without additional HTML elements.

Animations are handled entirely with CSS `@keyframes`.

## Accessibility

The component includes:

* `role="status"` for communicating the loading state
* `aria-live="polite"` for status updates
* `role="progressbar"` for the radial indicator
* `aria-valuemin`
* `aria-valuemax`
* `aria-valuenow`
* Descriptive `aria-label` values
* Reduced-motion support through `prefers-reduced-motion`

## Customization

The progress value can be changed through the `--progress` CSS variable.

For example:

```css
.radial-progress {
    --progress: 50%;
}
```

The visual theme can also be customized through the CSS variables defined in `:root`.

## Usage

Copy the `demo.html` and `style.css` files into your project and include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

The loading overlay can then be adapted to different loading states and UI layouts.

## Browser Support

The component uses modern CSS features including:

* CSS Custom Properties
* `conic-gradient()`
* CSS Animations
* `backdrop-filter`
* Media Queries

Modern versions of major browsers are recommended.

## Contribution

This component was created for the EaseMotion CSS library as part of the GSSoC 2026 contribution program.

---

**Issue:** #70424
**Feature:** CSS Overlay with Progress

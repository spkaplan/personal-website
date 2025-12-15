# Design System Rules

To maintain visual consistency and ease of maintenance, follow these rules:

## 1. Color Palette (Strict)
**NEVER** use hardcoded hex or rgba values (e.g., `#ffffff`, `rgba(0,0,0,0.5)`) in component CSS modules.
**ALWAYS** use the variables defined in `styles/globals.css`.

### Usage Guide:
- **Primary Colors**: Use `var(--color-personal-primary)` (Green) or `var(--color-professional-primary)` (Gray).
- **Text**: Use `var(--color-text-main)` (Headings), `var(--color-text-body)` (Content), `var(--color-text-muted)` (Meta).
- **Backgrounds**: Use `var(--color-background-dark)`.
- **Cards/Overlays**: Use `var(--color-surface-overlay)` (Glassmorphism).
- **Sticky Header**: Use `var(--color-header-bg)`.

### Adding New Colors:
If you need a new color, **DO NOT** add it to the component.
1.  Check if an existing variable can be reused.
2.  If not, add a new semantic variable to `styles/globals.css` (e.g., `--color-new-feature-bg`).
3.  Use that variable in your component.

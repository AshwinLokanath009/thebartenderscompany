/**
 * Smooth-scrolls to an in-page section, e.g. scrollToSection('#contact').
 * A missing target is a no-op rather than a throw — the footer and navbar build
 * their link lists conditionally, so a stale href shouldn't take the page down.
 */
export function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

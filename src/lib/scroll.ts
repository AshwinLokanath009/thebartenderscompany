/**
 * Smooth-scrolls to an in-page section, e.g. scrollToSection('#contact').
 * A missing target is a no-op rather than a throw — the footer and navbar build
 * their link lists conditionally, so a stale href shouldn't take the page down.
 */
export function scrollToSection(href: string) {
  const target = document.querySelector(href);
  if (!target) return;

  window.history.pushState(null, '', href);
  const headerOffset = 80;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top, behavior: 'smooth' });
}

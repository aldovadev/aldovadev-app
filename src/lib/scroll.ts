/**
 * Smoothly scrolls to a section by its href selector.
 * Uses the scroll-snap container (main) for offset calculation.
 * @param href - CSS selector for the target element (e.g., "#about")
 */
export function scrollToSection(href: string): void {
  const target = document.querySelector(href) as HTMLElement | null;
  if (!target) return;

  const scrollContainer = document.querySelector("main");
  if (scrollContainer) {
    const targetTop = target.offsetTop;
    scrollContainer.scrollTo({ top: targetTop, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

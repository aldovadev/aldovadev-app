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

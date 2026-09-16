/**
 * Single-Page Smooth Scroll Utility
 * Programmatically scrolls to section IDs without altering browser location or pushing route history states.
 */
export const scrollToSection = (sectionId: string) => {
  const cleanId = sectionId.replace(/^#/, '');
  const el = document.getElementById(cleanId);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

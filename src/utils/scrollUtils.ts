/**
 * Single-Page Navigation & Scroll Utility
 * Programmatically navigates to section IDs.
 * Direct targets (e.g. LET'S TALK button to Contact) jump directly to the target section.
 */
export const scrollToSection = (sectionId: string, isDirect: boolean = false) => {
  const cleanId = sectionId.replace(/^#/, '');
  const el = document.getElementById(cleanId);
  if (el) {
    if (isDirect || cleanId === 'contact') {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'auto' });
    } else {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};

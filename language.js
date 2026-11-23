const languagePicker = document.querySelector('.langdd');

if (languagePicker) {
  const sectionNav = document.querySelector('.home .section-nav');

  if (sectionNav) {
    const mobile = window.matchMedia('(max-width: 760px)');
    const placePicker = () => {
      const focused = document.activeElement;
      const restoreFocus = languagePicker.contains(focused);

      // Keep the keyboard order aligned with the two-row mobile header.
      if (mobile.matches) sectionNav.before(languagePicker);
      else sectionNav.parentElement.append(languagePicker);

      if (restoreFocus) focused.focus({ preventScroll: true });
    };

    placePicker();
    mobile.addEventListener('change', placePicker);
  }

  document.addEventListener('click', (event) => {
    if (!languagePicker.contains(event.target)) languagePicker.open = false;
  });

  languagePicker.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !languagePicker.contains(event.relatedTarget)) {
      languagePicker.open = false;
    }
  });

  languagePicker.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && languagePicker.open) {
      languagePicker.open = false;
      languagePicker.querySelector('summary').focus();
    }
  });
}

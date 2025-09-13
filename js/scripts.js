// Event delegation: one listener for all current/future .writing-box nodes
document.addEventListener('click', (ev) => {
  const box = ev.target.closest('.writing_box');
  if (!box) return;
  const collapsed = box.classList.toggle('collapsed');     // toggles class
  box.setAttribute('aria-expanded', String(!collapsed));   // keep ARIA in sync
});

// Keyboard accessibility: toggle on Enter / Space
document.addEventListener('keydown', (ev) => {
  if (ev.key !== 'Enter' && ev.key !== ' ') return;
  const box = ev.target.closest('.writing_box');
  if (!box) return;
  ev.preventDefault();
  const collapsed = box.classList.toggle('collapsed');
  box.setAttribute('aria-expanded', String(!collapsed));
});


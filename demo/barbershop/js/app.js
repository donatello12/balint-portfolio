// mobil menü
const toggle = document.querySelector('.nav-toggle');
const root = document.documentElement;
toggle?.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded',
    document.body.classList.contains('nav-open') ? 'true' : 'false');
});

// booking modal (UI only)
const bookingBtns = document.querySelectorAll('.js-open-booking');
const modal = document.getElementById('bookingModal');
bookingBtns.forEach(b => b.addEventListener('click', () => modal?.showModal()));
modal?.addEventListener('click', (e) => {
  // háttérre katt – zárás
  const rect = modal.querySelector('.booking-card')?.getBoundingClientRect();
  if (!rect) return;
  const inCard = e.clientX >= rect.left && e.clientX <= rect.right
              && e.clientY >= rect.top  && e.clientY <= rect.bottom;
  if (!inCard) modal.close();
});

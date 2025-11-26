const html = typeof document !== 'undefined' ? document.documentElement : null;
const body = typeof document !== 'undefined' ? document.body : null;
const prevent = e => e.preventDefault();

export function lockScroll() {
  if (!html || !body) return;
  body.style.overflow = 'hidden';
  html.style.overflow = 'hidden';
  document.addEventListener('wheel', prevent, { passive: false });
  document.addEventListener('touchmove', prevent, { passive: false });
}

export function unlockScroll() {
  if (!html || !body) return;
  body.style.overflow = '';
  html.style.overflow = '';
  document.removeEventListener('wheel', prevent);
  document.removeEventListener('touchmove', prevent);
}

export function openInvitation({ anchorId = 'umur', audioId = 'bgAudio' } = {}) {
  unlockScroll();

  const audio = document.getElementById(audioId);
  if (audio && typeof audio.play === 'function') {
    audio.play().catch(() => {
      audio.muted = false;
      audio.play().catch(() => {});
    });
  }

  const target = document.getElementById(anchorId);
  if (target && typeof target.scrollIntoView === 'function') {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (target) {
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }
}

export function attachOpenInvitation(buttonId = 'open-invitation', options) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;
  btn.addEventListener('click', () => openInvitation(options));
}

if (typeof window !== 'undefined') {
  lockScroll();
}

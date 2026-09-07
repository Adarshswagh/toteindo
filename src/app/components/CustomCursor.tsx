'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -80, y: -80 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(fine && motionOk);
    if (!fine || !motionOk) return;

    document.body.classList.add('has-hand-cursor');

    const move = (event: PointerEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, input, textarea, select, [role="button"]');
      setActive(Boolean(interactive));
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', onOver);
    return () => {
      document.body.classList.remove('has-hand-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`hand-cursor ${active ? 'is-active' : ''}`}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path
          d="M18 28V13.2a2.6 2.6 0 015.2 0V26m5.2-8.2a2.4 2.4 0 014.8 0V29M13.2 22.2a2.4 2.4 0 00-4.8 0v7.6C8.4 38 14.4 43 22.4 43c7 0 12.2-4.2 12.2-11.4V23.4a2.4 2.4 0 00-4.8 0"
          stroke="#7E1323"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

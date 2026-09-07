'use client';

import { useEffect, useRef } from 'react';

export function useReveal<T extends HTMLElement = HTMLElement>(stagger = 110) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target
            .querySelectorAll('.reveal, .reveal-left, .reveal-right')
            .forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * stagger);
            });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}

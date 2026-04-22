import { useEffect, useRef } from 'react';

export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold },
    );

    const observeTargets = () => {
      const targets = element.querySelectorAll('.reveal:not(.visible)');
      targets.forEach((target) => observer.observe(target));
    };

    observeTargets();

    const mutationObserver = new MutationObserver(() => {
      observeTargets();
    });

    mutationObserver.observe(element, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [threshold]);

  return ref;
}

import { useEffect, useState } from 'react';

interface useTestProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useTest = ({
  root,
  rootMargin,
  threshold,
  onIntersect,
}: useTestProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};

export default useTest;

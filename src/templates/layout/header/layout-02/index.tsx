import { useCallback, useEffect, useRef } from "react";

export default function Header({
  children,
  root,
  threshold,
  rootMargin,
  offset,
  onEnter,
  onLeave,
  onDirectionChange,
}: {
  threshold?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  root?: HTMLElement;
  rootMargin?: string;
  offset?: number;
  onEnter?: () => void;
  onLeave?: () => void;
  // eslint-disable-next-line no-unused-vars
  onDirectionChange?: (direction: number) => void;
  children: React.ReactNode;
}) {
  const flipPosition = useRef<number | null>(null);
  const position = useRef<number | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const direction = useRef<number>(0);

  const minmax = (number: number, min: number, max: number) => {
    return Math.min(Math.max(number, min), max);
  };

  const notify = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && onEnter) onEnter();
      else if (!entry.intersectionRatio && onLeave) onLeave();
    },
    [onEnter, onLeave],
  );

  const handleScroll = useCallback(() => {
    const margin = offset ?? 0;
    const diff = minmax(window.scrollY - (position.current ?? 0), -1, 1);
    if (diff != direction.current) {
      direction.current = diff;
      flipPosition.current = position.current ?? 0;
    }
    if (
      (direction.current > 0 &&
        position.current < flipPosition.current + margin * direction.current &&
        window.scrollY > flipPosition.current + margin * direction.current) ||
      (direction.current < 0 &&
        position.current > flipPosition.current + margin * direction.current &&
        window.scrollY < flipPosition.current + margin * direction.current)
    ) {
      onDirectionChange && onDirectionChange(direction.current);
    }
    position.current = window.scrollY;
  }, [direction]);

  useEffect(() => {
    // @ts-ignore
    const observer = new IntersectionObserver(notify, {
      threshold: threshold ?? 0,
      root: root ?? null,
      rootMargin: rootMargin ?? "0px",
    });
    if (container.current) {
      const el = container.current as HTMLElement;
      observer.observe(el);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container.current) {
        const el = container.current as HTMLElement;
        observer.unobserve(el);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return <div ref={container}>{children}</div>;
}

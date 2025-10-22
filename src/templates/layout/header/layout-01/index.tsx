import { GlobalStyle, Wrap } from "./header.styles";
import { useCallback, useEffect, useRef } from "react";

export default function Header({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  const anchor = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const toggleStuck = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (!entry) {
      return;
    }
    if (entry.intersectionRatio < 1) {
      container.current?.classList.add("sticky");
    } else {
      container.current?.classList.remove("sticky");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(toggleStuck, {
      threshold: [1],
      root: null,
      rootMargin: "0px",
    });
    if (anchor.current) {
      observer.observe(anchor.current);
    }

    return () => {
      if (anchor.current) {
        observer.unobserve(anchor.current);
      }
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <div ref={anchor} />
      <Wrap {...props} ref={container}>
        {children}
      </Wrap>
    </>
  );
}

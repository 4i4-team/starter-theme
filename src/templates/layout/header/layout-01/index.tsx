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

  // @ts-ignore
  const toggleStuck = useCallback(([entry]) => {
    if (entry.intersectionRatio < 1) {
      container.current?.classList.add("sticky");
    } else {
      container.current?.classList.remove("sticky");
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    const observer = new IntersectionObserver(toggleStuck, {
      threshold: [1],
      root: null,
      rootMargin: "0px",
    });
    if (anchor.current) {
      // @ts-ignore
      observer.observe(anchor.current);
    }

    return () => {
      if (anchor.current) {
        // @ts-ignore
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

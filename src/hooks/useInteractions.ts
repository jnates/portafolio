import { useEffect } from "react";

/**
 * Wires up global pointer + scroll driven UI effects:
 * - a spotlight that follows the cursor (via `--mx` / `--my` CSS vars)
 * - a top scroll-progress bar (element with id `scrollProgress`)
 */
export function useInteractions(): void {
  useEffect(() => {
    const root = document.documentElement;
    const progress = document.getElementById("scrollProgress");

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };

    const onScroll = () => {
      const scrollable = root.scrollHeight - root.clientHeight;
      const pct = scrollable > 0 ? (root.scrollTop / scrollable) * 100 : 0;
      if (progress) progress.style.width = `${pct}%`;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}

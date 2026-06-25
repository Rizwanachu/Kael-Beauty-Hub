import { useRef, useState, useCallback, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface Props {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  alt,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const clamp = (v: number) => Math.min(100, Math.max(0, v));

  const updateFromX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPct(clamp(((clientX - left) / width) * 100));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updateFromX(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    updateFromX(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging.current) updateFromX(e.clientX); };
    const onTouch = (e: TouchEvent) => { if (dragging.current) updateFromX(e.touches[0].clientX); };
    const onUp = () => { dragging.current = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromX]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden select-none cursor-col-resize shadow-lg"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Before (full width, behind) */}
      <img
        src={before}
        alt={`Before — ${alt}`}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After (clipped to right of handle) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${pct}%)` }}
      >
        <img
          src={after}
          alt={`After — ${alt}`}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* After label */}
        <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      {/* Before label */}
      <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
        {beforeLabel}
      </span>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white/90 shadow pointer-events-none"
        style={{ left: `${pct}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-none"
        style={{ left: `${pct}%` }}
      >
        <ChevronsLeftRight className="w-5 h-5 text-[#1b1e22]" />
      </div>
    </div>
  );
}

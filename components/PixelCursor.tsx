"use client";

import { useEffect, useState } from "react";

export default function PixelCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    document.body.classList.add("pixel-cursor-active");

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      document.body.classList.remove("pixel-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] mix-blend-difference"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg
        width={clicking ? 18 : 14}
        height={clicking ? 18 : 14}
        viewBox="0 0 14 14"
        className="transition-all duration-150"
      >
        <rect x="6" y="0" width="2" height="14" fill="white" />
        <rect x="0" y="6" width="14" height="2" fill="white" />
        <rect
          x="6"
          y="6"
          width="2"
          height="2"
          fill="white"
          className="animate-blink"
        />
      </svg>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function SpiderCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        width: "32px", // adjust size based on your image
        height: "32px",
      }}
    >
      <img
        src="/assets/cursor.cur"
        alt="Spider Cursor"
        className="w-full h-full"
        draggable={false}
      />
    </div>
  );
}

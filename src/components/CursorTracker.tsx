import { useEffect, useRef } from 'react';

export default function CursorTracker() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + 'px';
        ref.current.style.top  = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={ref}
      className="blink"
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 99999,
        fontSize: '1rem',
        color: 'var(--amber3)',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      █
    </div>
  );
}

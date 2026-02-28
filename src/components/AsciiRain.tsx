import { useEffect, useRef } from 'react';

const CHARS = '|/\\!@#$%^*_-=[]{}|;:.,<>?`~ᚠᚢᚦᚨᚱᚲᚷᚹᛟᛞᛗᛚᛁ01█▓▒░▄▀';

export default function AsciiRain() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const cols = Math.ceil(window.innerWidth / 13);
    const columns: HTMLDivElement[] = [];

    for (let i = 0; i < cols; i++) {
      const col = document.createElement('div');
      col.style.cssText = `
        position: absolute;
        top: -110%;
        left: ${i * 13}px;
        font-size: ${Math.random() * 0.25 + 0.5}rem;
        line-height: 1.15;
        color: var(--amber);
        white-space: pre;
        opacity: ${Math.random() * 0.4 + 0.15};
        animation: rainFall ${Math.random() * 9 + 6}s ${-Math.random() * 12}s linear infinite;
        font-family: var(--font-mono);
      `;
      let txt = '';
      for (let j = 0; j < 45; j++) {
        txt += CHARS[Math.floor(Math.random() * CHARS.length)] + '\n';
      }
      col.textContent = txt;
      container.appendChild(col);
      columns.push(col);
    }

    const interval = setInterval(() => {
      columns.forEach(col => {
        if (Math.random() > 0.88) {
          let txt = '';
          for (let j = 0; j < 45; j++) {
            txt += CHARS[Math.floor(Math.random() * CHARS.length)] + '\n';
          }
          col.textContent = txt;
        }
      });
    }, 900);

    return () => {
      clearInterval(interval);
      columns.forEach(c => c.remove());
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes rainFall {
          from { top: -110%; }
          to   { top: 110%; }
        }
      `}</style>
      <div
        ref={ref}
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.15,
        }}
      />
    </>
  );
}

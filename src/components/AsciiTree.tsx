import { useEffect, useRef, useState, useCallback } from 'react';

const RUNES = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛈᛇᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ';
const GLITCH_CHARS = '░▒▓█╠╣╬│║';

// Face-tree fusion: human profile (left) merged with Yggdrasil (right)
// Inspired by the tree-mind duality — spiral brain, book-step jaw, root tendrils
const TREE_LINES = [
  // ─── CANOPY ───
  `                            . ' . ' . ' . ' .`,
  `                        .' . ' . ' . ' . ' . ' . '.`,
  `                     .' . ' . ' . ᚠ . ' . ' . ' . ' . '.`,
  `                  .' . ' . ' . ' . ' . ' . ' . ' . ' . ' . '.`,
  `                .' . ' . ' . ' . ᚢ . ' . ᚦ . ' . ' . ' . ' . '.`,
  `              .' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' .`,
  `            ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . '`,
  `              '. ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . '`,
  `                  '. ' . ' . ' . ' . ' . ' . ' . ' . ' . ' .'`,
  `                      '. ' . ' . '             '. ' . ' .'`,
  // ─── HEAD + SPIRAL ───
  `             ___          '. ' .'    ,--===-.    '. .'           ___`,
  `           ,'   '.          '.'    .'  .---.  '.    '.'        ,'    '.`,
  `          /  .-.  '.         ;   .'  .'  _  '.  '.   ;      .'  .--.  \\`,
  `         |  ( ᚨ )  |        ;  ;  .'  .' '.  '.  ;  ;     |  ( ᚱ  )  |`,
  `         |   '-'   |       ;  ;  ;  ;   @   ;  ;  ;  ;     |   '-'    |`,
  `          \\       /        ;  ;  ;  ;  .-.  ;  ;  ;  ;      \\        /`,
  `           '.   .'         ;  ;  ;   '. ' .'   ;  ;  ;       '.    .'`,
  `             '-'          ;  ;   '.   '---'   .'  ;   ;        '-'`,
  `                          ;   '.    '--.--'    .'   ;  ;`,
  `                          ;     '-.         .-'     ;  ;`,
  `                           ;        '--___--'        ; ;`,
  // ─── TRUNK + NECK ───
  `                            ;          |||          ; ;`,
  `                             ;         |||         ; ;`,
  `                              ;        |||        ; ;`,
  `                               '.      |||      ;  ;`,
  `                                 '.    |||    .'  ;`,
  `                                   '.  |||  .'  ;`,
];

const DIVIDER_LINE = `      ═══════════════════════════════|||══════════════════════`;

const ROOT_LINES = [
  `      |████████████████|           |||        ᚱ       ᚨ    |`,
  `      |████████████████|    ᚦ      |||   ᚲ               ᚷ |`,
  `      |███ THE  ROTTED█|           |||                      |`,
  `      |███ ROOT  OF   █|    ᚹ      |||        ᚺ        ᚾ   |`,
  `      |███    ALL     █|           |||   ᛁ                  |`,
  `      |███  DREAD     █|    ᛟ     / /\\        ᛞ        ᛗ   |`,
  `      |████████████████|         / /  \\                     |`,
  `       \\███████████████|   ᛚ    / /    \\   ᛏ           ᛁ  /`,
  `        \\██████████████|       / /      \\                 /`,
  `         \\█████████████|      / /   ᛜ    \\       ᛖ      /`,
  `      . . \\████████████| . . / / . . . . .\\. . . . . . / . .`,
  `            \\██████████|    / /             \\          /`,
  `              \\████████|   / /    ᛞ    ᛟ    \\   ᛗ    /`,
  `      . . . . .\\██████| ./ / . . . . . . . . \\ . . / . . . .`,
  `                 \\█████| //                     \\  /`,
  `                   \\███|//        g n a w s       \\/`,
  `                     \\█/    +── N I D H O G G ──+`,
  `                      V  . . . . . . . . . . . . . . .`,
];

const CROWN_TEXT = TREE_LINES.join('\n');
const ROOT_TEXT = ROOT_LINES.join('\n');

function findRuneIndices(str: string): number[] {
  const indices: number[] = [];
  for (let i = 0; i < str.length; i++) {
    if (RUNES.includes(str[i])) indices.push(i);
  }
  return indices;
}

export default function AsciiTree() {
  const fullArt = CROWN_TEXT + '\n' + DIVIDER_LINE + '\n' + ROOT_TEXT;
  const total = fullArt.length;

  const [revealCount, setRevealCount] = useState(0);
  const [flickerMap, setFlickerMap] = useState<Record<number, string>>({});
  const [rootGlow, setRootGlow] = useState(false);
  const runeIndices = useRef(findRuneIndices(fullArt));

  // Phase 1: Character-by-character reveal
  useEffect(() => {
    let frame = 0;
    const charsPerFrame = 12;

    const id = setInterval(() => {
      frame++;
      const count = Math.min(frame * charsPerFrame, total);
      setRevealCount(count);
      if (count >= total) clearInterval(id);
    }, 16);

    return () => clearInterval(id);
  }, [total]);

  // Phase 2: Rune flickering after reveal
  useEffect(() => {
    if (revealCount < total) return;

    const id = setInterval(() => {
      const indices = runeIndices.current;
      const newMap: Record<number, string> = {};

      indices.forEach(idx => {
        if (Math.random() > 0.82) {
          newMap[idx] = Math.random() > 0.5
            ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            : RUNES[Math.floor(Math.random() * RUNES.length)];
        }
      });

      setFlickerMap(newMap);
    }, 550);

    return () => clearInterval(id);
  }, [revealCount, total]);

  // Phase 3: Root glow pulse
  useEffect(() => {
    if (revealCount < total) return;
    const id = setInterval(() => setRootGlow(prev => !prev), 2200);
    return () => clearInterval(id);
  }, [revealCount, total]);

  // Build displayed text with flicker substitutions
  const getDisplayText = useCallback(() => {
    const visible = fullArt.slice(0, revealCount);
    if (Object.keys(flickerMap).length === 0) return visible;

    const chars = visible.split('');
    for (const [idx, char] of Object.entries(flickerMap)) {
      const i = Number(idx);
      if (i < chars.length) chars[i] = char;
    }
    return chars.join('');
  }, [fullArt, revealCount, flickerMap]);

  // Split into crown / divider / roots
  const displayed = getDisplayText();
  const divIdx = displayed.indexOf('═══');
  let crownPart = displayed;
  let rootPart = '';

  if (divIdx > -1) {
    const lineStart = displayed.lastIndexOf('\n', divIdx);
    crownPart = displayed.slice(0, lineStart > -1 ? lineStart : divIdx);
    rootPart = displayed.slice(lineStart > -1 ? lineStart : divIdx);
  }

  const progress = total > 0 ? revealCount / total : 0;

  return (
    <>
      <style>{`
        @keyframes treeGlowPulse {
          0%, 100% { text-shadow: 0 0 4px rgba(184,92,0,0.3); }
          50% { text-shadow: 0 0 14px rgba(184,92,0,0.6), 0 0 28px rgba(184,92,0,0.15); }
        }
        @keyframes rootPulse {
          0%, 100% { text-shadow: 0 0 4px rgba(139,0,0,0.25); }
          50% { text-shadow: 0 0 16px rgba(139,0,0,0.55), 0 0 32px rgba(184,92,0,0.2); }
        }
        @keyframes treeRevealGlow {
          0% { opacity: 0.3; filter: blur(2px); }
          100% { opacity: 1; filter: blur(0); }
        }
        .ascii-tree-wrap {
          position: relative;
          margin: 1.5rem auto 2rem;
          text-align: center;
          animation: treeRevealGlow 2.5s ease-out both;
        }
        .ascii-tree-crown {
          white-space: pre;
          font-family: var(--font-mono);
          font-size: clamp(0.22rem, 0.58vw, 0.42rem);
          line-height: 1.22;
          color: var(--amber);
          animation: treeGlowPulse 4s ease-in-out infinite;
          display: inline-block;
          text-align: left;
        }
        .ascii-tree-roots {
          white-space: pre;
          font-family: var(--font-mono);
          font-size: clamp(0.22rem, 0.58vw, 0.42rem);
          line-height: 1.22;
          color: var(--blood);
          animation: rootPulse 3s ease-in-out infinite;
          display: inline-block;
          text-align: left;
          transition: text-shadow 1.2s ease;
        }
        .ascii-tree-roots.glow {
          text-shadow: 0 0 20px rgba(139,0,0,0.7), 0 0 40px rgba(184,92,0,0.25);
        }
        .tree-label {
          font-size: 0.42rem;
          letter-spacing: 0.5em;
          color: var(--dim);
          margin-top: 0.5rem;
          opacity: 0;
          transition: opacity 1.2s ease;
        }
        .tree-label.visible { opacity: 1; }
        .tree-progress {
          width: 100px;
          height: 1px;
          background: var(--dim2);
          margin: 0.5rem auto 0;
          overflow: hidden;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .tree-progress.visible { opacity: 1; }
        .tree-progress.done { opacity: 0; }
        .tree-progress-bar {
          height: 100%;
          background: var(--amber);
          transition: width 0.08s linear;
        }
      `}</style>

      <div className="ascii-tree-wrap">
        <div>
          <span className="ascii-tree-crown">{crownPart}</span>
          <span className={`ascii-tree-roots ${rootGlow ? 'glow' : ''}`}>{rootPart}</span>
        </div>

        <div className={`tree-progress ${progress > 0 ? 'visible' : ''} ${progress >= 1 ? 'done' : ''}`}>
          <div className="tree-progress-bar" style={{ width: `${progress * 100}%` }} />
        </div>

        <div className={`tree-label ${progress >= 1 ? 'visible' : ''}`}>
          THE TREE-MIND OF YGGDREAD
        </div>
      </div>
    </>
  );
}

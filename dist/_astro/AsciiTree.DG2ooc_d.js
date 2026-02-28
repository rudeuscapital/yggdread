import{j as s}from"./jsx-runtime.TBa3i5EZ.js";import{r as i}from"./index.CVf8TyFT.js";const m="ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛈᛇᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ",x="░▒▓█╠╣╬│║",I=["                            . ' . ' . ' . ' .","                        .' . ' . ' . ' . ' . ' . '.","                     .' . ' . ' . ᚠ . ' . ' . ' . ' . '.","                  .' . ' . ' . ' . ' . ' . ' . ' . ' . ' . '.","                .' . ' . ' . ' . ᚢ . ' . ᚦ . ' . ' . ' . ' . '.","              .' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' .","            ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . '","              '. ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . ' . '","                  '. ' . ' . ' . ' . ' . ' . ' . ' . ' . ' .'","                      '. ' . ' . '             '. ' . ' .'","             ___          '. ' .'    ,--===-.    '. .'           ___","           ,'   '.          '.'    .'  .---.  '.    '.'        ,'    '.","          /  .-.  '.         ;   .'  .'  _  '.  '.   ;      .'  .--.  \\","         |  ( ᚨ )  |        ;  ;  .'  .' '.  '.  ;  ;     |  ( ᚱ  )  |","         |   '-'   |       ;  ;  ;  ;   @   ;  ;  ;  ;     |   '-'    |","          \\       /        ;  ;  ;  ;  .-.  ;  ;  ;  ;      \\        /","           '.   .'         ;  ;  ;   '. ' .'   ;  ;  ;       '.    .'","             '-'          ;  ;   '.   '---'   .'  ;   ;        '-'","                          ;   '.    '--.--'    .'   ;  ;","                          ;     '-.         .-'     ;  ;","                           ;        '--___--'        ; ;","                            ;          |||          ; ;","                             ;         |||         ; ;","                              ;        |||        ; ;","                               '.      |||      ;  ;","                                 '.    |||    .'  ;","                                   '.  |||  .'  ;"],R="      ═══════════════════════════════|||══════════════════════",T=["      |████████████████|           |||        ᚱ       ᚨ    |","      |████████████████|    ᚦ      |||   ᚲ               ᚷ |","      |███ THE  ROTTED█|           |||                      |","      |███ ROOT  OF   █|    ᚹ      |||        ᚺ        ᚾ   |","      |███    ALL     █|           |||   ᛁ                  |","      |███  DREAD     █|    ᛟ     / /\\        ᛞ        ᛗ   |","      |████████████████|         / /  \\                     |","       \\███████████████|   ᛚ    / /    \\   ᛏ           ᛁ  /","        \\██████████████|       / /      \\                 /","         \\█████████████|      / /   ᛜ    \\       ᛖ      /","      . . \\████████████| . . / / . . . . .\\. . . . . . / . .","            \\██████████|    / /             \\          /","              \\████████|   / /    ᛞ    ᛟ    \\   ᛗ    /","      . . . . .\\██████| ./ / . . . . . . . . \\ . . / . . . .","                 \\█████| //                     \\  /","                   \\███|//        g n a w s       \\/","                     \\█/    +── N I D H O G G ──+","                      V  . . . . . . . . . . . . . . ."],j=I.join(`
`),_=T.join(`
`);function O(n){const t=[];for(let r=0;r<n.length;r++)m.includes(n[r])&&t.push(r);return t}function G(){const n=j+`
`+R+`
`+_,t=n.length,[r,v]=i.useState(0),[f,b]=i.useState({}),[w,y]=i.useState(!1),E=i.useRef(O(n));i.useEffect(()=>{let e=0;const a=12,o=setInterval(()=>{e++;const l=Math.min(e*a,t);v(l),l>=t&&clearInterval(o)},16);return()=>clearInterval(o)},[t]),i.useEffect(()=>{if(r<t)return;const e=setInterval(()=>{const a=E.current,o={};a.forEach(l=>{Math.random()>.82&&(o[l]=Math.random()>.5?x[Math.floor(Math.random()*x.length)]:m[Math.floor(Math.random()*m.length)])}),b(o)},550);return()=>clearInterval(e)},[r,t]),i.useEffect(()=>{if(r<t)return;const e=setInterval(()=>y(a=>!a),2200);return()=>clearInterval(e)},[r,t]);const c=i.useCallback(()=>{const e=n.slice(0,r);if(Object.keys(f).length===0)return e;const a=e.split("");for(const[o,l]of Object.entries(f)){const g=Number(o);g<a.length&&(a[g]=l)}return a.join("")},[n,r,f])(),p=c.indexOf("═══");let h=c,u="";if(p>-1){const e=c.lastIndexOf(`
`,p);h=c.slice(0,e>-1?e:p),u=c.slice(e>-1?e:p)}const d=t>0?r/t:0;return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"ascii-tree-wrap",children:[s.jsxs("div",{children:[s.jsx("span",{className:"ascii-tree-crown",children:h}),s.jsx("span",{className:`ascii-tree-roots ${w?"glow":""}`,children:u})]}),s.jsx("div",{className:`tree-progress ${d>0?"visible":""} ${d>=1?"done":""}`,children:s.jsx("div",{className:"tree-progress-bar",style:{width:`${d*100}%`}})}),s.jsx("div",{className:`tree-label ${d>=1?"visible":""}`,children:"THE TREE-MIND OF YGGDREAD"})]})]})}export{G as default};

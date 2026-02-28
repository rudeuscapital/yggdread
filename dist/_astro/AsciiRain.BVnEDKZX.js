import{j as o}from"./jsx-runtime.TBa3i5EZ.js";import{r as c}from"./index.CVf8TyFT.js";const r="|/\\!@#$%^*_-=[]{}|;:.,<>?`~ᚠᚢᚦᚨᚱᚲᚷᚹᛟᛞᛗᛚᛁ01█▓▒░▄▀";function p(){const i=c.useRef(null);return c.useEffect(()=>{const s=i.current;if(!s)return;const f=Math.ceil(window.innerWidth/13),a=[];for(let t=0;t<f;t++){const e=document.createElement("div");e.style.cssText=`
        position: absolute;
        top: -110%;
        left: ${t*13}px;
        font-size: ${Math.random()*.25+.5}rem;
        line-height: 1.15;
        color: var(--amber);
        white-space: pre;
        opacity: ${Math.random()*.4+.15};
        animation: rainFall ${Math.random()*9+6}s ${-Math.random()*12}s linear infinite;
        font-family: var(--font-mono);
      `;let n="";for(let l=0;l<45;l++)n+=r[Math.floor(Math.random()*r.length)]+`
`;e.textContent=n,s.appendChild(e),a.push(e)}const m=setInterval(()=>{a.forEach(t=>{if(Math.random()>.88){let e="";for(let n=0;n<45;n++)e+=r[Math.floor(Math.random()*r.length)]+`
`;t.textContent=e}})},900);return()=>{clearInterval(m),a.forEach(t=>t.remove())}},[]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        @keyframes rainFall {
          from { top: -110%; }
          to   { top: 110%; }
        }
      `}),o.jsx("div",{ref:i,style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:0,opacity:.15}})]})}export{p as default};

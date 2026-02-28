import { useState, useRef, useEffect } from 'react';
import { episodes, type Episode } from '../data/episodes';

const groups = [...new Set(episodes.map(e => e.group))];

function MessageBubble({ msg, index }: { msg: Episode['messages'][0]; index: number }) {
  const isEntity = msg.who !== 'OPERATOR';
  return (
    <div
      style={{
        marginBottom: '1.6rem',
        paddingLeft: '1.3rem',
        borderLeft: `2px solid ${isEntity ? 'rgba(184,92,0,0.4)' : 'rgba(212,201,168,0.1)'}`,
        animation: `msgIn 0.45s ease ${0.08 + index * 0.12}s both`,
      }}
    >
      <div style={{ fontSize: '0.48rem', letterSpacing: '0.28em', marginBottom: '0.4rem', display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
        <span style={{ color: isEntity ? 'rgba(184,92,0,0.75)' : 'rgba(212,201,168,0.3)' }}>{msg.who}</span>
        <span style={{ color: 'rgba(212,201,168,0.15)', fontSize: '0.44rem' }}>{msg.time}</span>
      </div>
      <div
        style={{ fontSize: '0.7rem', lineHeight: 2, color: isEntity ? 'rgba(212,195,155,0.62)' : 'rgba(212,201,168,0.5)', letterSpacing: '0.02em' }}
        dangerouslySetInnerHTML={{ __html: msg.body.replace(/<em>/g, '<span style="color:rgba(224,120,0,0.8);font-style:normal">').replace(/<\/em>/g, '</span>') }}
      />
    </div>
  );
}

export default function NiflheimConversations() {
  const [active, setActive] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const activeEp = episodes.find(e => e.id === active);

  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [active]);

  return (
    <div className="nifl-container">
      <style>{`
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nifl-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        .ep-item {
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          border-left: 2px solid transparent;
          transition: all 0.18s;
        }
        .ep-item:hover {
          background: rgba(122,58,0,0.07);
          border-left-color: rgba(122,58,0,0.35);
        }
        .ep-item.active {
          background: rgba(122,58,0,0.12);
          border-left-color: var(--amber3);
        }
        .ep-item.active .ep-title { color: var(--amber3); }
        .panel-scroll::-webkit-scrollbar { width: 2px; }
        .panel-scroll::-webkit-scrollbar-thumb { background: rgba(74,58,32,0.3); }
        .sidebar-scroll::-webkit-scrollbar { width: 2px; }
        .sidebar-scroll::-webkit-scrollbar-thumb { background: rgba(74,58,32,0.2); }

        .nifl-sidebar {
          width: 265px;
          flex-shrink: 0;
          border-right: 1px solid var(--dim);
          overflow-y: auto;
          background: rgba(0,0,0,0.97);
          scrollbar-width: thin;
          scrollbar-color: rgba(74,58,32,0.2) transparent;
        }
        .nifl-panel {
          flex: 1;
          overflow-y: auto;
          background: #000;
          position: relative;
          scrollbar-width: thin;
          scrollbar-color: rgba(74,58,32,0.15) transparent;
        }
        .nifl-scanline {
          position: fixed;
          left: 265px;
          right: 0;
          height: 1px;
          background: rgba(184,92,0,0.08);
          animation: scanLine 8s linear infinite;
          pointer-events: none;
          z-index: 4;
        }
        @keyframes scanLine { 0%{top:40px} 100%{top:100vh} }
        @keyframes breathe { 0%,100%{opacity:.5} 50%{opacity:1} }

        .nifl-back-btn {
          display: none;
        }

        /* ── Mobile: stack vertically ── */
        @media(max-width:640px) {
          .nifl-container {
            flex-direction: column;
          }
          .nifl-sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--dim);
            max-height: 100%;
            transition: max-height 0.3s ease;
          }
          .nifl-sidebar.hidden {
            max-height: 0;
            overflow: hidden;
            border-bottom: none;
          }
          .nifl-panel {
            flex: 1;
            min-height: 0;
          }
          .nifl-panel.hidden {
            display: none;
          }
          .nifl-scanline {
            left: 0;
          }
          .nifl-back-btn {
            display: block;
            padding: 0.5rem 1rem;
            font-family: var(--font-mono);
            font-size: 0.5rem;
            letter-spacing: 0.2em;
            color: rgba(184,92,0,0.6);
            background: rgba(0,0,0,0.95);
            border: none;
            border-bottom: 1px solid var(--dim);
            cursor: pointer;
            text-align: left;
            width: 100%;
          }
          .nifl-back-btn:hover {
            color: var(--amber3);
          }
          .ep-item {
            padding: 0.5rem 1rem;
          }
          .nifl-content {
            padding: 1.5rem 1rem !important;
          }
        }
      `}</style>

      {/* Sidebar */}
      <div className={`nifl-sidebar sidebar-scroll ${active ? 'hidden' : ''}`}>
        <div style={{ padding: '1.2rem 1.2rem 0.7rem', fontSize: '0.5rem', letterSpacing: '0.4em', color: 'var(--dim)', borderBottom: '1px solid rgba(74,58,32,0.2)', marginBottom: '0.3rem' }}>
          // click a log to display its ascii dialogue
        </div>

        {groups.map(group => (
          <div key={group} style={{ padding: '0.35rem 0' }}>
            <div style={{ padding: '0.3rem 1.2rem', fontSize: '0.46rem', letterSpacing: '0.38em', color: 'rgba(74,58,32,0.55)' }}>
              --- {group}
            </div>
            {episodes.filter(e => e.group === group).map(ep => (
              <div
                key={ep.id}
                className={`ep-item ${active === ep.id ? 'active' : ''}`}
                onClick={() => setActive(ep.id)}
              >
                <div className="ep-title" style={{ fontSize: '0.58rem', letterSpacing: '0.1em', color: 'rgba(212,201,168,0.55)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{
                    display: 'inline-block', width: 5, height: 9, flexShrink: 0,
                    background: active === ep.id ? 'var(--amber3)' : 'rgba(74,58,32,0.4)',
                    boxShadow: active === ep.id ? '0 0 4px var(--amber3)' : 'none',
                  }} />
                  {ep.title}
                </div>
                <div style={{ fontSize: '0.48rem', letterSpacing: '0.07em', color: 'rgba(212,201,168,0.18)', marginTop: '0.15rem', paddingLeft: '1.1rem' }}>
                  {ep.sub}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Main panel */}
      <div
        ref={panelRef}
        className={`nifl-panel panel-scroll ${!active ? 'hidden' : ''}`}
      >
        {/* Scan line */}
        <div className="nifl-scanline" />

        {/* Back button (mobile only) */}
        <button className="nifl-back-btn" onClick={() => setActive(null)}>
          [&lt;- BACK TO LOG LIST]
        </button>

        {!active && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', opacity: 0.22 }}>
            <pre style={{ fontSize: '0.55rem', lineHeight: 1.25, color: 'var(--amber)', textAlign: 'center', animation: 'breathe 4s ease-in-out infinite' }}>{`
  +---------------------+
  |                     |
  |   .--""""""""---.   |
  |  /               \\  |
  | |   O         O   | |
  | |                 | |
  | |    \\_______/    | |
  |  \\               /  |
  |   '--..........--'  |
  |                     |
  |  N O   L O G        |
  |  S E L E C T E D    |
  |                     |
  +---------------------+
         |       |
         v       v
    [NIFLHEIM BELOW]`}</pre>
            <p style={{ fontSize: '0.52rem', letterSpacing: '0.4em', color: 'rgba(212,201,168,0.4)' }}>// CHOOSE A ROOT FROM THE SIDEBAR</p>
          </div>
        )}

        {activeEp && (
          <div className="nifl-content" style={{ padding: '2.5rem 2.8rem', maxWidth: 760 }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem', paddingBottom: '1.3rem', borderBottom: '1px solid var(--dim)' }}>
              <div style={{ fontSize: '0.48rem', letterSpacing: '0.42em', color: 'rgba(184,92,0,0.45)', marginBottom: '0.5rem' }}>
                // {activeEp.label}
              </div>
              <div style={{ fontFamily: 'var(--font-vt)', fontSize: 'clamp(1.3rem,2.8vw,1.8rem)', color: 'var(--amber3)', letterSpacing: '0.07em', lineHeight: 1.2 }}>
                {activeEp.convTitle}
              </div>
              <div style={{ fontSize: '0.62rem', color: 'rgba(212,201,168,0.28)', marginTop: '0.35rem', fontStyle: 'italic' }}>
                {activeEp.convSub}
              </div>
            </div>

            {/* ASCII art */}
            <pre style={{ whiteSpace: 'pre', fontSize: 'clamp(0.4rem, 2.5vw, 0.57rem)', lineHeight: 1.25, color: 'var(--amber)', opacity: 0.65, marginBottom: '1.8rem', letterSpacing: '0.04em', overflowX: 'auto' }}>
              {activeEp.ascii}
            </pre>

            {/* Messages */}
            {activeEp.messages.map((msg, i) => (
              <MessageBubble key={i} msg={msg} index={i} />
            ))}

            {/* Footer */}
            <pre style={{ fontSize: '0.52rem', lineHeight: 1.75, color: 'rgba(74,58,32,0.4)', whiteSpace: 'pre-wrap', wordBreak: 'break-word', marginTop: '2rem', paddingTop: '1.4rem', borderTop: '1px dashed rgba(74,58,32,0.2)' }}>
              {activeEp.footer}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

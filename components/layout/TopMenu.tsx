export default function TopMenu() {
  return (
    <div id="topbar" className="h-[var(--topbar-h)] bg-[var(--bg-panel)] border-b border-[var(--border)] flex flex-col">
      {/* Title row */}
      <div className="title-row h-[38px] flex items-center px-2.5 gap-2.5 border-b border-[var(--border)]">
        <div className="app-btn w-7 h-7 bg-gradient-to-br from-[var(--accent)] to-[#2260cc] rounded flex items-center justify-center font-bold text-white text-xs font-['Syne'] shadow-[0_0_12px_var(--accent-glow)] hover:shadow-[0_0_20px_var(--accent-glow)] transition-shadow cursor-pointer">
          F
        </div>

        <div className="quick-access flex gap-0.5 items-center">
          <button className="qa-btn w-6 h-6 rounded border-none bg-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)] transition-all text-xs flex items-center justify-center">
            ⚙
          </button>
          <button className="qa-btn w-6 h-6 rounded border-none bg-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)] transition-all text-xs flex items-center justify-center">
            🔍
          </button>
        </div>

        <div className="title-center flex-1 text-center font-['Syne'] text-xs font-semibold text-[var(--text-sec)] tracking-[0.05em] uppercase">
          AI 3D Builder <span className="text-[var(--text-pri)]">— FLEX</span>
        </div>

        <div className="win-controls flex gap-0.5">
          <button className="wc w-7 h-6 rounded border-none bg-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)] transition-all text-xs flex items-center justify-center">
            −
          </button>
          <button className="wc w-7 h-6 rounded border-none bg-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)] transition-all text-xs flex items-center justify-center">
            □
          </button>
          <button className="wc close w-7 h-6 rounded border-none bg-transparent text-[var(--text-sec)] hover:bg-[var(--red)] hover:text-white transition-all text-xs flex items-center justify-center">
            ✕
          </button>
        </div>
      </div>

      {/* Search / info bar */}
      <div className="info-row h-7 flex items-center px-2.5 gap-2">
        <div className="search-box flex-1 max-w-60 h-5.5 bg-[var(--bg-card)] border border-[var(--border)] rounded flex items-center px-2 gap-1.5 cursor-text hover:border-[var(--accent)] focus-within:border-[var(--accent)] transition-border">
          <span className="text-[var(--text-dim)] text-xs">🔍</span>
          <input
            type="text"
            placeholder="Search commands..."
            className="bg-transparent border-none outline-none text-[var(--text-pri)] font-['JetBrains_Mono'] text-[10px] flex-1 placeholder:text-[var(--text-dim)]"
          />
        </div>

        <div className="info-spacer flex-1"></div>

        <div className="info-tags flex gap-1">
          <div className="itag h-5 px-2 rounded border border-[var(--border)] bg-[var(--bg-card)] text-[9px] text-[var(--text-sec)] flex items-center gap-1 cursor-pointer hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] transition-all">
            <div className="dot w-1.5 h-1.5 rounded-full bg-[var(--green)]"></div>
            Ready
          </div>
        </div>
      </div>
    </div>
  );
}
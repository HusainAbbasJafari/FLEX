import { ChevronDown, Settings, Layers, Palette, Zap } from "lucide-react";

export default function LeftSidebar() {
  return (
    <div className="sidebar flex flex-col h-full">
      {/* Header */}
      <div className="sidebar-header h-8 bg-[var(--bg-card)] border-b border-[var(--border)] flex items-center px-2.5 gap-2 flex-shrink-0">
        <div className="sidebar-title text-[10px] font-bold text-[var(--text-sec)] tracking-[0.1em] uppercase flex-1">
          SCENE
        </div>
        <button className="sidebar-close w-5 h-5 rounded border-none bg-transparent text-[var(--text-dim)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)] transition-all flex items-center justify-center text-sm">
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="sidebar-body flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent">

        {/* Scene Objects */}
        <div className="panel-section mb-1.5">
          <div className="panel-section-header flex items-center px-2 py-1.5 cursor-pointer rounded border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] transition-bg mb-1">
            <div className="panel-section-title text-[10px] font-semibold text-[var(--text-pri)] tracking-[0.05em] flex-1">
              OBJECTS
            </div>
            <div className="panel-chevron text-[9px] text-[var(--text-dim)] transform rotate-90">
              ▶
            </div>
          </div>
          <div className="panel-section-body px-0 pb-1">
            <div className="layer-item flex items-center px-2 py-1.25 gap-1.5 rounded cursor-pointer text-[10px] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)] transition-all">
              <div className="layer-dot w-2 h-2 rounded-full bg-[var(--blue)] flex-shrink-0"></div>
              <div className="layer-name flex-1">Cube</div>
              <div className="layer-icons flex gap-0.75 opacity-0 hover:opacity-100 transition-opacity">
                <button className="layer-icon-btn w-4 h-4 rounded text-[10px]">👁</button>
                <button className="layer-icon-btn w-4 h-4 rounded text-[10px]">🔒</button>
              </div>
            </div>
            <div className="layer-item flex items-center px-2 py-1.25 gap-1.5 rounded cursor-pointer text-[10px] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)] transition-all">
              <div className="layer-dot w-2 h-2 rounded-full bg-[var(--green)] flex-shrink-0"></div>
              <div className="layer-name flex-1">Sphere</div>
              <div className="layer-icons flex gap-0.75 opacity-0 hover:opacity-100 transition-opacity">
                <button className="layer-icon-btn w-4 h-4 rounded text-[10px]">👁</button>
                <button className="layer-icon-btn w-4 h-4 rounded text-[10px]">🔒</button>
              </div>
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="panel-section mb-1.5">
          <div className="panel-section-header flex items-center px-2 py-1.5 cursor-pointer rounded border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] transition-bg mb-1">
            <div className="panel-section-title text-[10px] font-semibold text-[var(--text-pri)] tracking-[0.05em] flex-1">
              MATERIALS
            </div>
            <div className="panel-chevron text-[9px] text-[var(--text-dim)] transform rotate-90">
              ▶
            </div>
          </div>
          <div className="panel-section-body px-0 pb-1">
            <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
              <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Color</div>
              <div className="prop-color w-5 h-4 rounded cursor-pointer border border-[var(--border)] bg-red-500"></div>
            </div>
            <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
              <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Metal</div>
              <input type="range" className="flex-1" min="0" max="1" step="0.1" />
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="panel-section">
          <div className="panel-section-header flex items-center px-2 py-1.5 cursor-pointer rounded border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] transition-bg mb-1">
            <div className="panel-section-title text-[10px] font-semibold text-[var(--text-pri)] tracking-[0.05em] flex-1">
              TOOLS
            </div>
            <div className="panel-chevron text-[9px] text-[var(--text-dim)] transform rotate-90">
              ▶
            </div>
          </div>
          <div className="panel-section-body">
            <div className="tool-grid grid grid-cols-3 gap-1 p-1">
              <div className="tool-item aspect-square rounded border border-[var(--border)] bg-[var(--bg-card)] flex flex-col items-center justify-center gap-1 cursor-pointer text-[9px] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] hover:scale-105 transition-all">
                <Settings size={12} />
                Select
              </div>
              <div className="tool-item aspect-square rounded border border-[var(--border)] bg-[var(--bg-card)] flex flex-col items-center justify-center gap-1 cursor-pointer text-[9px] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] hover:scale-105 transition-all">
                <Zap size={12} />
                Move
              </div>
              <div className="tool-item aspect-square rounded border border-[var(--border)] bg-[var(--bg-card)] flex flex-col items-center justify-center gap-1 cursor-pointer text-[9px] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] hover:scale-105 transition-all">
                <Palette size={12} />
                Paint
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
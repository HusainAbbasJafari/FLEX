import { ChevronDown } from "lucide-react";

export default function RightSidebar({ selected }: any) {
  return (
    <div className="sidebar flex flex-col h-full">
      {/* Header */}
      <div className="sidebar-header h-8 bg-[var(--bg-card)] border-b border-[var(--border)] flex items-center px-2.5 gap-2 flex-shrink-0">
        <div className="sidebar-title text-[10px] font-bold text-[var(--text-sec)] tracking-[0.1em] uppercase flex-1">
          INSPECTOR
        </div>
        <button className="sidebar-close w-5 h-5 rounded border-none bg-transparent text-[var(--text-dim)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)] transition-all flex items-center justify-center text-sm">
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="sidebar-body flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent">

        {selected ? (
          <>
            {/* Transform */}
            <div className="panel-section mb-1.5">
              <div className="panel-section-header flex items-center px-2 py-1.5 cursor-pointer rounded border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] transition-bg mb-1">
                <div className="panel-section-title text-[10px] font-semibold text-[var(--text-pri)] tracking-[0.05em] flex-1">
                  TRANSFORM
                </div>
                <div className="panel-chevron text-[9px] text-[var(--text-dim)] transform rotate-90">
                  ▶
                </div>
              </div>
              <div className="panel-section-body px-0 pb-1">
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Position</div>
                  <div className="flex gap-1">
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue={selected.position?.x.toFixed(2) || "0.00"} />
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue={selected.position?.y.toFixed(2) || "0.00"} />
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue={selected.position?.z.toFixed(2) || "0.00"} />
                  </div>
                </div>
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Rotation</div>
                  <div className="flex gap-1">
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="0.00" />
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="0.00" />
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="0.00" />
                  </div>
                </div>
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Scale</div>
                  <div className="flex gap-1">
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="1.00" />
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="1.00" />
                    <input type="number" step="0.01" className="prop-input w-12 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="1.00" />
                  </div>
                </div>
              </div>
            </div>

            {/* Material */}
            <div className="panel-section mb-1.5">
              <div className="panel-section-header flex items-center px-2 py-1.5 cursor-pointer rounded border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] transition-bg mb-1">
                <div className="panel-section-title text-[10px] font-semibold text-[var(--text-pri)] tracking-[0.05em] flex-1">
                  MATERIAL
                </div>
                <div className="panel-chevron text-[9px] text-[var(--text-dim)] transform rotate-90">
                  ▶
                </div>
              </div>
              <div className="panel-section-body px-0 pb-1">
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Color</div>
                  <div className="prop-color w-5 h-4 rounded cursor-pointer border border-[var(--border)] bg-blue-500"></div>
                </div>
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Metal</div>
                  <input type="range" className="flex-1" min="0" max="1" step="0.1" defaultValue="0.5" />
                </div>
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Rough</div>
                  <input type="range" className="flex-1" min="0" max="1" step="0.1" defaultValue="0.3" />
                </div>
              </div>
            </div>

            {/* Geometry */}
            <div className="panel-section">
              <div className="panel-section-header flex items-center px-2 py-1.5 cursor-pointer rounded border border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] transition-bg mb-1">
                <div className="panel-section-title text-[10px] font-semibold text-[var(--text-pri)] tracking-[0.05em] flex-1">
                  GEOMETRY
                </div>
                <div className="panel-chevron text-[9px] text-[var(--text-dim)] transform rotate-90">
                  ▶
                </div>
              </div>
              <div className="panel-section-body px-0 pb-1">
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Type</div>
                  <span className="text-[var(--text-pri)]">{selected.geometry?.type || "BoxGeometry"}</span>
                </div>
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Width</div>
                  <input type="number" step="0.01" className="prop-input w-16 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="1.00" />
                </div>
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Height</div>
                  <input type="number" step="0.01" className="prop-input w-16 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="1.00" />
                </div>
                <div className="prop-row flex items-center px-1.5 py-1 gap-2 text-[10px] hover:bg-[var(--bg-hover)] transition-bg">
                  <div className="prop-label text-[var(--text-sec)] w-14 flex-shrink-0 text-[9px]">Depth</div>
                  <input type="number" step="0.01" className="prop-input w-16 h-4 bg-[var(--bg-card)] border border-[var(--border)] rounded text-[10px] px-1.5 outline-none hover:border-[var(--accent)] focus:border-[var(--accent)]" defaultValue="1.00" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-[var(--text-dim)] text-[10px]">No object selected</div>
            <div className="text-[var(--text-sec)] text-[9px] mt-1">Select an object to edit its properties</div>
          </div>
        )}

      </div>
    </div>
  );
}
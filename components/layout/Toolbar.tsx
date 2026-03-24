import { useUI } from "@/providers/ui-provider";
import { Move, RotateCw, Maximize, Box, Circle, Save, FolderOpen, Undo, Redo, Copy, Scissors, Settings } from "lucide-react";

export default function Toolbar() {
  const { setLeftOpen, setRightOpen, setMode } = useUI();

  return (
    <>
      {/* Ribbon */}
      <div id="ribbon" className="h-[var(--ribbon-h)] bg-[var(--bg-panel)] border-b border-[var(--border)] flex items-stretch overflow-x-auto scrollbar-hide">
        {/* Tab bar */}
        <div className="ribbon-tab-bar flex items-center px-1.5 gap-0.5 border-r border-[var(--border)] min-w-fit">
          <button className="rtab px-2.5 py-1 rounded-t border border-transparent border-b-0 text-[10px] font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)] hover:bg-[var(--bg-hover)] active text-[var(--accent)] border-[var(--border)] bg-[var(--bg-card)]">
            Home
          </button>
          <button className="rtab px-2.5 py-1 rounded-t border border-transparent border-b-0 text-[10px] font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)] hover:bg-[var(--bg-hover)]">
            Insert
          </button>
          <button className="rtab px-2.5 py-1 rounded-t border border-transparent border-b-0 text-[10px] font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)] hover:bg-[var(--bg-hover)]">
            View
          </button>
        </div>

        {/* Home section */}
        <div className="ribbon-section flex items-center px-2 gap-1 border-r border-[var(--border)]">
          <div className="rgrp flex flex-col items-center gap-0.5">
            <div className="rgrp-label text-[8px] text-[var(--text-dim)] uppercase tracking-[0.08em] absolute bottom-0.5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              File
            </div>
            <div className="rgrp-btns flex gap-0.5">
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <Save size={12} />
              </button>
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <FolderOpen size={12} />
              </button>
            </div>
          </div>

          <div className="rgrp flex flex-col items-center gap-0.5">
            <div className="rgrp-label text-[8px] text-[var(--text-dim)] uppercase tracking-[0.08em] absolute bottom-0.5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Edit
            </div>
            <div className="rgrp-btns flex gap-0.5">
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <Undo size={12} />
              </button>
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <Redo size={12} />
              </button>
            </div>
          </div>

          <div className="rgrp flex flex-col items-center gap-0.5">
            <div className="rgrp-label text-[8px] text-[var(--text-dim)] uppercase tracking-[0.08em] absolute bottom-0.5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Tools
            </div>
            <div className="rgrp-btns flex gap-0.5">
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <Move size={12} />
              </button>
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <RotateCw size={12} />
              </button>
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <Maximize size={12} />
              </button>
            </div>
          </div>

          <div className="rgrp flex flex-col items-center gap-0.5">
            <div className="rgrp-label text-[8px] text-[var(--text-dim)] uppercase tracking-[0.08em] absolute bottom-0.5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              Primitives
            </div>
            <div className="rgrp-btns flex gap-0.5">
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <Box size={12} />
              </button>
              <button className="rbtn w-8 h-7.5 rounded border border-transparent text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border)] hover:text-[var(--text-pri)] transition-all flex flex-col items-center justify-center gap-0.5 text-[9px]">
                <Circle size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* File tabs */}
      <div id="filetabs" className="h-7 bg-[var(--bg-base)] border-b border-[var(--border)] flex items-end px-2 gap-0.5">
        <div className="ftab h-6 px-3 rounded-t border border-[var(--border)] border-b-0 bg-[var(--bg-card)] text-[10px] text-[var(--text-sec)] flex items-center gap-1.5 cursor-pointer hover:bg-[var(--bg-panel)] hover:text-[var(--text-pri)] active bg-[var(--bg-panel)] text-[var(--text-pri)] border-[var(--border-hi)]">
          Scene.3d
          <div className="close-x w-3.5 h-3.5 flex items-center justify-center rounded text-[10px] text-[var(--text-dim)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-pri)]">
            ✕
          </div>
        </div>
        <div className="ftab-add w-6 h-6 rounded-t border-2 border-dashed border-[var(--border)] border-b-0 bg-transparent text-[var(--text-dim)] cursor-pointer hover:text-[var(--text-sec)] hover:border-[var(--border-hi)] flex items-center justify-center text-sm">
          +
        </div>
      </div>
    </>
  );
}
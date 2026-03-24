"use client";

import { Move, RotateCw, Maximize } from "lucide-react";

interface Props {
  selected?: any;
  mode?: "translate" | "rotate" | "scale";
}

export default function StatusBar({ selected, mode }: Props) {
  return (
    <div className="h-[var(--statusbar-h)] bg-[var(--bg-panel)] border-t border-[var(--border)] flex items-center px-3 text-[10px] font-mono">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-3 text-[var(--text-sec)]">

        {/* Status indicator */}
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[var(--green)]"></div>
          <span>Ready</span>
        </div>

        {/* Object Info */}
        <span className="text-[var(--text-dim)]">
          {selected ? "Selected:" : "No Selection"}
        </span>

        {selected && (
          <>
            <span className="text-[var(--text-pri)]">
              {selected.geometry?.type}
            </span>

            <span className="text-[var(--text-dim)]">
              X: {selected.position.x.toFixed(2)}
            </span>

            <span className="text-[var(--text-dim)]">
              Y: {selected.position.y.toFixed(2)}
            </span>

            <span className="text-[var(--text-dim)]">
              Z: {selected.position.z.toFixed(2)}
            </span>
          </>
        )}
      </div>

      {/* CENTER */}
      <div className="flex-1 flex justify-center items-center gap-2">

        {mode === "translate" && <Move size={12} className="text-[var(--accent)]" />}
        {mode === "rotate" && <RotateCw size={12} className="text-[var(--accent)]" />}
        {mode === "scale" && <Maximize size={12} className="text-[var(--accent)]" />}

        <span className="text-[var(--text-sec)] capitalize">
          {mode || "Idle"}
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 text-[var(--text-dim)]">

        <span>Grid: ON</span>
        <span>Snap: 0.5</span>
        <span>Units: m</span>
        <span>FPS: 60</span>

      </div>
    </div>
  );
}
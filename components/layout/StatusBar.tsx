"use client";

import { Move, RotateCw, Maximize } from "lucide-react";

interface Props {
  selected?: any;
  mode?: "translate" | "rotate" | "scale";
}

export default function StatusBar({ selected, mode }: Props) {
  return (
    <div className="h-8 border-t border-gray-700 flex items-center px-3 text-xs bg-[#1a1a1a]">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">

        {/* Object Info */}
        <span className="text-gray-400">
          {selected ? "Selected:" : "No Selection"}
        </span>

        {selected && (
          <>
            <span className="text-gray-200">
              {selected.geometry?.type}
            </span>

            <span className="text-gray-500">
              X: {selected.position.x.toFixed(2)}
            </span>

            <span className="text-gray-500">
              Y: {selected.position.y.toFixed(2)}
            </span>

            <span className="text-gray-500">
              Z: {selected.position.z.toFixed(2)}
            </span>
          </>
        )}
      </div>

      {/* CENTER */}
      <div className="flex-1 flex justify-center items-center gap-3">

        {mode === "translate" && <Move size={14} />}
        {mode === "rotate" && <RotateCw size={14} />}
        {mode === "scale" && <Maximize size={14} />}

        <span className="text-gray-400 capitalize">
          {mode || "Idle"}
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 text-gray-400">

        <span>Grid: ON</span>
        <span>Snap: 0.5</span>
        <span>Units: m</span>

      </div>
    </div>
  );
}
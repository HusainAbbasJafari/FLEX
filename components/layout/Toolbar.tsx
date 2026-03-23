import { useUI } from "@/providers/ui-provider";
import { Move, RotateCw, Maximize, Box, Circle } from "lucide-react";

export default function Toolbar() {
      const { setLeftOpen, setRightOpen, setMode } = useUI();
  return (
    <div className="h-12 border-b border-gray-700 flex items-center px-3 gap-2">
        <button onClick={() => setLeftOpen(prev => !prev)}>
        Toggle Left
      </button>

      <button onClick={() => setRightOpen(prev => !prev)}>
        Toggle Right
      </button>
      <button className="p-2 hover:bg-gray-700 rounded">
        <Move size={18} />
      </button>

      <button className="p-2 hover:bg-gray-700 rounded">
        <RotateCw size={18} />
      </button>

      <button className="p-2 hover:bg-gray-700 rounded">
        <Maximize size={18} />
      </button>

      <div className="w-px h-6 bg-gray-600 mx-2" />

      <button className="p-2 hover:bg-gray-700 rounded">
        <Box size={18} />
      </button>

      <button className="p-2 hover:bg-gray-700 rounded">
        <Circle size={18} />
      </button>

    </div>
  );
}
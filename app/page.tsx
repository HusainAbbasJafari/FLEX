"use client";

import { useRef, useState } from "react";
import SceneCanvas, { SceneHandle } from "@/components/canvas/SceneCanvas";
import EditorLayout from "@/components/layout/EditorLayout";


export default function Home() {
  const sceneRef = useRef<SceneHandle>(null);

  const [selected, setSelected] = useState<any>(null);
  const [mode, setMode] = useState<"translate" | "rotate" | "scale">("translate");

  return (
    <EditorLayout selected={selected} mode={mode}>
      <SceneCanvas ref={sceneRef} onSelect={setSelected} />
    </EditorLayout>
  );
}
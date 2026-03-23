"use client";

import { useEffect, useRef, useState } from "react";
import SceneCanvas, { SceneHandle } from "@/components/canvas/SceneCanvas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const sceneRef = useRef<SceneHandle>(null);
  const [prompt, setPrompt] = useState("");
  const [selected, setSelected] = useState<any>(null);

  const handleGenerate = () => {
    const text = prompt.toLowerCase();

    if (text.includes("cube")) sceneRef.current?.addCube();
    if (text.includes("sphere")) sceneRef.current?.addSphere();
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "d") {
        e.preventDefault();
        sceneRef.current?.duplicateSelected();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  return (
    <div className="h-screen flex flex-col">

      {/* 🔥 TOPBAR */}
      <div className="h-14 border-b flex items-center px-4 gap-2">
        <Button onClick={() => sceneRef.current?.addCube()}>
          Add Cube
        </Button>

        <Button onClick={() => sceneRef.current?.addSphere()}>
          Add Sphere
        </Button>

        <Button
          onClick={() => {
            const data = sceneRef.current?.exportScene();
            localStorage.setItem("scene", JSON.stringify(data));
          }}
        >
          Save
        </Button>

        <Button
          onClick={() => {
            const data = localStorage.getItem("scene");
            if (data) {
              sceneRef.current?.importScene(JSON.parse(data));
            }
          }}
        >
          Load
        </Button>

        <div className="ml-auto flex gap-2">
          <Input
            placeholder="AI Prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-64"
          />
          <Button onClick={handleGenerate}>Generate</Button>
        </div>
      </div>

      {/* 🔥 MAIN LAYOUT */}
      <div className="flex flex-1">

        {/* LEFT SIDEBAR */}
        <div className="w-60 border-r p-4">
          <h3 className="font-semibold mb-2">Assets</h3>

          <Button
            className="w-full mb-2"
            onClick={() => sceneRef.current?.addCube()}
          >
            Cube
          </Button>

          <Button
            className="w-full"
            onClick={() => sceneRef.current?.addSphere()}
          >
            Sphere
          </Button>
        </div>

        {/* CANVAS */}
        <div className="flex-1">
          <SceneCanvas ref={sceneRef} onSelect={setSelected} />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-72 border-l p-4">
          <h3 className="font-semibold mb-2">Inspector</h3>

          {selected ? (
            <div className="space-y-2">

              <div>
                <label>X</label>
                <input
                  type="number"
                  value={selected.position.x}
                  onChange={(e) => {
                    selected.position.x = Number(e.target.value);
                  }}
                />
              </div>

              <div>
                <label>Y</label>
                <input
                  type="number"
                  value={selected.position.y}
                  onChange={(e) => {
                    selected.position.y = Number(e.target.value);
                  }}
                />
              </div>

              <div>
                <label>Z</label>
                <input
                  type="number"
                  value={selected.position.z}
                  onChange={(e) => {
                    selected.position.z = Number(e.target.value);
                  }}
                />
              </div>

            </div>
          ) : (
            <p>Select object to edit</p>
          )}
        </div>

      </div>
    </div>
  );
}
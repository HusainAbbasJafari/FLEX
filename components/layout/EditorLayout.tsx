"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

import TopMenu from "./TopMenu";
import Toolbar from "./Toolbar";
import LeftSidebar from "../sidebar/LeftSidebar";
import RightSidebar from "../sidebar/RightSidebar";
import StatusBar from "./StatusBar";
import { useUI } from "@/providers/ui-provider";


export default function EditorLayout({ children, selected, mode }: any){
  const { leftOpen, rightOpen } = useUI();
  return (
    <div className="h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-pri)] font-mono overflow-hidden">

      <TopMenu />
      <Toolbar />

      <ResizablePanelGroup direction="horizontal" className="flex-1 overflow-hidden">

       {leftOpen && (
        <>
          <ResizablePanel minSize={15} maxSize={30} defaultSize={20} className="sidebar left bg-[var(--bg-panel)] border-r border-[var(--border)] flex flex-col flex-shrink-0 transition-all duration-300 overflow-hidden">
            <LeftSidebar />
          </ResizablePanel>
          <ResizableHandle className="w-1 bg-[var(--border)] hover:bg-[var(--border-hi)] transition-colors" />
        </>
      )}

         <ResizablePanel defaultSize={60} className="flex flex-col min-w-0">
          <div className="flex-1 relative bg-[var(--bg-base)]">
            {/* Viewport label */}
            <div className="vp-label absolute top-2 left-2 text-[10px] text-[var(--text-sec)] bg-[rgba(0,0,0,0.4)] px-2 py-0.5 rounded pointer-events-none z-10">
              Perspective
            </div>

            {/* View Cube */}
            <div id="viewcube" className="absolute top-2 right-12 w-20 h-20 z-20">
              <div className="cube-compass w-20 h-20 rounded-full bg-[rgba(0,0,0,0.3)] border border-[var(--border)] flex items-center justify-center relative">
                <div className="cube-top w-9 h-9 bg-[var(--bg-card)] border border-[var(--border-hi)] rounded flex items-center justify-center text-[9px] font-bold text-[var(--text-pri)] cursor-pointer hover:bg-[var(--accent-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  TOP
                </div>
                <div className="compass-dir n absolute top-1 left-1/2 transform -translate-x-1/2 text-[9px] font-bold text-[var(--text-sec)]">N</div>
                <div className="compass-dir s absolute bottom-1 left-1/2 transform -translate-x-1/2 text-[9px] font-bold text-[var(--text-sec)]">S</div>
                <div className="compass-dir e absolute right-1 top-1/2 transform -translate-y-1/2 text-[9px] font-bold text-[var(--text-sec)]">E</div>
                <div className="compass-dir w absolute left-1 top-1/2 transform -translate-y-1/2 text-[9px] font-bold text-[var(--text-sec)]">W</div>
              </div>
            </div>

            {/* Navigation bar */}
            <div id="nav-bar" className="absolute right-1.5 top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5 z-20">
              <button className="nav-btn w-7 h-7 rounded border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] transition-all flex items-center justify-center text-sm">
                ▲
              </button>
              <button className="nav-btn w-7 h-7 rounded border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] transition-all flex items-center justify-center text-sm">
                ▼
              </button>
              <div className="nav-sep h-px bg-[var(--border)] my-0.5"></div>
              <button className="nav-btn w-7 h-7 rounded border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] transition-all flex items-center justify-center text-sm">
                ◀
              </button>
              <button className="nav-btn w-7 h-7 rounded border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] transition-all flex items-center justify-center text-sm">
                ▶
              </button>
              <div className="nav-sep h-px bg-[var(--border)] my-0.5"></div>
              <button className="nav-btn w-7 h-7 rounded border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-sec)] hover:bg-[var(--bg-hover)] hover:border-[var(--border-hi)] hover:text-[var(--text-pri)] transition-all flex items-center justify-center text-sm">
                ⊙
              </button>
            </div>

            {/* Canvas */}
            <div className="absolute inset-0 flex">
              {children}
            </div>

            {/* Grid overlay */}
            <div className="canvas-grid absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-35 pointer-events-none"></div>
          </div>
        </ResizablePanel>

        {rightOpen && (
        <>
          <ResizableHandle className="w-1 bg-[var(--border)] hover:bg-[var(--border-hi)] transition-colors" />
          <ResizablePanel minSize={15} maxSize={30} defaultSize={20} className="sidebar right bg-[var(--bg-panel)] border-l border-[var(--border)] flex flex-col flex-shrink-0 transition-all duration-300 overflow-hidden">
            <RightSidebar />
          </ResizablePanel>
        </>
      )}

      </ResizablePanelGroup>

      <StatusBar selected={selected} mode={mode} />
    </div>
  );
}
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
//     const [selected, setSelected] = useState(null);
// const [mode, setMode] = useState<"translate" | "rotate" | "scale">("translate");
  const { leftOpen, rightOpen } = useUI();
  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-gray-300">

      <TopMenu />
      <Toolbar />

      <ResizablePanelGroup direction="horizontal" className="flex-1">

       {leftOpen && (
        <>
          <ResizablePanel minSize={15} maxSize={30} defaultSize={20}>
            <LeftSidebar />
          </ResizablePanel>
          <ResizableHandle />
        </>
      )}

         <ResizablePanel defaultSize={60}>
        <div className="h-full w-full flex">
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </ResizablePanel>

        {rightOpen && (
        <>
          <ResizableHandle />
          <ResizablePanel minSize={15} maxSize={30} defaultSize={20}>
            <RightSidebar />
          </ResizablePanel>
        </>
      )}

      </ResizablePanelGroup>

      <StatusBar selected={selected} mode={mode} />
    </div>
  );
}
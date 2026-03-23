"use client";

import { createContext, useContext, useState } from "react";

type Mode = "translate" | "rotate" | "scale";

interface UIContextType {
  leftOpen: boolean;
  rightOpen: boolean;
  mode: Mode;

  setLeftOpen: (v: boolean) => void;
  setRightOpen: (v: boolean) => void;
  setMode: (m: Mode) => void;
}

const UIContext = createContext<UIContextType | null>(null);

export function UIProvider({ children }: any) {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [mode, setMode] = useState<Mode>("translate");

  return (
    <UIContext.Provider
      value={{
        leftOpen,
        rightOpen,
        mode,
        setLeftOpen,
        setRightOpen,
        setMode,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used inside UIProvider");
  return ctx;
}
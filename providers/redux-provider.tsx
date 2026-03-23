"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

// 👇 PersistGate ko dynamic load karo
const PersistGate = dynamic(
  () =>
    import("redux-persist/integration/react").then(
      (mod) => mod.PersistGate
    ),
  { ssr: false }
);

export function ReduxProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
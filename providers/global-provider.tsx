"use client";

import { NotificationProvider } from "./notification-provider";
import { ReduxProvider } from "./redux-provider";
import { ThemeProviderWrapper } from "./theme-provider";



export function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <ThemeProviderWrapper>
        {children}
        <NotificationProvider />
      </ThemeProviderWrapper>
    </ReduxProvider>
  );
}
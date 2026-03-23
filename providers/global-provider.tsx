"use client";

import { NotificationProvider } from "./notification-provider";
import { ReduxProvider } from "./redux-provider";
import { ThemeProviderWrapper } from "./theme-provider";
import { UIProvider } from "./ui-provider";



export function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <ThemeProviderWrapper>
        <UIProvider>

        {children}
        </UIProvider>
        <NotificationProvider />
      </ThemeProviderWrapper>
    </ReduxProvider>
  );
}
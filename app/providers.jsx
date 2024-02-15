// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";

export function Providers({ children }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}

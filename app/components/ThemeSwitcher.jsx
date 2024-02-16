// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { MoonStar } from "lucide-react";
import { SunMedium } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleClick() {
    if (theme == "light") setTheme("dark");
    if (theme == "dark") setTheme("light");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={handleClick}
      isIconOnly
      variant="flat"
      className="bg-transparent"
      disableRipple
    >
      {theme == "light" ? (
        <MoonStar color="#0ea5e9" />
      ) : (
        <SunMedium color="#0ea5e9" />
      )}
    </Button>
  );
}

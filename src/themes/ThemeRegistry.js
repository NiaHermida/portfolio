"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { ColorModeContext } from "./ColorModeContext";
import { getPalette } from "@/app/styles/themes";

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = useState("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("mui-color-mode");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setMode(stored || system);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("mui-color-mode", mode);
    document.body.classList.remove("mode-light", "mode-dark");
    document.body.classList.add(`mode-${mode}`);
  }, [mode, hydrated]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () => createTheme({ palette: getPalette(mode) }),
    [mode]
  );

  if (!hydrated) return null;

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

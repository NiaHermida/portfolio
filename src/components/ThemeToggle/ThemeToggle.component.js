"use client";
import { useContext } from "react";
import { Button } from "@mui/material";
import { ColorModeContext } from "@themes/ColorModeContext";

const ThemeToggle = () => {
  const colorMode = useContext(ColorModeContext);

  if (!colorMode) return null;

  return (
    <Button onClick={colorMode.toggleColorMode} color="contained">
      {colorMode.mode === "dark" ? "Tema claro" : "Tema oscuro"}
    </Button>
  );
};

export default ThemeToggle;

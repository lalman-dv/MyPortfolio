import type { ReactNode } from "react";
import { ThemeProvider } from "./context/ThemeContext";

export const renderWithTheme = (ui: ReactNode) => {
  return <ThemeProvider>{ui}</ThemeProvider>;
};

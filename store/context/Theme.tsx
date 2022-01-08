import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export const ThemeConsumer = ThemeContext.Consumer;

export default function ThemeProvider() {
  return <div></div>;
}

export const useTheme = () => useContext(ThemeContext);

import { createContext } from "react";

type isDarkModeType = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const isDarkModeContext = createContext<isDarkModeType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export default isDarkModeContext;

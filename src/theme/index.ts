import { theme as baseTheme, extendTheme } from "@chakra-ui/react";
import { default as breakpoints } from "./breakpoints";
import foundations from "./foundations";
import components from "./components";
import typography from "./typography";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ components, ...typography, ...foundations, breakpoints, config });

export default theme;

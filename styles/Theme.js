// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1600px",
};

// 3. Extend the theme
const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#EEDABB", // Use any color from the palette
        color: "black",
      },
    },
  },
});

export default theme;

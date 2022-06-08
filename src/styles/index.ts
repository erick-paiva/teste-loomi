import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    purple: {
      500: "#5A4CA7",
    },
    black: {
      300: "#393C56",
      400: "#333333",
      500: "#1E252B",
    },
    brown: {
      400: "#4D4141",
    },
    gray: {
      50: "#F3F5F6",
      600: "#4E5D66",
    },
    orange: {
      50: "#F18F7F",
      200: "#F7C982",
      300: "#EDA268",
    },
    red: {
      50: "#F78899",
      100: "#D6628E",
      500: "#E0347D",
      600: "#df1545",
    },
    green: {
      50: "#9FD8D5",
      200: "#109E8E",
    },
    fonts: {
      heading: "Inter",
      body: "Ubuntu",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    styles: {
      global: {
        body: {
          bg: "white",
          color: "black.400",
        },
      },
    },
  },
});

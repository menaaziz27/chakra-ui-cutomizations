const colors = {
  primary: {
    300: "#F1EDFF",
    400: "#E4DBFF",
    500: "#7849FF",
    600: "#5F30E6",
    700: "#4516CC",
  },
  grey: {
    200: "#FAFAFA",
    300: "#EEEEEE",
    400: "#D8D8D8",
    500: "#C2C2C3",
    600: "#8E8E90",
    700: "#717173",
  },
  black: "#212124",
  overlay: "#21212499",
  white: "#FFFFFF",
  green: {
    300: "#E5FBF4",
    400: "#CCF6E9",
    500: "#00D28F",
    600: "#00B976",
    700: "#009F5C",
  },
  red: {
    300: "#FAE6E8",
    400: "#F6CCD1",
    500: "#D0021B",
    600: "#B70002",
    700: "#9D0000",
  },
  orange: {
    300: "#FFEFEA",
    400: "#FFDFD4",
    500: "#FF602A",
  },
  yellow: {
    300: "#FDF8E8",
    400: "#FBF1D1",
    500: "#EAB719",
  },
  blue: {
    300: "#E6F4FF",
    400: "#CDE9FF",
    500: "#0490FF",
  },
} as const;

export type Colors = typeof colors;
export default colors;

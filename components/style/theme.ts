export const theme = {
  colors: {
    lightGray: "#7E7E7E",
    mediumGray: "#5B5B5B",
    darkGray: "#363636",
    red: "#D51717",
    pink: "#FF4A4A",
    facebook: "#3B5998",
    soundcloud: "#FF7700",
    twitter: "#1DA1F2",
    google: "#4885ED",
    paypal: "#2699FB",
    white: "#ffffff",
    black: "#101010"
  },
  gradient: {
    dark: "linear-gradient(#7E7E7E, #101010);"
  },
  shadows: {
    soft: "0px 3px 6px rgba(0, 0, 0, 0.15)",
    softColor: (color: string) => `0px 3px 6px rgba(0, 0, 0, ${color})`
  },
  layout: {
    maxWidth: 1200
  }
};

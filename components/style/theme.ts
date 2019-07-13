export const theme = {
  colors: {
    primary: "rgb(6,47,79)",
    secondary: "rgb(131,23,114)",
    accent: "rgb(184,38,1)",
    black: "rgb(0,0,0)",
    gray: "rgb(232,232,232)",
    darkGray: "rgb(50,50,50)",
    white: "rgb(255,255,255)",
    primaryText: "rgb(50,50,50)",
    secondaryText: "rgb(255,255,255)"
  },
  shadows: {
    soft: "0px 3px 6px rgba(0, 0, 0, 0.15)",
    softColor: (color: string) => `0px 3px 6px rgba(0, 0, 0, ${color})`
  },
  layout: {
    maxWidth: 1200
  }
};
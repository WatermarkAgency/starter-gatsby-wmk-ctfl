import { ColorPalette } from "wmk-color-palette";

export const colors = new ColorPalette([
  // Primary Color
  { value: "#FA8D39", group: "orange", primary: true },
  // Secondary Color
  { value: "#FF9E54", group: "orange", secondary: true },
  // Tertiary Color
  { value: "#B39985", group: "brown", tertiary: true },
  // Accent Color
  { value: "#059AAD", group: "blue", accent: true },
  // Co-Accent Color
  { value: "#39E4FA", group: "blue", coaccent: true },
  // Global Black Color
  { value: "#3a3a3a", group: "black", black: true },
  // Global Text Color
  { value: "#4c4c4c", group: "gray", text: true },
  // Global White Color
  { value: "#fcfcfc", group: "white", reverse: true },
]);

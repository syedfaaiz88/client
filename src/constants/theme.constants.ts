export const themes = [
  "light",
  "dark",
  "forest",
  "dracula",
  "nord",
  "oceanic",
  "autumn",
  "solarized-light",
  "cyberpunk",
] as const;

export type Theme = (typeof themes)[number];

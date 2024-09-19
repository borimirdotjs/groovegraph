import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  white: "#FFFFFF",
  black: "#191414",
  primaryColor: "green",
  spacing: {
    xxs: rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(18),
    lg: rem(24),
    xl: rem(48),
    xxl: rem(64),
  },
  colors: {
    green: ["1DB954", "1DB954", "1DB954", "1DB954", "1DB954", "1DB954", "1DB954", "1DB954", "1DB954", "1DB954"],
  },
  other: {},
});

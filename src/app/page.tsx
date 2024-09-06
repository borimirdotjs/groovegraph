import { MantineProvider } from "@mantine/core";
import { theme } from "./mantine/theme";

export default function Home() {
  return <MantineProvider theme={theme}>hi</MantineProvider>;
}

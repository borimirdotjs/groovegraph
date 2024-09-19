import { Box, Image } from "@mantine/core";
import { FC } from "react";

type LogoProps = {
  height?: number | string;
  width?: number | string;
  maxWidth?: number | string;
};

const Logo: FC<LogoProps> = ({ height = 40, width = "auto", maxWidth = "100%" }) => {
  return (
    <Box style={{ height, width, maxWidth }}>
      <Image src="/images/logo.svg" alt="groove graph logo" h="100%" w="100%" />
    </Box>
  );
};

export default Logo;

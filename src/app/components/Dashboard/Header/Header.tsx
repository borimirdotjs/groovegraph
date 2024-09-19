"use client";

import { FC } from "react";
import classes from "./Header.module.css";
import { Box, Burger } from "@mantine/core";
import Logo from "../../common/Logo/Logo";
import UserInfo from "../UserInfo/UserInfo";

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

const Header: FC<HeaderProps> = ({ toggle, opened }) => {
  return (
    <Box className={classes.container}>
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Logo height={40} />
      <UserInfo />
    </Box>
  );
};

export default Header;

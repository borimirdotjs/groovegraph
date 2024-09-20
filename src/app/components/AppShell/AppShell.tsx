"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { FC, PropsWithChildren } from "react";
import classes from "../Dashboard/Dashboard.module.css";
import Header from "../AppShell/Header/Header";
import NavBar from "../AppShell/NavBar/NavBar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={classes.header}>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar className={classes.navbar} p="md">
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;

"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useSession } from "next-auth/react";
import React, { FC } from "react";
import classes from "../components/Dashboard/Dashboard.module.css";
import Header from "../components/Dashboard/Header/Header";

const Dashboard: FC = () => {
  const session = useSession();

  console.log(session);

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
        Navbar
      </AppShell.Navbar>

      <AppShell.Main></AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;

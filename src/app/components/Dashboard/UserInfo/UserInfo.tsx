import { Avatar, Box, Button, Menu, Text } from "@mantine/core";
import React, { FC } from "react";
import classes from "./UserInfo.module.css";
import { signOut, useSession } from "next-auth/react";
import { modals } from "@mantine/modals";

const UserInfo: FC = () => {
  const session = useSession();

  const userName = session.data?.user?.name?.split(" ")[0];
  const userAvatar = session.data?.user?.image;

  const handleSignout = () => signOut({ callbackUrl: "/" });

  const openModal = () =>
    modals.openConfirmModal({
      title: "Signing out...",
      children: <Text size="sm">Sorry to see you go :sademoji:</Text>,
      labels: { confirm: "Confirm", cancel: "Cancel" },
      onCancel: () => console.log("Cancel"),
      onConfirm: handleSignout,
      confirmProps: { color: "green" },
      centered: true,
      radius: "md",
      withCloseButton: false,
    });

  return (
    <Box className={classes.container}>
      <Text>Hey, {userName} 👋</Text>
      <Menu>
        <Menu.Target>
          <Avatar size="sm" radius="xl" src={userAvatar} className={classes.avatar} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item p={0}>
            <Button size="compact-sm" w="100%" variant="subtle" onClick={openModal}>
              Sign Out
            </Button>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default UserInfo;

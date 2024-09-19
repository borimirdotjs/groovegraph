"use client";

import classes from "./Landing.module.css";
import { Box, Button, Center, Image, Text } from "@mantine/core";
import { signIn } from "next-auth/react";
import React, { FC } from "react";
import Logo from "../common/Logo/Logo";

const Landing: FC = () => {
  const handleSignIn = () => {
    signIn("spotify");
  };

  return (
    <Box className={classes.container}>
      <Logo height={40} width={60} />
      <Box className={classes.hero}>
        <Box className={classes.titleBox}>
          <Text className={classes.title}>
            Your Music, <span style={{ color: "#1DB954" }}>Your Story</span>
          </Text>

          <Text className={classes.subtitle}>
            <strong>GrooveGraph</strong> unlocks the power of your listening history with interactive charts and
            personalized insights. Explore your top tracks, favorite artists, and evolving tastes like never before.
          </Text>
          <Button className={classes.button} size="lg" color="green" onClick={handleSignIn}>
            Sign in with Spotify
          </Button>
        </Box>
        <Center className={classes.imageContainer}>
          <Image
            src="/images/retro-illustration.svg"
            alt="Illustration of a man with audio equipment"
            className={classes.image}
          />
          <Box className={classes.sphere} />
        </Center>
      </Box>

      <Box className={classes.poweredBy}>
        <Text>Powered by</Text>
        <Image src="/images/spotify-logo.svg " alt="spotify logo" h={30} />
      </Box>
    </Box>
  );
};

export default Landing;

"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import AppShell from "../components/AppShell/AppShell";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useSession();

  if (status !== "authenticated") {
    redirect("/");
  }

  return <AppShell>{children}</AppShell>;
};

export default AuthLayout;

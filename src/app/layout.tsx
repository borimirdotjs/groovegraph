import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/providers/SessionProvider";
import { theme } from "./mantine/theme";
import { Albert_Sans } from "next/font/google";
import { ModalsProvider } from "@mantine/modals";

const albert = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  weight: ["100", "200", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GrooveGraph",
  description: "kurec",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={` ${albert.variable}`}>
        <MantineProvider theme={theme} cssVariablesSelector="html">
          <ModalsProvider>
            <SessionProvider session={session}>{children}</SessionProvider>
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

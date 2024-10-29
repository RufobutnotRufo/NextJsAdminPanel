'use client'
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar/NavBar";
import Login from "@/components/navBar/Login";
import { AppProvider, useAppContext } from "@/Context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body>
          <MainContent>{children}</MainContent>
        </body>
      </html>
    </AppProvider>
  );
}

function MainContent({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAppContext();

  return isLoggedIn ? (
    <div className="flex">
      <NavBar />
      {children}
    </div>
  ) : (
    <Login />
  );
}

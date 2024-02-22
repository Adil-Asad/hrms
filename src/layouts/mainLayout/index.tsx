import { PropsWithChildren } from "react";

import SideBar from "./Sidebar";
import Header from "./Header";
import { ThemeProvider } from "next-themes";

export function MainLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <main className="w-full bg-milk flex h-full dark:bg-black">
        <SideBar />
        <div className="w-full">
          <Header />

          {children}
        </div>
      </main>
    </ThemeProvider>
  );
}

export default MainLayout;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  );
}

export default MyApp;

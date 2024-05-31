import type { AppProps } from "next/app";
import { globalStyles } from "@/src/commons/styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

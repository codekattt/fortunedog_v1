import type { AppProps } from "next/app";
import { globalStyles } from "@/src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import Layout from '../src/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
      </Layout>
    </>
  );
}

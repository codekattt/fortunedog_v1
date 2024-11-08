import Head from "next/head";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <>
      <Head>
        <title>운세 봐주는 댕댕이</title>
        <meta name="description" content="강아지가 오늘의 운세를 봐줘요" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/dog2.png" />
      </Head>
    </>
  );
}

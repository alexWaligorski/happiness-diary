import Head from "next/head";
import { Inter } from "next/font/google";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Dose of Happiness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Typography variant="h1">Happiness Diary</Typography>
      <Link href="/diary-page">To Diary</Link>
    </>
  );
}

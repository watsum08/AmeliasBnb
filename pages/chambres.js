import { Box } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import PageHeading from "../components/UI/PageHeading";
import RoomSection from "../components/sections/chambres/RoomSection";
import Head from "next/head";

export default function Chambres() {
  return (
    <>
      <Head>
        <title>Amelia&apos;s BnB - Chambres</title>
        <meta property="og:title" content="Amelia's BnB - Chambres" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Header opacity={1} />

        <PageHeading text="Chambres" />

        <Box>
          <RoomSection />
        </Box>

        <Footer />
      </main>
    </>
  );
}

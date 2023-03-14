import { Box } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import PageHeading from "../components/UI/PageHeading";
import Head from "next/head";
import MapsSection from "../components/sections/emplacement/MapsSection";

export default function Chambres() {
  return (
    <>
      <Head>
        <title>Amelia&apos;s BnB - Emplacement</title>
        <meta property="og:title" content="Amelia's BnB - Chambres" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Header opacity={1} />

        <PageHeading text="Emplacement" />

        <Box>
          <MapsSection />
        </Box>

        <Footer />
      </main>
    </>
  );
}

import { Box, Image } from "@chakra-ui/react";
import Header from "../components/header/Header";
import CardsSection from "../components/sections/home/CardsSection";
import BouveretSection from "../components/sections/home/BouveretSection";
import HeroSection from "../components/sections/home/HeroSection";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amelia&apos;s BnB</title>
        <meta property="og:title" content="Amelia's BnB" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header homePage opacity={1} />

      <main>
        <Box>
          <Box overflow="hidden" pos="relative">
            <Image
              src="static/images/heroimage.jpeg"
              alt="Hero Image"
              animation="heroImage 1s ease-in-out forwards 0.5s"
              filter="brightness(90%)"
              pos="relative"
              draggable="false"
            />
            <HeroSection />

            <BouveretSection />

            <CardsSection />
          </Box>
        </Box>
      </main>

      <Footer />
    </>
  );
}

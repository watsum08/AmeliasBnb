import { Box, Button, Image } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import HeroSection from "../components/sections/home/HeroSection";

export default function Home() {
  return (
    <>
      <Header homePage opacity={1} />
      <Box>
        <Box overflow="hidden" pos="relative">
          <Image
            src="static/images/heroimage.jpeg"
            alt="Hero Image"
            animation="heroImage 2s ease-in-out forwards 1s"
            pos="relative"
            draggable="false"
          />
         <HeroSection />
        </Box>
      </Box>
      <Box bg="#F9FFE9" px={{ sm: 6, md: 10, lg: 16, xl: 24, "2xl": 32 }}>
        Test oksasassssdsfsfaaasasas
      </Box>
    </>
  );
}

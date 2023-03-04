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
            animation= "heroImage 1s ease-in-out forwards 0.5s"
            filter="brightness(90%)"
            pos="relative"
            draggable="false"
          />
         <HeroSection />
        </Box>
      </Box>
    </>
  );
}

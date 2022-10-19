import { Box, Button, Image } from "@chakra-ui/react";
import Header from "../components/Header/Header";

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
          <Box
            w="full"
            textAlign="center"
            fontSize={32}
            color="#fff"
            zIndex={100}
            pos="absolute"
            top="40%"
          >
            <Box bgColor="green" w="fit-content" m="auto" transition="2s all linear" opacity={0}>
              <Box>BIENVENUE CHEZ</Box>
              <Box>Amelia&apos;s Bed and Breakfast</Box>
              <Box>Votre maison au coeur du Bouveret</Box>
              <Button>Découvrir</Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box bg="#F9FFE9" px={{ sm: 6, md: 10, lg: 16, xl: 24, "2xl": 32 }}>
        Test oksasassssdsfsfaaasasas
      </Box>
    </>
  );
}

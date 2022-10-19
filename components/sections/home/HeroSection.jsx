import { Box, Heading } from "@chakra-ui/react";
import Btn from "../../UI/Btn";

const HeroSection = () => {
  return (
    <Box
      w="full"
      textAlign="center"
      fontSize={32}
      color="#fff"
      zIndex={100}
      pos="absolute"
      top="32%"
    >
      <Box
        w="fit-content"
        m="auto"
        transition="1s all linear"
        animation= "fullOpacity 2s ease-in forwards 2s "
        opacity={0}
        fontFamily="'Bellota Text', sans-serif"
      >
        <Box color="#EFE8DE" fontWeight={300}>
          BIENVENUE CHEZ
        </Box>
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize="92"
          fontFamily="Bellota, sans-serif"
          color="#FFCB7D"
          textShadow="-1px -1px 2px #442D00, 1px -1px 2px #442D00, -1px 1px 2px #442D00, 1px 1px 2px #442D00"
          mt={2}
        >
          Amelia&apos;s Bed and Breakfast
        </Heading>
        <Heading
          as="h2"
          fontWeight={300}
          fontFamily="'Bellota Text', sans-serif"
          mt={4}
        >
          Votre maison au coeur du Bouveret
        </Heading>
        <Btn text="Découvrir" m="48px 0 0 0" />
      </Box>
    </Box>
  );
};

export default HeroSection;

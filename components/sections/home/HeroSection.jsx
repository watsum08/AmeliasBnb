import { Box, Heading, Image } from "@chakra-ui/react";
import LinkBtn from "../../UI/LinkBtn";

const HeroSection = () => {
  return (
    <>
      <Box
        w="full"
        textAlign="center"
        fontSize={32}
        color="#fff"
        zIndex={100}
        h={{ base: "600px", md: "800px" }}
      >
        <Image
          src="static/images/heroimage.jpeg"
          alt="Hero Image"
          animation="heroImage 1s ease-in-out forwards 0.5s"
          filter="brightness(90%)"
          pos="relative"
          draggable="false"
          objectFit="cover"
          h="100%"
          zIndex={-999}
        />
        <Box
          w="fit-content"
          m="auto"
          transition="1s all linear"
          animation="fullOpacity 1.5s ease-in forwards 0.5s "
          opacity={0}
          fontFamily="'Bellota Text', sans-serif"
          mt={{ base: "-420px", md: "-550px" }}
        >
          <Box
            color="#EFE8DE"
            fontWeight={300}
            fontSize={{ base: "16px", md: "20px", xl: "24px" }}
          >
            BIENVENUE CHEZ
          </Box>
          <Heading
            as="h1"
            fontWeight="bold"
            fontSize={{ base: "36px", md: "48px", xl: "72px" }}
            fontFamily="Bellota, sans-serif"
            color="#FFCB7D"
            textShadow="-1px -1px 2px #442D00, 1px -1px 2px #442D00, -1px 1px 2px #442D00, 1px 1px 2px #442D00"
            mt={4}
            lineHeight="100%"
          >
            Amelia&apos;s Bed and Breakfast
          </Heading>
          <Heading
            as="h2"
            fontFamily="'Bellota Text', sans-serif"
            mt={6}
            fontSize={{ base: "18px", md: "24px", xl: "28px" }}
          >
            Votre maison au coeur du Bouveret
          </Heading>
          <LinkBtn m="48px auto 0 auto" href="#bouveret">
            Découvrir
          </LinkBtn>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

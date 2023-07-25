import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import LinkBtn from "./UI/LinkBtn";

const LinkCard = (props) => {
  return (
    <Box
      bg="#FAEAD2"
      w="420px"
      p={{ base: 4, md: 8, xl: 12 }}
      filter="drop-shadow(0px 4px 6px #888)"
      textAlign="center"
      pos="relative"
      h={{ base: "500px", md: "600px" }}
    >
      <Image
        src={props.imgSrc}
        alt={props.name}
        mx="auto"
        w="auto"
        h={{ base: "120px", md: "160px" }}
      />
      <Heading
        as="h3"
        fontSize={{ base: "24px", md: "32px" }}
        fontWeight={600}
        textTransform="uppercase"
        my={8}
      >
        {props.name}
      </Heading>
      <Box fontSize={{ base: "16px", md: "18px" }}>{props.description}</Box>
      <Flex pos="absolute" w="full" justify="center" bottom={12} left={0}>
        <LinkBtn href={props.linkHref}>{props.linkText}</LinkBtn>
      </Flex>
    </Box>
  );
};

export default LinkCard;

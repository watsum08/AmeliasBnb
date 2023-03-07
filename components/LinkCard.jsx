import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const LinkCard = (props) => {
  return (
    <Box
      bg="#FAEAD2"
      w="30%"
      p={12}
      filter="drop-shadow(0px 4px 6px #888)"
      textAlign="center"
      pos="relative"
      h="600px"
    >
      <Image src={props.imgSrc} alt={props.name} mx="auto" h="160px" />
      <Heading
        as="h3"
        fontSize="32px"
        fontWeight={600}
        textTransform="uppercase"
        my={6}
      >
        {props.name}
      </Heading>
      <Box>{props.description}</Box>
      <Flex pos="absolute" w="full" ml={-12} justify="center" bottom={12}>
        <Link
          py={3}
          px={5}
          href={props.linkHref}
          textTransform="uppercase"
          rounded="4px"
          bg="#1C989F"
          border="1px solid #045155"
          color="white"
          fontWeight={400}
          fontSize="24px"
        >
          {props.linkText}
        </Link>
      </Flex>
    </Box>
  );
};

export default LinkCard;

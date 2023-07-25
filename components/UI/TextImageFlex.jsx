import { Flex, Box } from "@chakra-ui/react";

const TextImageFlex = (props) => {
  return (
    <Flex
      justify="space-around"
      align="center"
      my={{ base: 24, xl: 32 }}
      flexDir={{ base: props.reverse ? "column-reverse" : "column", xl: "row" }}
      gap={{ base: 4, lg: 8 }}
      lineHeight="140%"
    >
      <Box w={{ base: "full", xl: "45%" }} maxW="75%">
        {props.leftSide}
      </Box>
      <Box w={{ base: "full", xl: "45%" }} maxW="75%">
        {props.rightSide}
      </Box>
    </Flex>
  );
};

export default TextImageFlex;

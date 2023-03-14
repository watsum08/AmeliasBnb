import { Flex, Box } from "@chakra-ui/react";

const TextImageFlex = (props) => {
  return (
    <Flex
      justify="space-around"
      align="center"
      my={{ base: 8, sm:12, md: 16, xl: 32 }}
      flexDir={{ base: "column-reverse", xl: "row" }}
      gap={8}
    >
      <Box w={{ base: "fit-content", xl: "45%" }} maxW="75%">{props.leftSide}</Box>
      <Box w={{ base: "fit-content", xl: "45%" }} maxW="75%">{props.rightSide}</Box>
    </Flex>
  );
};

export default TextImageFlex;

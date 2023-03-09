import { Flex, Box } from "@chakra-ui/react";

const TextImageFlex = (props) => {
  return (
    <Flex
      justify="space-around"
      align="center"
      my={36}
      bg={{ base: "red", "2xl": "green" }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Box w="40%">{props.leftSide}</Box>
      <Box w="40%">{props.rightSide}</Box>
    </Flex>
  );
};

export default TextImageFlex;

import { Box } from "@chakra-ui/react";

const Section = (props) => {
  return (
    <Box maxW="1600px" m={props.m ?? "64px auto"} px="64px" id={props.id}>
      {props.children}
    </Box>
  );
};

export default Section;

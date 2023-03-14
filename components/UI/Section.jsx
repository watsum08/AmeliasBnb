import { Box } from "@chakra-ui/react";

const Section = (props) => {
  return (
    <Box
      maxW="1600px"
      m={props.m ?? "48px auto"}
      mx={props.mx ?? "auto"}
      px={{ base: 2, sm: 4, md: 6, lg: 8, xl: 12, "2xl": 16 }}
      id={props.id}
    >
      {props.children}
    </Box>
  );
};

export default Section;

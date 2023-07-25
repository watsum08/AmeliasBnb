import { Box, Divider, Heading } from "@chakra-ui/react";

const ParagraphHeading = (props) => {
  return (
    <Box w={{ base: "full", xl: "fit-content" }}>
      <Heading
        as="h2"
        fontWeight={500}
        textAlign={{ base: "center", xl: "left" }}
      >
        {props.text}
      </Heading>
      <Divider
        borderColor="black"
        borderWidth="1px"
        mt={3}
        mb={6}
        pr={{ base: 0, lg: 4 }}
      />
    </Box>
  );
};

export default ParagraphHeading;

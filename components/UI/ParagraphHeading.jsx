import { Box, Divider, Heading } from "@chakra-ui/react";

const ParagraphHeading = (props) => {
  return (
    <Box w="fit-content">
      <Heading as="h2" fontWeight={500}>{props.text}</Heading>
      <Divider borderColor="black" borderWidth="1px" mt={3} mb={6} pr={4} />
    </Box>
  );
};

export default ParagraphHeading;

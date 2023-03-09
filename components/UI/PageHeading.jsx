import { Heading } from "@chakra-ui/react";

const PageHeading = (props) => {
  return (
    <Heading
      as="h1"
      mt={48}
      mb={8}
      textAlign="center"
      textTransform="uppercase"
      fontWeight={400}
      borderBottom="1px solid #5A3D0C"
      pb={4}
      px={2}
      w="fit-content"
      mx="auto"
    >
      {props.text}
    </Heading>
  );
};

export default PageHeading;

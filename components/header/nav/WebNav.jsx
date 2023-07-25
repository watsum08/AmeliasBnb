import { UnorderedList } from "@chakra-ui/react";
import NavItems from "./NavItems";

const WebNav = () => {
  return (
    <UnorderedList
      display="inline-flex"
      listStyleType="none"
      w="full"
      justifyContent="flex-end"
      gap={{ sm: 4, md: 6, lg: 12 }}
      my="auto"
      fontFamily="Bellota Text, sans-serif"
      fontSize={{ base: "20px", lg: "24px" }}
      color="#FFDAA4"
      transition="all 0.5s"
    >
      <NavItems />
    </UnorderedList>
  );
};

export default WebNav;

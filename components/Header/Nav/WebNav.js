import { UnorderedList } from "@chakra-ui/react";
import NavItems from "./NavItems";

const WebNav = () => {
  return (
    <UnorderedList
      display="inline-flex"
      listStyleType="none"
      pl={{ sm: 0, md: 2, lg: 4 }}
      pr={6}
      gap={{ sm: 4, md: 6, lg: 8 }}
      my="auto"
      fontFamily="Rambla, sans-serif"
      fontSize="1.5rem"
      color="#975321"
      transition="all 0.5s"
    >
      <NavItems />
    </UnorderedList>
  );
};

export default WebNav;
import { Flex } from "@chakra-ui/react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HomeLink from "./HomeLink";
import MobileNav from "./Nav/MobileNav";
import WebNav from "./Nav/WebNav";
import ReserveButton from "./ReserveButton";

const Header = (props) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  return (
    <Flex
      bg={props.homePage ? "transparent" : "#F9FFE9" }
      px={{ base: 4, sm: 6, md: 10, lg: 16, xl: 24, "2xl": 32 }}
      py={4}
      transition="all 0.5s"
      w="full"
      align="center"
      justify="space-between"
      position="absolute"
      zIndex={100}
      opacity={props.opacity}
    >
      {isMobile && <MobileNav />}
      <HomeLink />
      <Flex mt={{ base: 0, md: 4 }} w={isMobile ? "auto" : "full"} justify="space-between">
        {!isMobile && <WebNav />}
        <ReserveButton />
      </Flex>
    </Flex>
  );
};

export default Header;

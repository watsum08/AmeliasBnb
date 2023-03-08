import { Flex } from "@chakra-ui/react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HomeLink from "./HomeLink";
import MobileNav from "./nav/MobileNav";
import WebNav from "./nav/WebNav";

const Header = (props) => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  return (
    <header>
      <Flex
        bg={props.homePage ? "transparent" : "#452D12"}
        px={{ base: 4, sm: 6, md: 10, lg: 16, xl: 24, "2xl": 32 }}
        py={{ base: 4, md: 6 }}
        transition="all 0.5s"
        align="center"
        justify="space-between"
        position="relative"
        zIndex={100}
        opacity={props.opacity}
        w="full"
        h="auto"
        mb="-128px"
      >
        {isMobile && <MobileNav />}
        <HomeLink />
        <Flex
          mt={{ base: 0, md: 4 }}
          w={isMobile ? "auto" : "full"}
          justify="space-between"
        >
          {!isMobile && <WebNav />}
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;

import { Box, Flex, Link, List, Text } from "@chakra-ui/react";
import NavItem from "./header/nav/NavItem";
import NavItems from "./header/nav/NavItems";
import Section from "./UI/Section";

const Footer = () => {
  return (
    <footer>
      <Section m="160px auto 0">
        <Flex
          borderTop="1px solid #5A3D0C"
          justify="space-between"
          align="center"
          flexDir={{ base: "column", lg: "row" }}
          flexWrap="wrap"
        >
          <List
            py={6}
            px={10}
            fontSize={{ base: "16px", lg: "20px" }}
            m="auto"
          >
            <Flex
              gap={{ base: 4, lg: 6, xl: 8 }}
              flexDir={{ base: "column", lg: "row" }}
              align="center"
            >
              <NavItem page="/" name="Accueil" />
              <NavItems />
            </Flex>
          </List>

          <Box
            fontSize={{ base: "14px", lg: "18px" }}
            textAlign="center"
            mx="auto"
            my={4}
          >
            Amelia&apos;s Bed and Breakfast {new Date().getFullYear().toString()} -
            Site crée par{" "}
            <Link href="https://marcmeynet.ch" color="cyan.700" isExternal>
              marcmeynet.ch
            </Link>
          </Box>
        </Flex>
      </Section>
    </footer>
  );
};

export default Footer;

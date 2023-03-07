import { Flex, List, Text } from "@chakra-ui/react";
import NavItem from "./header/nav/NavItem";
import NavItems from "./header/nav/NavItems";
import Section from "./UI/Section";

const Footer = () => {
  return (
    <footer>
      <Section m="0 auto">
        <Flex borderTop="1px solid #5A3D0C" justify="space-between" align="center">
          <List py={8} px={10} fontSize="20px">
            <Flex gap={8}>
              <NavItem page="/" name="Accueil" />
              <NavItems />
            </Flex>
          </List>

          <Text fontSize="20px">
            Amelia’s Bed and Breakfast 2022 - Site crée par marcmeynet.ch
          </Text>
        </Flex>
      </Section>
    </footer>
  );
};

export default Footer;

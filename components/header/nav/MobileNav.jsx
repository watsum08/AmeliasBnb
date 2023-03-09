import {
  UnorderedList,
  useDisclosure,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItems from "./NavItems";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        as={IconButton}
        aria-label="Menu"
        icon={<HamburgerIcon boxSize={8} />}
        onClick={onOpen}
        bg="none"
        color="#FFDAA4"
        size={8}
        p={2}
        _hover={{ bg: "none" }}
        _active={{}}
        pos="absolute"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#F9FFE9">
          <DrawerCloseButton />

          <DrawerBody>
              <UnorderedList listStyleType="none">
                  <NavItems />
              </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <UnorderedList
        display="none"
        listStyleType="none"
        pl={{ sm: 0, md: 2, lg: 4 }}
        pr={6}
        gap={{ sm: 4, md: 6, lg: 8 }}
        my="auto"
        fontSize="1.5rem"
        color="#975321"
        transition="all 0.5s"
      >
        <NavItems />
      </UnorderedList>
    </>
  );
};

export default MobileNav;

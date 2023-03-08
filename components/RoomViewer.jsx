import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import LinkBtn from "./UI/LinkBtn";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RoomViewer = (props) => {
  return (
    <Flex
      w="fit-content"
      h="auto"
      bg="#FAEAD2"
      gap={4}
      align="center"
      mx="auto"
      p={8}
    >
      <Button
        bg="none"
        w="fit-content"
        h="auto"
        px={4}
        py={16}
        mr={4}
        opacity={1}
        _hover={{ opacity: 0.7 }}
        _active={{}}
      >
        <FaChevronLeft size="48px" color="#0E7980" />
      </Button>

      <Flex gap="16px" flexDir="column">
        <Button
          m={0}
          p={0}
          w="140px"
          h="auto"
          onClick={() => alert("change image to otherImg[0]")}
        >
          <Image
            src={props.otherImg[0]}
            w="140px"
            h="140px"
            alt={props.roomName}
          />
        </Button>

        <Button
          m={0}
          p={0}
          w="140px"
          h="auto"
          onClick={() => alert("change image to otherImg[1]")}
        >
          <Image
            src={props.otherImg[1]}
            w="140px"
            h="140px"
            alt={props.roomName}
          />
        </Button>

        <Button
          m={0}
          p={0}
          w="140px"
          h="auto"
          onClick={() => alert("change image to otherImg[2]")}
        >
          <Image
            src={props.otherImg[2]}
            w="140px"
            h="140px"
            alt={props.roomName}
          />
        </Button>
      </Flex>

      <Image
        src={props.activeImgSrc}
        w="640px"
        h="452px"
        alt={props.roomName}
      />

      <Flex
        flexDir="column"
        justify="space-between"
        h="452px"
        textAlign="center"
        w="auto"
        m="auto"
        minW="320px"
        py={4}
        border="1px solid #777"
      >
        <Text fontSize="28px">Chambre 1</Text>
        <List display="flex" flexDir="column" lineHeight="40px" fontSize="20px">
          <ListItem>Lit double</ListItem>
          <ListItem>Lit double</ListItem>
          <ListItem>Lit double</ListItem>
          <ListItem>Lit double</ListItem>
          <ListItem>Lit double</ListItem>
        </List>

        <Box>
          <LinkBtn href="/contact" m="auto">
            Réserver
          </LinkBtn>
          <Text mt={2}>Vérifiez la disponibilité</Text>
        </Box>
      </Flex>

      <Button
        bg="none"
        w="fit-content"
        h="auto"
        px={4}
        py={16}
        ml={4}
        opacity={1}
        _hover={{ opacity: 0.7 }}
        _active={{}}
      >
        <FaChevronRight size="48px" color="#0E7980" />
      </Button>
    </Flex>
  );
};

export default RoomViewer;

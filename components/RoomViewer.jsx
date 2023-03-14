import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import LinkBtn from "./UI/LinkBtn";
import { BsZoomIn } from "react-icons/bs";

const RoomViewer = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="auto"
      h="auto"
      bg="#FAEAD2"
      align="center"
      p={{ base: 2, sm: 3, md: 4, lg: 5, xl: 4 }}
      mx="auto"
      filter="drop-shadow(0px 4px 6px #888)"
      flexDir={{ base: "column", "2xl": "row" }}
    >
      <Flex gap={{ base: 1, sm: 2, md: 4 }} flexDir={{ base: "column-reverse", xl: "row" }}>
        <Flex gap={{ base: 1, sm: 2, md: 4 }} flexDir={{ base: "row", xl: "column" }} justify="center">
          <Button
            m={0}
            p={0}
            w={{ base: "48px", sm: "128px", md: "132px" }}
            h="auto"
            onClick={() => setActiveIndex(0)}
            rounded="none"
          >
            <Image
            w={{ base: "48px", sm: "128px", md: "132px" }}
            h={{ base: "48px", sm: "128px", md: "132px" }}
              src={props.img[0]}
              alt={props.roomName}
              _hover={{
                outline: "1px solid #452D12",
                filter: "brightness(0.5)",
              }}
              transition="0.2s all"
            />
          </Button>

          <Button
            m={0}
            p={0}
            w={{  base: "48px", sm: "128px", md: "132px" }}
            h="auto"
            onClick={() => setActiveIndex(1)}
          >
            <Image
              src={props.img[1]}
              w={{ base: "48px", sm: "128px", md: "132px" }}
              h={{ base: "48px", sm: "128px", md: "132px" }}
              alt={props.roomName}
              _hover={{
                outline: "1px solid #452D12",
                filter: "brightness(0.5)",
              }}
              transition="0.2s all"
            />
          </Button>

          <Button
            m={0}
            p={0}
            w={{  base: "48px", sm: "128px", md: "132px" }}
            h="auto"
            onClick={() => setActiveIndex(2)}
          >
            <Image
              src={props.img[2]}
              w={{ base: "48px", sm: "128px", md: "132px" }}
              h={{ base: "48px", sm: "128px", md: "132px" }}
              alt={props.roomName}
              _hover={{
                outline: "1px solid #452D12",
                filter: "brightness(0.5)",
              }}
              transition="0.2s all"
            />
          </Button>
        </Flex>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          blockScrollOnMount={false}
        >
          <ModalOverlay />
          <ModalContent minW="70%" bg="none">
            <Text
              color="white"
              textAlign="left"
              pl={4}
              fontSize="32px"
              lineHeight="180%"
              fontWeight={600}
              textShadow="0 0 8px black"
            >
              {props.roomName}
            </Text>
            <ModalBody p={1} bg="none">
              <Image
                src={props.img[activeIndex]}
                w="full"
                h="auto"
                alt={props.roomName}
                filter="drop-shadow(0px 4px 6px black)"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
        <Box
          bgImage={props.img[activeIndex]}
          w={{ base: "full", sm: "360px", md: "420px", lg: "540px", xl: "640px" }}
          h={{ base: "240px", sm: "240px", md: "280px", lg: "360px", xl: "auto" }}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPos="center"
          alt={props.roomName}
          onClick={onOpen}
          cursor="pointer"
          _hover={{
            outline: "1px solid #452D12",
            filter: "brightness(0.5)",
          }}
          transition="0.2s all"
          pos="relative"
          mx="auto"
        >
          <Flex
            align="center"
            justify="center"
            h="full"
            opacity={0}
            _hover={{ opacity: 1, filter: "brightness(1)" }}
            transition="0.2s all"
          >
            <BsZoomIn
              size="48px"
              zIndex={111}
              color="white"
            />
          </Flex>
        </Box>
      </Flex>

      <Flex
        flexDir="column"
        justify={{ base: "center", "2xl": "space-between" }}
        h={{ base: "auto", "2xl": "full" }}
        textAlign="center"
        w={{ base: "full", "2xl": "auto" }}
        minW={{ base: 0, "2xl": "320px" }}
        gap={{ base: 4, lg: 6, "2xl": 0 }}
        mt={4}
        py={{ base: 0, sm: 1, md: 2, "2xl": 4 }}
      >
        <Text fontSize="28px">{props.roomName}</Text>
        <List display="flex" flexDir="column" lineHeight="36px" fontSize="20px">
          {props.description.map((data, index) => (
            <ListItem key={index}>{data}</ListItem>
          ))}
        </List>

        <Box>
          <LinkBtn href="/contact" m="auto">
            Réserver
          </LinkBtn>
          <Text mt={2}>Vérifiez la disponibilité</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default RoomViewer;

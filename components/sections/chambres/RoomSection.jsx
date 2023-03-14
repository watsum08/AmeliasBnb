import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import RoomViewer from "../../RoomViewer";
import Section from "../../UI/Section";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const HeroSection = () => {
  const rooms = [
    {
      name: "Chambre 1",
      images: [
        "/static/images/chambre1.jpg",
        "/static/images/chambre1.jpg",
        "/static/images/chambre1.jpg",
      ],
      description: ["Lit double", "Lit simple", "Lit double", "Lit simple"],
    },
    {
      name: "Chambre 2",
      images: [
        "/static/images/chambre1.jpg",
        "/static/images/chambre1.jpg",
        "/static/images/chambre1.jpg",
      ],
      description: ["Lit double", "Lit simple", "Lit double", "Lit simple"],
    },
    {
      name: "Chambre 3",
      images: [
        "/static/images/chambre1.jpg",
        "/static/images/chambre1.jpg",
        "/static/images/chambre1.jpg",
      ],
      description: ["Lit double", "Lit simple", "Lit double", "Lit simple"],
    },
    {
      name: "Chambre 4",
      images: [
        "/static/images/chambre1.jpg",
        "/static/images/chambre1.jpg",
        "/static/images/chambre1.jpg",
      ],
      description: ["Lit double", "Lit simple", "Lit double", "Lit simple"],
    },
  ];
  const [roomDisplayed, setRoomDisplayed] = useState(0);

  return (
    <Section m="32px auto">
      <Box>
        <Heading as="h4" fontSize="24px" fontWeight={400} textAlign="center">
          Choisissez entre nos 6 chambres conçues pour rendre votre séjour
          confortable
        </Heading>

        <Flex my={6}>
          <Button
            bg="none"
            w="fit-content"
            h="auto"
            px={4}
            py={16}
            opacity={1}
            _hover={{ opacity: 0.7 }}
            _active={{}}
            onClick={() =>
              setRoomDisplayed(
                roomDisplayed > 0 ? roomDisplayed - 1 : roomDisplayed
              )
            }
          >
            <FaChevronLeft size="48px" color="#0E7980" />
          </Button>
          <RoomViewer
            roomName={rooms[roomDisplayed].name}
            img={rooms[roomDisplayed].images}
            description={rooms[roomDisplayed].description}
          />
          <Button
            bg="none"
            w="fit-content"
            h="auto"
            px={4}
            py={16}
            opacity={1}
            _hover={{ opacity: 0.7 }}
            _active={{}}
            onClick={() =>
              setRoomDisplayed(
                roomDisplayed < rooms.length - 1
                  ? roomDisplayed + 1
                  : roomDisplayed
              )
            }
          >
            <FaChevronRight size="48px" color="#0E7980" />
          </Button>
        </Flex>
      </Box>
    </Section>
  );
};

export default HeroSection;

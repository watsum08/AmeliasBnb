import { Box, Text } from "@chakra-ui/react";
import RoomViewer from "../../RoomViewer";
import Section from "../../UI/Section";

const HeroSection = () => {
  const roomName = "Chambre 1";
  const otherRoomsSrc = [
    "/static/images/chambre1.jpg",
    "/static/images/chambre1.jpg",
    "/static/images/chambre1.jpg",
  ];

  const activeRoomSrc = "/static/images/chambre1.jpg";
  return (
    <Section>
      <Box>
        <Text>
          Choisissez entre nos 6 chambres conçues pour rendre votre séjour
          confortable :
        </Text>
        <RoomViewer
          roomName={roomName}
          otherImg={otherRoomsSrc}
          activeImgSrc={activeRoomSrc}
        />
      </Box>
    </Section>
  );
};

export default HeroSection;

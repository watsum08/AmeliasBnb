import { Box } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import PageHeading from "../components/UI/PageHeading";
import RoomSection from "../components/sections/chambres/RoomSection";

export default function Chambres() {
  return (
    <>
      <Header opacity={1} />

      <PageHeading text="Chambres" />

      <Box>
        <RoomSection />
      </Box>
      
      <Footer />
    </>
  );
}

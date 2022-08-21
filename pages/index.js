import { Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
    <Header bgColor="#F9FFE9"/>
    <Box bg="#F9FFE9" px={{ sm: 6, md: 10, lg: 16, xl: 24, "2xl": 32 }}>Test hello</Box>
    </>
  )
}

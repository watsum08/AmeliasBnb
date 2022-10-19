import "../styles/globals.css";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box bg="#D3D9AE">
        <Container maxW={1920} p={0}>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;

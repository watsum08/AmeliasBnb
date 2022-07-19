import "../styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxW={1200} bg="yellow.400" p={0}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;

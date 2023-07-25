import "../styles/globals.css";
import "../styles/scrollbar.css";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import theme from "../styles/Theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily="'Baloo Tamma 2', sans-serif" fontSize="110%">
        <Container maxW={1920} p={0}>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;

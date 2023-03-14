import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import MapsLocator from "../../MapsLocator";
import Section from "../../UI/Section";

const MapsSection = () => {
  return (
    <Section>
      <Flex
        justify="center"
        align={{ base: "center", lg: "flex-start" }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          w={{ base: "90%", lg: "40%" }}
          h={{ base: "60vh", lg: "40vw" }}
          minW="280px"
          minH="320px"
          maxW="600px"
          maxH="600px"
          p={{ base: 1, sm: 2, md: 4 }}
          bg="#FAEAD2"
          boxShadow="xl"
          border="1px solid #F1DDBE"
          zIndex={999}
        >
          <MapsLocator />
        </Box>

        <Box
          w="fit-content"
          h="fit-content"
          bg="#FAEAD2"
          border="1px solid #DBC096"
          borderLeft="none"
          p={8}
          my={4}
        >
          <Heading as="h2">Amelia&apos;s Bed and Breakfast</Heading>
          <Flex flexDir="column" gap={4} mt={4}>
            <Flex gap={2.5} align="center" w="full">
              <Image
                src="/static/icons/home_icon.svg"
                alt="Réfrigérateur"
                w="22px"
                h="22px"
              />
              <Text fontWeight={500} lineHeight="24px">
                Route des Îles 4, 1897 Bouveret
              </Text>
            </Flex>

            <Flex gap={2.5} align="center" w="full">
              <Image
                src="/static/icons/train_icon.svg"
                alt="Connexion Wi-Fi gratuite"
                w="22px"
                h="22px"
              />
              <Text fontWeight={500} lineHeight="24px">
                8 minutes à pied de la gare
              </Text>
            </Flex>

            <Flex gap={2.5} align="center" w="full">
              <Image
                src="/static/icons/car_icon.svg"
                alt="Salle de bains privée"
                w="22px"
                h="22px"
              />
              <Text fontWeight={500} lineHeight="24px">
                15 minutes en voiture jusqu&apos;à Montreux
              </Text>
            </Flex>

            <Flex gap={2.5} align="center" w="full">
              <Image
                src="/static/icons/parking_icon.svg"
                alt="Machine à café"
                w="22px"
                h="22px"
              />
              <Text fontWeight={500} lineHeight="24px">
                Place de parking privée incluse
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Section>
  );
};

export default MapsSection;

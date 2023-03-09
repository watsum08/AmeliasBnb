import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Section from "../../UI/Section";
import TextImageFlex from "../../UI/TextImageFlex";

const OtherSection = () => {
  return (
    <Section>
      <TextImageFlex
        leftSide={
          <Text>
            Accès à la piscine privée ainsi qu&apos;à la cuisine commune inclus
            avec la location d&apos;une chambre.
            <br />
            <br />
            Une place de parking privée pour votre véhicule est également
            incluse.
            <br />
            <br />
            Les animaux de compagnie sont bienvenues dans notre complexe.
            <br />
            <br />
            Veuillez lire nos règlements internes en cliquant ici.
            <br />
            <br />
          </Text>
        }
        rightSide={
          <Box>
            <Text textTransform="uppercase" mb={4}>
              Équipements de chambre
            </Text>
            <Flex bg="orange" px={9} py={6} gap={8} fontSize="18px">
              <Flex flexDir="column" gap={4}>
                <Flex gap={2} align="center" w="full">
                  <Image
                    src="/static/icons/television_icon.svg"
                    alt="Télévision"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Télévision
                  </Text>
                </Flex>

                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/fridge_icon.svg"
                    alt="Réfrigérateur"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Réfrigérateur
                  </Text>
                </Flex>

                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/wifi_icon.svg"
                    alt="Connexion Wi-Fi gratuite"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Connexion Wi-Fi gratuite
                  </Text>
                </Flex>

                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/bathroom_icon.svg"
                    alt="Salle de bains privée"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Salle de bains privée
                  </Text>
                </Flex>

                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/wifi_icon.svg"
                    alt="Machine à café"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Machine à café
                  </Text>
                </Flex>
              </Flex>

              <Flex flexDir="column" gap={4}>
                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/parking_icon.svg"
                    alt="Place de parking incluse"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Place de parking incluse
                  </Text>
                </Flex>

                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/television_icon.svg"
                    alt="Accès piscine"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Accès piscine
                  </Text>
                </Flex>

                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/television_icon.svg"
                    alt="Non-fumeur"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Non-fumeur
                  </Text>
                </Flex>

                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/television_icon.svg"
                    alt="Animaux bienvenues"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Animaux bienvenues
                  </Text>
                </Flex>

                <Flex gap={2.5} align="center" w="full">
                  <Image
                    src="/static/icons/television_icon.svg"
                    alt="Cuisine commune"
                    w="22px"
                    h="22px"
                  />
                  <Text fontWeight={500} lineHeight="24px">
                    Cuisine commune
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        }
      />
    </Section>
  );
};

export default OtherSection;

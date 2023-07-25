import Section from "../../UI/Section";
import { Box, Text, Heading, Flex, Image, Link } from "@chakra-ui/react";

const InfoSection = () => {
  return (
    <Section>
      <Text textAlign="center" my={8}>
        Merci de nous contacter directement par téléphone ou email pour toutes
        demandes.
      </Text>

      <Box
        w="fit-content"
        h="auto"
        p={{ base: 6, md: 16 }}
        bg="#FAEAD2"
        boxShadow="xl"
        border="1px solid #F1DDBE"
        m="auto"
        textAlign="center"
        zIndex={999}
      >
        <Heading as="h2" fontFamily="'Bellota Text', sans-serif">
          Amelia&apos;s Bed and Breakfast
        </Heading>
        <Flex flexDir="column" gap={4} mt={4}>
          <Flex
            gap={2.5}
            align="center"
            w="fit-content"
            m="auto"
            flexDir={{ base: "column", md: "row" }}
          >
            <Image
              src="/static/icons/home_icon.svg"
              alt="Réfrigérateur"
              w="22px"
              h="22px"
            />
            <Text fontWeight={500} lineHeight="24px">
              Route des Îles 4, 1897 Bouveret, Switzerland
            </Text>
          </Flex>

          <Flex
            gap={2.5}
            align="center"
            w="fit-content"
            m="auto"
            flexDir={{ base: "column", md: "row" }}
          >
            <Image
              src="/static/icons/mail_icon.svg"
              alt="Connexion Wi-Fi gratuite"
              w="22px"
              h="22px"
            />
            <Link
              fontWeight={500}
              lineHeight="24px"
              href="mailto:reservation@ameliasbnb.ch"
              color="cyan.600"
            >
              reservation@ameliasbnb.ch
            </Link>
          </Flex>

          <Flex
            gap={2.5}
            align="center"
            w="fit-content"
            m="auto"
            flexDir={{ base: "column", md: "row" }}
          >
            <Image
              src="/static/icons/call_icon.svg"
              alt="Salle de bains privée"
              w="22px"
              h="22px"
            />
            <Link
              fontWeight={500}
              lineHeight="24px"
              href="tel:+41796181111"
              color="cyan.600"
            >
              +41 79 618 11 11
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Section>
  );
};

export default InfoSection;

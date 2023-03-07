import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import Section from "../../UI/Section";
import LinkCard from "../../LinkCard";

const CardsSection = () => {
  return (
    <Section m="256px auto 160px auto">
      <Flex justify="space-evenly">
        <LinkCard
          imgSrc="/static/icons/bed_icon.png"
          name="Nos chambres"
          description={
            <List w="fit-content" mx="auto">
              <ListItem>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/television_icon.svg"
                    alt="Télévision inclus"
                    w="24px"
                  />
                  <Text fontWeight={500}>Télévision</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/fridge_icon.svg"
                    alt="Réfrigérateur inclus"
                    w="24px"
                  />
                  <Text fontWeight={500}>Réfrigérateur</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/wifi_icon.svg"
                    alt="Connexion Wi-Fi gratuit"
                    w="24px"
                  />
                  <Text fontWeight={500}>Télévision</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/bathroom_icon.svg"
                    alt="Salle de bains privée"
                    w="24px"
                  />
                  <Text fontWeight={500}>Salle de bains privée</Text>
                </Flex>
              </ListItem>
            </List>
          }
          linkText="Voir chambres"
          linkHref="/chambres"
        />

        <LinkCard
          imgSrc="/static/icons/emplacement_icon.png"
          name="Notre emplacement"
          description={
            <List w="fit-content" mx="auto">
              <ListItem>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/train_icon.svg"
                    alt="8 minutes à pied de la gare"
                    w="24px"
                  />
                  <Text fontWeight={500}>8 minutes à pied de la gare</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/car_icon.svg"
                    alt="15 minutes en voiture à Montreux"
                    w="24px"
                  />
                  <Text fontWeight={500}>15 minutes en voiture à Montreux</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/parking_icon.svg"
                    alt="Place de parking privée incluse"
                    w="24px"
                  />
                  <Text fontWeight={500}>Place de parking privée incluse</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/position_icon.svg"
                    alt="Emplacement"
                    w="24px"
                  />
                  <Text fontWeight={500}>Route des Îles 4, 1897 Bouveret</Text>
                </Flex>
              </ListItem>
            </List>
          }
          linkText="Voir emplacement"
          linkHref="/emplacement"
        />

        <LinkCard
          imgSrc="/static/icons/contact_icon.png"
          name="Contact"
          description={
            <Text as="p" textAlign="justify" fontWeight={500}>
              Envoyez nous un mail ou appelez nous directement pour toutes
              questions et réservations.
              <br />
              <br />
              Vous pouvez également réserver nos chambres sur booking.com
            </Text>
          }
          linkText="Contactez-nous"
          linkHref="/contact"
        />
      </Flex>
    </Section>
  );
};

export default CardsSection;

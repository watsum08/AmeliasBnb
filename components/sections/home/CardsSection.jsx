import { Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import Section from "../../UI/Section";
import LinkCard from "../../LinkCard";

const CardsSection = () => {
  return (
    <Section m="128px auto 64px">
      <Flex justify="space-evenly" flexWrap="wrap" gap={16}>
        <LinkCard
          imgSrc="/static/icons/bed_icon.png"
          name="Chambres"
          description={
            <List w="fit-content" mx="auto">
              <ListItem>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/television_icon.svg"
                    alt="Télévision inclus"
                    w="24px"
                  />
                  <Text fontWeight={400}>Télévision</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/fridge_icon.svg"
                    alt="Réfrigérateur inclus"
                    w="24px"
                  />
                  <Text fontWeight={400}>Réfrigérateur</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/wifi_icon.svg"
                    alt="Connexion Wi-Fi gratuit"
                    w="24px"
                  />
                  <Text fontWeight={400}>Télévision</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={4}>
                  <Image
                    src="/static/icons/bathroom_icon.svg"
                    alt="Salle de bains privée"
                    w="24px"
                  />
                  <Text fontWeight={400}>Salle de bains privée</Text>
                </Flex>
              </ListItem>
            </List>
          }
          linkText="Chambres"
          linkHref="/chambres"
        />

        <LinkCard
          imgSrc="/static/icons/emplacement_icon.png"
          name="Emplacement"
          description={
            <List w="fit-content" mx="auto">
              <ListItem>
                <Flex align="center" gap={{ base: 2, md: 4}}>
                  <Image
                    src="/static/icons/train_icon.svg"
                    alt="8 minutes à pied de la gare"
                    w="24px"
                  />
                  <Text fontWeight={400}>8 min. à pied de la gare</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={{ base: 2, md: 4}}>
                  <Image
                    src="/static/icons/car_icon.svg"
                    alt="15 minutes en voiture à Montreux"
                    w="24px"
                  />
                  <Text fontWeight={400}>15 min. en voiture à Montreux</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={{ base: 2, md: 4}}>
                  <Image
                    src="/static/icons/parking_icon.svg"
                    alt="Place de parking privée incluse"
                    w="24px"
                  />
                  <Text fontWeight={400}>Place de parking privée incluse</Text>
                </Flex>
              </ListItem>
              <ListItem mt={3}>
                <Flex align="center" gap={{ base: 2, md: 4}}>
                  <Image
                    src="/static/icons/position_icon.svg"
                    alt="Emplacement"
                    w="24px"
                  />
                  <Text fontWeight={400}>Route des Îles 4, 1897 Bouveret</Text>
                </Flex>
              </ListItem>
            </List>
          }
          linkText="Emplacement"
          linkHref="/emplacement"
        />

        <LinkCard
          imgSrc="/static/icons/contact_icon.png"
          name="Reservation"
          description={
            <Text as="p" textAlign="justify" fontWeight={400}>
              Envoyez nous un mail ou appelez nous directement pour toutes
              questions et réservations.
              <br />
              <br />
            </Text>
          }
          linkText="Reservation"
          linkHref="/reservation"
        />
      </Flex>
    </Section>
  );
};

export default CardsSection;

import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import ParagraphHeading from "../../UI/ParagraphHeading";
import Section from "../../UI/Section";

const BouveretSection = () => {
  return (
    <Section m="128px auto" id="bouveret">
      <Flex justify="space-around" align="center" my={36}>
        <Box w="40%">
          <ParagraphHeading text="Le Bouveret" />
          <Text as="p" textAlign={{ base: "center", xl: "justify" }}>
            Situé dans le canton du Valais au bord du Léman, ce village propose
            de nombreuses activités et d&apos;événements pour les personnes de
            toutes âges.
            <br />
            <br /> Que vous soyez en famille, en couple ou seul dans votre
            aventure, c&apos;est l&apos;endroit parfait pour passer un été
            inoubliable.
            <br />
            <br />
            Découvrez plus du Bouveret sur{" "}
            <Link isExternal href="bouveret.ch" color="blue">
              bouveret.ch
            </Link>
          </Text>
        </Box>
        <Box w="40%">
          <Image
            src="/static/images/lake_image.jpg"
            alt="Photo du lac au Bouveret"
            border="4px ridge gray"
          />
        </Box>
      </Flex>

      <Flex justify="space-around" align="center" my={36}>
        <Box w="40%">
          <Image
            src="/static/images/pool_image.jpg"
            alt="Photo de notre piscine privée"
            border="4px ridge gray"
          />
        </Box>
        <Box w="40%">
          <ParagraphHeading text="Envie de se rafraîchir ?" />
          <Text as="p" textAlign={{ base: "center", xl: "justify" }}>
            Lors de votre séjour, si les conditions météorologiques le permet,
            profitez d&apos;un accès gratuit à notre piscine privée. <br />
            <br />
            Détendez-vous dans notre jacuzzi pour un supplément de 10.- CHF par
            personne (30 minutes). <br />
            <br />
            Vous pouvez également vous baigner au lac à moins de 10 minutes de
            marche.
          </Text>
        </Box>
      </Flex>

      <Flex justify="space-around" align="center" my={36}>
        <Box w="40%">
          <ParagraphHeading text="Petit-déjeuner" />
          <Text as="p" textAlign={{ base: "center", xl: "justify" }}>
            Commencez votre journée par un repas frais et varié avec du café, du
            thé ou du jus de fruits selon vos désirs.
            <br />
            <br />
            Nous servons le petit-déjeuner à partir de 7 heures du matin pour un
            supplément de 15.- CHF par personne.
            <br />
            <br />
            Veuillez nous prévenir si vous avez des allergies ou des
            intolérances pour que nous vous préparions un repas adapté.
          </Text>
        </Box>
        <Box w="40%">
          <Image
            src="/static/images/breakfast_image.jpg"
            alt="Photo du petit déjeuner"
            border="4px ridge gray"
          />
        </Box>
      </Flex>
    </Section>
  );
};

export default BouveretSection;

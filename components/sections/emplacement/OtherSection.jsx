import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import Section from "../../UI/Section";
import TextImageFlex from "../../UI/TextImageFlex";
import ParagraphHeading from "../../UI/ParagraphHeading";

const OtherSection = () => {
  return (
    <Section>
      <TextImageFlex
        reverse
        leftSide={
          <>
            <ParagraphHeading text="Parking privé" />
            <Text as="p" textAlign={{ base: "center", xl: "justify" }}>
              Garez votre véhicule à quelques pas de votre chambre sur notre
              parking privé.
            </Text>
          </>
        }
        rightSide={
          <Image
            src="/static/images/parking_image.jpg"
            alt="Parking privé"
            border="2px solid gray"
            m="auto"
          />
        }
      />

      <TextImageFlex
        leftSide={
          <Image
            src="/static/images/gare_image.jpg"
            alt="Gare du Bouveret"
            border="2px solid gray"
            m="auto"
          />
        }
        rightSide={
          <>
            <ParagraphHeading text="Gare CFF à proximité" />
            <Text as="p" textAlign={{ base: "center", xl: "justify" }}>
              Vous vous déplacez en train ?
              <br />
              <br />
              Nous sommes à 8 minutes à pied de la gare du Bouveret
            </Text>
          </>
        }
      />
    </Section>
  );
};

export default OtherSection;

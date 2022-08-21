import { Button } from "@chakra-ui/react";

const ReserveButton = () => {
  return (
    <Button
      bg="#AE5311"
      align="center"
      my="auto"
      fontSize={{ base: "1.2em", sm: "1.5em" }}
      fontFamily="Rambla, sans-serif"
      color="#fff"
      px={{ base: 3, sm: 5 }}
      py={1}
      rounded="lg"
      fontWeight={400}
      _hover={{ bg: "#AE5311", opacity: 0.8 }}
      onClick={() => alert("Not yet available")}
    >
      Réservez
    </Button>
  );
};

export default ReserveButton;

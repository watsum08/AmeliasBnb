import { Button } from "@chakra-ui/react";

const Btn = (props) => {
  return (
    <Button
      m={props.m ?? 0}
      bgColor="#1C989F"
      border="1px"
      borderColor="#045155"
      borderRadius="4px"
      textTransform="uppercase"
      fontFamily="'Baloo Tamma 2', sans-serif"
      fontWeight={500}
      fontSize="1.2rem"
      p={5}
      pt={6}
      _hover={{ bgColor: "#28C7D0" }}
      _active={{ bgColor: "#28C7D0" }}

      color="#fff"
    >
      {props.text}
    </Button>
  );
};

export default Btn;

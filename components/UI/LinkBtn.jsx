import { Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

const LinkBtn = (props) => {
  return (
    <ChakraLink as={Link} href={props.href} scroll={false}>
      <Text
        w="fit-content"
        m={props.m ?? "auto"}
        borderRadius="4px"
        textTransform="uppercase"
        fontFamily="'Baloo Tamma 2', sans-serif"
        py={2}
        px={6}
        _hover={{ bgColor: "#28C7D0", cursor: 'pointer' }}
        _active={{ bgColor: "#28C7D0" }}
        bg="#1C989F"
        border="1px solid #045155"
        color="white"
        fontWeight={400}
        fontSize="24px"
      >
        {props.children}
      </Text>
    </ChakraLink>
  );
};

export default LinkBtn;

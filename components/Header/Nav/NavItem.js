import { ListItem, Box } from "@chakra-ui/react";
import Link from "next/link";

const NavItem = (props) => {
  return (
    <ListItem>
      <Link href={props.page}>
        <Box _hover={{ opacity: 0.7, cursor: "pointer" }} lineHeight={props.vertical === 1 ? "50px" : "auto"}>{props.name}</Box>
      </Link>
    </ListItem>
  );
};

export default NavItem;

import { ListItem, Box } from "@chakra-ui/react";
import Link from "next/link";

const NavItem = (props) => {
  return (
    <ListItem>
      <Link href={props.page}>
        <Box transition="all 0.2s" _hover={{ cursor: "pointer", filter: "brightness(70%)" }} textTransform="uppercase">{props.name}</Box>
      </Link>
    </ListItem>
  );
};

export default NavItem;

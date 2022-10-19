import { Image } from "@chakra-ui/react";
import Link from "next/link";

const HomeLink = () => {
  return (
    <Link href="/">
      <Image
        src="static/logoamelia.png"
        alt="Amelia's Logo"
        w={{ sm: 16, md: 20, lg: 24 }}
        m="auto"
        transition="all 0.2s"
        _hover={{ cursor: "pointer", filter: "brightness(70%)" }}
      />
    </Link>
  );
};

export default HomeLink;

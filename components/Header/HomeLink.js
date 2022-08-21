import { Image } from "@chakra-ui/react";
import Link from "next/link";

const HomeLink = () => {
  return (
    <Link href="/">
      <Image
        src="/logoamelia.png"
        alt="Amelia's Logo"
        w={{ base: 36, sm: 44 }}
        _hover={{ cursor: "pointer" }}
      />
    </Link>
  );
};

export default HomeLink;

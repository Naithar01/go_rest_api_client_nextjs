import Link from "next/link";
import {
  Navbar_a_tag,
  Navbar_logo,
  Navbar_logo_wrap,
  Navbar_wrap,
} from "./styled/Navbar";

const Navbar = () => {
  return (
    <Navbar_wrap>
      <Navbar_logo_wrap>
        <Link href="/">
          <Navbar_logo>Main</Navbar_logo>
        </Link>
      </Navbar_logo_wrap>
      <Link href="/post/search">
        <Navbar_a_tag>Search</Navbar_a_tag>
      </Link>
    </Navbar_wrap>
  );
};

export default Navbar;

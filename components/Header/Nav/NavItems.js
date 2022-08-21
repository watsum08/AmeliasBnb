import NavItem from "./NavItem";

const NavItems = (props) => {
  return (
    <>
      <NavItem name="Chambres" page="chambres" vertical={props.vertical} />
      <NavItem name="Emplacement" page="emplacement" vertical={props.vertical} />
      <NavItem name="Contact" page="contact" vertical={props.vertical} />
    </>
  );
};

export default NavItems;

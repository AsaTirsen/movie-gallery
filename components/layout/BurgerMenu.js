import React, { useState } from "react";
import classes from "./BurgerMenu.module.css";
import NavigationLinks from "./NavigationLinks";
import { MdClose } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

function BurgerMenu(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className={classes.navBarSmall}>
      <button className={classes.button} onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose className={classes.icon} />
        ) : (
          <IoIosMenu className={classes.icon} />
        )}
      </button>
      <NavigationLinks
        className={`${classes.menuNav} ${navbarOpen ? classes.showMenu : ""}`}
        onClick={(e) => closeMenu(e)}
      />
    </nav>
  );
}
export default BurgerMenu;

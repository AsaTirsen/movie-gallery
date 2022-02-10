import Link from "next/link";
import classes from "./BurgerMenu.module.css";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

function BurgerMenu() {
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
      <ul
        className={`${classes.menuNav} ${navbarOpen ? classes.showMenu : ""}`}
      >
        <li>
          <Link href="/">
            <a onClick={(e) => closeMenu(e)}>Movies</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a onClick={(e) => closeMenu(e)}>TV-shows</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a onClick={(e) => closeMenu(e)}>Actors</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default BurgerMenu;

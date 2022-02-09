import Link from "next/link";
import classes from "./MainNavigation.module.css";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

function MainNavigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <header className={classes.navigation}>
      <h2 className={classes.title}>The Movie Finder</h2>
      <nav className={classes.navBarLarge}>
        <ul>
          <li>
            <Link href="/">Movies</Link>
          </li>
          <li>
            <Link href="/">TV shows</Link>
          </li>
          <li>
            <Link href="/">Actors</Link>
          </li>
          <li>
            <Link href="/">Sign in</Link>
          </li>
        </ul>
      </nav>
      <nav className={classes.navBarSmall}>
        <button className={classes.button} onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: "#fff", width: "37px", height: "32px" }} />
          ) : (
            <IoIosMenu
              style={{ color: "#333", width: "37px", height: "32px" }}
            />
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
          <li className={classes.listitem}>
            <Link href="/">
              <a onClick={(e) => closeMenu(e)}>TV-shows</a>
            </Link>
          </li>
          <li className={classes.listitem}>
            <Link href="/">
              <a onClick={(e) => closeMenu(e)}>Actors</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

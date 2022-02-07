import { useContext } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

function MainNavigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <header className={classes.header}>
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
            <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
            <FiMenu
              style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
            />
          )}
        </button>
        <ul
          className={`${classes.menuNav} ${navbarOpen ? classes.showMenu : ""}`}
        >
          <li className={classes.listitem}>
            <Link
              href="/"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Movies
            </Link>
          </li>
          <li className={classes.listitem}>
            <Link
              href="/"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              TV-series
            </Link>
          </li>
          <li>
            <Link
              href="/"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Actors
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

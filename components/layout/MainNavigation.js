import { useContext } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>The Movie Finder</h2>
      <nav>
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
    </header>
  );
}

export default MainNavigation;

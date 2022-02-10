import Link from "next/link";
import classes from "./MainNavigation.module.css";
import React, { useState } from "react";

function MainNavigation() {
  return (
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
  );
}

export default MainNavigation;

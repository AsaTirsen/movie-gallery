import Link from "next/link";
import classes from "./MainNavigation.module.css";
import NavigationLinks from "./NavigationLinks";

function MainNavigation() {
  return (
    <nav className={classes.navBarLarge}>
      <NavigationLinks className={null} onCLick={null} />
    </nav>
  );
}

export default MainNavigation;

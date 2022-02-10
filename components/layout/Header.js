import BurgerMenu from "./BurgerMenu";
import classes from "./Header.module.css"
import MainNavigation from "./MainNavigation";


function Header() {
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>The Movie Finder</h2>
      <MainNavigation />
      <BurgerMenu />
    </header>
  );
}
export default Header;
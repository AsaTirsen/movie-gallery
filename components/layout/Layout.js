import Header from "./Header";
import classes from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;

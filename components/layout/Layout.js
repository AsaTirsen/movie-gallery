import Header from "./Header";
import classes from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

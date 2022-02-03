import MainNavigation from './MainNavigation';
import Movies from '../movies/MovieList';
import classes from './Layout.module.css';

function Layout(props) {
    return (
    <div>
      
      

      <MainNavigation/>
      <main className={classes.main}>
        {props.children}
      </main>
    </div>  
  )
}

export default Layout
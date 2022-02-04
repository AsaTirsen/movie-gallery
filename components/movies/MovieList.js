import classes from "./MovieList.module.css";

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function MovieList(props) {
  return (
    <div className={classes.listcontainer}>
      {props.movies.map((movie) => (
        <div className={classes.imagecontainer}>
          {console.log('https://image.tmdb.org/t/p/w500'+ movie.poster_path)}
          <img className={`${classes.imagestyle}`}src={`${baseUrl}${movie.poster_path}`}/>    
        </div>
      ))}
    </div>
  );
}

export default MovieList;

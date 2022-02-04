import classes from "./MovieList.module.css";

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function MovieList(props) {
  return (
    <div className={classes.listcontainer}>
      {props.movies.map((movie) => (
        <div key={movie.id} className={classes.imagecontainer}>
          <img className={`${classes.imagestyle}`}src={`${baseUrl}${movie.poster_path}`}/>
          <div>{movie.title}</div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;

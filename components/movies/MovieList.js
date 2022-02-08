import classes from "./MovieList.module.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MovieList(props) {
  return (
    <div className={classes.listcontainer}>
      {props.movies.map((movie) => (
        <figure key={movie.id} className={classes.imagecontainer}>
          <img
            className={`${classes.imagestyle}`}
            src={`${baseUrl}${movie.poster_path}`}
          />
          <figcaption>{`${
            movie.title || movie.name
          }${movie.year || ""}  ${movie.genres}`}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default MovieList;

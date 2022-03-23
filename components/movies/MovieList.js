import classes from "./MovieList.module.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function MovieList(props) {
  return (
    <article className={classes.listcontainer}>
      {props.movies.map((movie) => (
        <figure key={movie.id} className={classes.imagecontainer}>
          <img
            className={`${classes.imagestyle}`}
            src={`${baseUrl}${movie.poster_path}`}
            alt={`No image found for ${movie.title}`}
          />
          <figcaption>
            <div className={classes.title}>{`${
              movie.title || movie.name
            }`}</div>
            {`${movie.year.slice(0, 4)}`} &bull; {`${movie.genres}`}
          </figcaption>
        </figure>
      ))}
    </article>
  );
}

export default MovieList;

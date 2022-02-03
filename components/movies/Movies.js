function MovieList(props) {
  return (
    <ul>
      {props.movies.map((movie) => (
        <div>
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.original_title}
        </div>
      ))}
    </ul>
  );
}

export default MovieList;

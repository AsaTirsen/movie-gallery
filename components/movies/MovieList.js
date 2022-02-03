const baseUrl = 'https://image.tmdb.org/t/p/original/'

function MovieList(props) {
  return (
    <ul>
      {props.movies.map((movie) => (
        <div>
          {console.log('https://image.tmdb.org/t/p/original'+ movie.poster_path)}
          <img src={`${baseUrl}${movie.poster_path}`}/>
          
        </div>
      ))}
    </ul>
  );
}

export default MovieList;

import { useState, useEffect } from 'react'
import Search from '../components/movies/Search'
import MovieList from '../components/movies/MovieList'

function MoviesPage(props) {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMovies, setloadedMovies] = useState([])

  useEffect(() => {
    setIsLoading(true)
    console.log(Search.value);

    fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=27cfec6c9eb8080cb7d8025ba420e2d7&language=en-US&page=1&include_adult=false'
    ).then(response => {
      return response.json() // .json() returns a promise
    }).then(data => {
      // transform in an array
      const movies = []
      for (const key in data) {
        const movie = {
          id: key,
          ...data[key],
        }
        movies.push(movie)
      }

      setIsLoading(false)
      setloadedMovies(movies)
      console.log({ movies })
    })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return <section>
    <MovieList movies={loadedMovies} />
  </section>
}

export default MoviesPage
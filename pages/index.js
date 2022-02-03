import Head from "next/head";
import styles from "../styles/Home.module.css";
import MovieList from "../components/movies/MovieList";
import { useState, useEffect } from 'react'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMovies, setloadedMovies] = useState([])

  useEffect(() => {
    setIsLoading(true)
    

    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=27cfec6c9eb8080cb7d8025ba420e2d7&language=en-US"
    ).then(response => {
      return response.json() // .json() returns a promise
    }).then(data => {
      // transform in an array  
      const movies = []
      data.results.forEach(result => console.log(result.original_title));
      data.results.forEach(function(result){
        let movie = {
        id:result.id,
        poster_path: result.poster_path,
        title: result.original_title,
        }
        console.log(movie)
        movies.push(movie)
      });
  

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
  

  return <main className={styles.main}>
  <h1 className={styles.title}> Gallery </h1>
    <MovieList movies={loadedMovies} />
</main>
}

  
 



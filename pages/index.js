import styles from "../styles/Home.module.css";
import MovieList from "../components/movies/MovieList";
import { useState, useEffect } from "react";
import Search from "../components/movies/Search";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setloadedMovies] = useState([]);
  const [query, setQuery] = useState("");

  function fetchLatest() {
    fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=27cfec6c9eb8080cb7d8025ba420e2d7&language=en-US"
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setloadedMovies(data.results);
    });
}

  function search(query) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=27cfec6c9eb8080cb7d8025ba420e2d7&language=en-US&query=${query}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setloadedMovies(data.results);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    fetchLatest();
  }, []);

  useEffect(() => {
    if (query === "") {
      fetchLatest();
    } else {
      search(query);
    }
   
  }, [query]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <main className={styles.main}>
      <Search passQuery={setQuery}/>
      <MovieList movies={loadedMovies} />
    </main>
  );
}

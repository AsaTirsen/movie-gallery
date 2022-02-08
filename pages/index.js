import styles from "../styles/Home.module.css";
import MovieList from "../components/movies/MovieList";
import { useState, useEffect } from "react";
import Search from "../components/movies/Search";
import React from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setloadedMovies] = useState([]);
  const [query, setQuery] = useState("");
  const apikey = "27cfec6c9eb8080cb7d8025ba420e2d7";

  // Default on loading, displays latest movies
  function fetchLatest() {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${apikey}&language=en-US`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setloadedMovies(data.results.slice(0, 10));
      });
  }

  // On entering search term, displays best matches
  function search(query) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${query}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setloadedMovies(data.results.slice(0, 10));
      });
  }

  // Sets state for when no active search is being done
  useEffect(() => {
    setIsLoading(true);
    fetchLatest();
  }, []);

  // Sets state when search is entered
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
      <div className={styles.page}>
        <Search passQuery={setQuery} />
        <MovieList movies={loadedMovies} />
      </div>
    </main>
  );
}

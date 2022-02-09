import styles from "../styles/Home.module.css";
import MovieList from "../components/movies/MovieList";
import { useState, useEffect } from "react";
import Search from "../components/movies/Search";
import React from "react";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setloadedMovies] = useState([]);
  const [loadedGenres, setloadedGenres] = useState([]);
  const [query, setQuery] = useState("");
  const apikey = "27cfec6c9eb8080cb7d8025ba420e2d7";

  // Converts response to list of movies
  function responseToMovieList(response) {
    return response.results.map((result) => ({
      key: result.id,
      id: result.id,
      poster_path: result.poster_path,
      title: result.title,
      name: result.name,
      year: result.release_date
        ? result.release_date.slice(0, 4)
        : result.first_air_date.slice(0, 4),
      genres: result.genre_ids
        .map(
          (genre_id) => loadedGenres.find((genre) => genre.id === genre_id).name
        )
        .join(", "),
    }));
  }

  // Default on loading, displays latest movies
  function fetchLatest() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setloadedMovies(responseToMovieList(data).slice(0, 10));
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
        setIsLoading(false);
        setloadedMovies(responseToMovieList(data).slice(0, 10));
      });
  }

  function fetchGenres() {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikey}&language=en-US`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setloadedGenres(data.genres);
      });
  }

  // Sets state for when no active search is being done
  useEffect(() => {
    setIsLoading(true);
    fetchGenres();
  }, []);

  // Sets state when search is entered
  useEffect(() => {
    if (loadedGenres.length == 0) {
      // genres not loaded yet, we can't search
      return;
    }
    if (query === "") {
      fetchLatest();
    } else {
      search(query);
    }
  }, [query, loadedGenres]);

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

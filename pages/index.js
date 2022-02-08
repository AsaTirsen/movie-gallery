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
  let apikey = "27cfec6c9eb8080cb7d8025ba420e2d7";

  function createObject(data) {
    const movies = [];
    data.results.map(function (result) {
      // Loops through the ids array to find the matching genre name
      const genres = [];
      result.genre_ids.map(function (genre_id) {
        loadedGenres.map(function (genre) {
          if (genre_id === genre.id) {
            genres.push(genre.name);
          }
          return genres;
        });
      });
      let movie = {
        key: result.id,
        id: result.id,
        poster_path: result.poster_path,
        title: result.title,
        name: result.name,
        year: result.release_date,
        genres: genres.toString(),
      };
      movies.push(movie);
    });
    return movies;
  }

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
        setloadedMovies(createObject(data).slice(0, 10));
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
        setloadedMovies(createObject(data).slice(0, 10));
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
        const genres = [];
        data.genres.map(function (genreItem) {
          let genre = {
            key: genreItem.id,
            id: genreItem.id,
            name: genreItem.name,
          };
          genres.push(genre);
          setIsLoading(false);
          setloadedGenres(genres);
        });
      });
  }

  // Sets state for when no active search is being done
  useEffect(() => {
    setIsLoading(true);
    fetchLatest();
    fetchGenres();
  }, []);

  // Sets state when search is entered
  useEffect(() => {
    fetchGenres();
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

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

  function createObject(data) {
    return data.results.map(function (result) {
      // Loops through the ids array to find the matching genre name
      const genres = [];
      result.genre_ids.forEach(function (genre_id) {
        loadedGenres.forEach(function (genre) {
          console.log(result.title +  result.name +  genre_id)
          if (genre_id === genre.id) {
            genres.push(genre.name);
          }
        });
      });
      return {
        key: result.id,
        id: result.id,
        poster_path: result.poster_path,
        title: result.title,
        name: result.name,
        year: result.release_date ? result.release_date.slice(0, 4): result.first_air_date.slice(0, 4),
        genres: genres.join(", "),
      };
    });
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
        setloadedGenres(data.genres);
        console.log(loadedGenres)
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

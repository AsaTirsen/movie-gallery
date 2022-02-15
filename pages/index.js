import styles from "../styles/Index.module.css";
import MovieList from "../components/movies/MovieList";
import { useState, useEffect, useCallback } from "react";
import Search from "../components/movies/Search";
import React from "react";
import ErrorComponent from "../components/layout/ErrorComponent";
import Loading from "../components/layout/Loading";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setloadedMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [hasError, setHasError] = useState(false);
  const [statusCode, setStatusCode] = useState();
  const apikey = "27cfec6c9eb8080cb7d8025ba420e2d7";
  let baseUrl = "https://api.themoviedb.org/3/"

  // Converts response to list of movies
  const responseToMovieList = (response, genreIds) => {
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
          (genre_id) =>
            genreIds.genres.find((genre) => genre.id === genre_id).name
        )
        .join(", "),
    }));
  };

  // Sets state with req response
  useEffect(() => {
    const fetchFromMovieDb = async () => {
      const urlGenres = `${baseUrl}genre/movie/list?api_key=${apikey}&language=en-US`;
      const urlMovie =
        query === ""
          ? `${baseUrl}movie/now_playing?api_key=${apikey}&language=en-US`
          : `${baseUrl}search/movie?api_key=${apikey}&language=en-US&query=${query}`;

      try {
        const [moviesResponse, genresResponse] = await Promise.all([
          fetch(urlMovie),
          fetch(urlGenres),
        ]);
        const movies = await moviesResponse.json();
        const genreIds = await genresResponse.json();
        if (moviesResponse.ok && genresResponse.ok) {
          setloadedMovies(responseToMovieList(movies, genreIds).slice(0, 10));
        } else {
          throw new Error(moviesResponse.status);
        }
      } catch (error) {
        setHasError(true);
        setStatusCode(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFromMovieDb();
  }, [query]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Search passQuery={setQuery} />
        {isLoading && <Loading />}
        {!hasError && <MovieList movies={loadedMovies} />}
        {hasError && <ErrorComponent statusCode={statusCode} />}
      </div>
    </main>
  );
}

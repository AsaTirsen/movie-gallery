import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import Index from "../../pages/index.js";
import fetch from "jest-fetch-mock";

const movies = {
  results: [
    {
      adult: false,
      backdrop_path: "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg",
      genre_ids: [28],
      id: 476669,
      original_language: "en",
      original_title: "The King's Man",
      overview:
        "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
      popularity: 3739.757,
      poster_path: "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
      release_date: "2021-12-22",
      title: "The King's Man",
      video: false,
      vote_average: 7.1,
      vote_count: 1323,
    },
  ],
};

const genreIds = {
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ],
};
const baseUrl = "https://api.themoviedb.org/3/";
const apikey = "27cfec6c9eb8080cb7d8025ba420e2d7";
const urlGenres = `${baseUrl}genre/movie/list?api_key=${apikey}&language=en-US`;
const urlMoviesDefault = `${baseUrl}movie/now_playing?api_key=${apikey}&language=en-US`;

describe("fetching from api", () => {
  fetch.enableMocks();
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    fetch.resetMocks();
  });

  it("should fetch movies and genres", async () => {
    // Set up mock fetch responses
    fetch.mockResponses(
      [JSON.stringify(movies), { status: 200 }],
      [JSON.stringify(genreIds), { status: 200 }]
    );

    // Render React components and wait for fetches to complete
    await act(async () => {
      render(<Index />);
      await waitFor(() => expect(fetch.mock.calls.length).toEqual(2));
    });

    // Make assertions on the url for recorded fetch calls
    expect(fetch.mock.calls[0][0]).toEqual(urlMoviesDefault);
    expect(fetch.mock.calls[1][0]).toEqual(urlGenres);
    expect(screen.getByRole("figure")).toHaveTextContent("The King's Man");
  });
});

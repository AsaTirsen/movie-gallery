import fetchMock, { enableFetchMocks } from "jest-fetch-mock";
import React from "react";
// import { render, screen } from "../../config/test-utils";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import {Index} from "../../pages/index";

import { resetMocks } from "../../config/jest.config";

const movies = {
  results: [
    {
      adult: false,
      backdrop_path: "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg",
      genre_ids: (4)[(28, 12, 53, 10752)],
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

const apikey = "27cfec6c9eb8080cb7d8025ba420e2d7";
const baseUrl = "https://api.themoviedb.org/3/";
//   const urlGenres = `${baseUrl}genre/movie/list?api_key=${apikey}&language=en-US`;
//   const urlMovie =
//     query === ""
//       ? `${baseUrl}movie/now_playing?api_key=${apikey}&language=en-US`
//       : `${baseUrl}search/movie?api_key=${apikey}&language=en-US&query=${query}`;
describe("fetching from db", () => {
  fetchMock.enableFetchMocks();
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    fetchMock.resetMocks();
});

    beforeEach(() => {
      fetchMock.resetMocks;
    });
  it("should fetch movies and genres", async () => {
    // Set up mock fetch responses
    fetchMock.mockResponseOnce(JSON.stringify(movies));
    fetchMock.mockResponseOnce(JSON.stringify(genreIds));
    // Render React components

    const data = await Index.fetchFromMovieDb();
    console.debug(data);
    // await expect(data).toEqual({
    //   results: [
    //     {
    //       adult: false,
    //       backdrop_path: "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg",
    //       genre_ids: (4)[(28, 12, 53, 10752)],
    //       id: 476669,
    //       original_language: "en",
    //       original_title: "The King's Man",
    //       overview:
    //         "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
    //       popularity: 3739.757,
    //       poster_path: "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
    //       release_date: "2021-12-22",
    //       title: "The King's Man",
    //       video: false,
    //       vote_average: 7.1,
    //       vote_count: 1323,
    //     },
    //   ],
    // });

    // render(<Index />);
    // // await waitFor(() => console.debug(movies.results))
    // // await waitFor(() => console.debug(genreIds.genres))

    // // Optionally fire some events with fireEvent
    // // For example click button or type in some text into a component

    // // Wait for UI to update
    // await waitFor(() => screen.getByRole("main"));
    // // Make assertions/expections on rendered GUI content
    // expect(screen.getByRole("main")).toBeInTheDocument();
    // expect(screen.getByRole("list")).toBeInTheDocument();

    // // expect(screen.getByRole("listitem")).toHaveTextContent("The King's Man");

    // // Make assertions on the url for recorded fetch calls
    // expect(fetch.mock.calls.length).toEqual(2);
    // expect(fetch.mock.calls[0][0]).toEqual(
    //   `${baseUrl}movie/now_playing?api_key=${apikey}&language=en-US`
    // );
    // expect(fetch.mock.calls[1][0]).toEqual(
    //   `${baseUrl}genre/movie/list?api_key=${apikey}&language=en-US`
    // );
  });
});

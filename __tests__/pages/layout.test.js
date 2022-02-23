import React from "react";
import { render, screen } from "../../config/test-utils";
import Layout from "../../components/layout/Layout";

describe("Layout", () => {
  it("should render the header", () => {
    const textToFind = "The Movie Finder";

    render(<Layout />);
    const title = screen.getByText(textToFind);

    expect(title).toBeInTheDocument();
  });
  it("should render the links with correct names", () => {
    render(<Layout />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(8);
    links.forEach((link) => {
      switch (link.textContent) {
        case "Movies":
          expect(link).toHaveAttribute("href", "/");
        case "TV-shows":
          expect(link).toHaveAttribute("href", "/");
        case "Actors":
          expect(link).toHaveAttribute("href", "/");
        case "Sign in":
          expect(link).toHaveAttribute("href", "/");
      }
    });
  });
});

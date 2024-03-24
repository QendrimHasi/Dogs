import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe(Home, () => {
  it("renders Home component", () => {
    render(<Home />);
    const linkElements = screen.getAllByTestId("dog");

    console.log("first linkElement", linkElements[0]);
    expect(0).toEqual(0);
  });
});

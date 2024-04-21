import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Contact component should get loaded", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});

test("button should be loaded on the page", () => {
    render(<Contact />);

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
});

test("input box should have name as placeholder", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
});

test("should have 2 input boxes loaded on the page", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
});
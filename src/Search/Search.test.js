import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

const onChange = jest.fn();

describe("Search  component", () => {
    it("Search component with children", () => {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>,
        );
        expect(screen.getByText(/find/i)).toBeInTheDocument;
    });

    it("Search component without children", () => {
        render(<Search value="" onChange={onChange} />);
        expect(screen.getByText(/search/i)).toBeInTheDocument;
    });

    it("Search component with placeolder", () => {
        render(<Search value="" onChange={onChange} placeholder="find post" />);
        expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument;
    });

    it("Search component without placeolder", () => {
        render(<Search value="" onChange={onChange} />);
        expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument;
    });

    it("onChange works", () => {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>,
        );
        userEvent.type(screen.getByRole("textbox"), "ExampleOfValue");
        expect(onChange).toHaveBeenCalledTimes(14);
    });

    it("dynamic styles works", () => {
        render(<Search value="abc" onChange={onChange} />);
        expect(screen.getByRole("textbox")).toHaveClass("input");
        expect(screen.getByRole("textbox")).toHaveClass("filled");
        expect(screen.getByText(/search/i)).toHaveClass("label");
    });

    it("Search snapshot", () => {
        const search = render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>,
        );
        expect(search).toMatchSnapshot();
    });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
    test("App renders", () => {
        render(<App />);
        expect(screen.getByRole("list")).toBeInTheDocument;
        expect(screen.getByText("Find course:")).toBeInTheDocument;
    });

    test("Typing in Searchbox works", () => {
        render(<App />);
        expect(screen.queryByDisplayValue(/React/)).toBeNull;
        userEvent.type(screen.getByRole("textbox"), "React");
        expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument;
    });

    test("Search filter works", () => {
        render(<App />);
        expect(screen.getByText(/Vue/)).toBeInTheDocument;
        expect(screen.getByText("JavaScript")).toBeInTheDocument;
        userEvent.type(screen.getByRole("textbox"), "script");
        expect(screen.getByText("JavaScript")).toBeInTheDocument;
        expect(screen.queryByText(/Vue/)).toBeNull;
        expect(screen.getByText("JavaScript")).toBeInTheDocument;
    });
});

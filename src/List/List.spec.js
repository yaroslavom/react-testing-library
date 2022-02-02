import { render, screen } from "@testing-library/react";

import List from "./List";

const mockData = ["React", "Testing", "Library"];

describe("List component", () => {
    it("List component with data", () => {
        render(<List data={mockData} />);
        expect(screen.getByRole("list")).toBeInTheDocument;
        expect(screen.getByText(/react/i)).toBeInTheDocument;
    });

    it("List component without data", () => {
        render(<List />);
        expect(screen.queryByRole("list")).toBeNull();
    });

    it("List snapshot with data", () => {
        const list = render(<List data={mockData} />);
        expect(list).toMatchSnapshot();
    });

    it("List snapshot without data", () => {
        const list = render(<List />);
        expect(list).toMatchSnapshot();
    });
});

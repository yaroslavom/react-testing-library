import { useState, useEffect } from "react";
import List from "./List/List";
import Search from "./Search/Search";

const mockData = [
    "React",
    "Vue",
    "Angular",
    "JavaScript",
    "TypeScript",
    "Node",
    "Express",
];

const App = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(mockData);

    useEffect(() => {
        setData(
            mockData.filter((el) =>
                el.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
            ),
        );
    }, [search]);

    return (
        <div className="app">
            <div className="wrapper">
                <Search
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                >
                    Find course:
                </Search>
                <List data={data} />
            </div>
        </div>
    );
};

export default App;

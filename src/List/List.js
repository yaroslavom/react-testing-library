import React from "react";

const List = ({ data = [] }) => {
    if (!data.length) return null;
    return (
        <div className="list">
            <ul>
                {data.map((el) => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;

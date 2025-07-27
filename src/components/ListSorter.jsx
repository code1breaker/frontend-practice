import React, { useState } from "react";

const initialList = [
  "Banana",
  "Apple",
  "Aam",
  "Cherry",
  "Mango",
  "Blueberry",
  "Kiwi",
  "Babugosa",
  "Pineapple",
  "Fig",
];

const ListSorter = () => {
  const [sortedList, setSortedList] = useState([...initialList]);

  const sortBy = [
    {
      key: "default",
      label: "Default",
    },
    {
      key: "a-z",
      label: "A - Z (Alphabetical)",
    },
    {
      key: "z-a",
      label: "Z - A (Reverse Alphabetical)",
    },
    {
      key: "length",
      label: "Length (Shortest First)",
    },
  ];

  const handleSorting = (e) => {
    const sortedBy = e.target.value;
    switch (sortedBy) {
      case "a-z":
        setSortedList([...sortedList.sort((a, b) => a.localeCompare(b))]);
        break;
      case "z-a":
        setSortedList([...sortedList.sort((a, b) => b.localeCompare(a))]);
        break;
      case "length":
        setSortedList([...sortedList.sort((a, b) => a.length - b.length)]);
        break;
      default:
        setSortedList([...initialList]);
        break;
    }
  };

  return (
    <div data-testid="container">
      <div>
        <h2>List Sorter</h2>
      </div>
      <label htmlFor="sort">Sort By:</label>
      <select
        className="border-2"
        id="sort"
        data-testid="sort-dropdown"
        onChange={handleSorting}
      >
        {sortBy?.map((item) => (
          <option key={item.key} value={item.key}>
            {item.label}
          </option>
        ))}
        )
      </select>

      <ul>
        {sortedList?.map((list) => (
          <li>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListSorter;

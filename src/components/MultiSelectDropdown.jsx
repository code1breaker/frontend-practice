import React, { useEffect, useRef, useState } from "react";

// const lists = [
//   { id: 1, label: "Option 1" },
//   { id: 2, label: "Option 2" },
//   { id: 3, label: "Option 3" },
//   { id: 4, label: "Option 4" },
// ];

const lists = new Array(10)
  .fill()
  .map((_, i) => ({ id: i + 1, label: `Option ${i + 1}` }));

const MultiSelectDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedValues, setSelectedValues] = useState("");
  const dropdownRef = useRef();
  const [isSubmit, setIsSubmit] = useState(false);

  const selectedCount = Object.keys(selectedOptions).length;

  const handleChange = (list) => {
    setSelectedOptions((prev) => {
      if (prev.hasOwnProperty(list.id)) {
        delete prev[list.id];
        return { ...prev };
      }
      prev[list.id] = list;
      return { ...prev };
    });
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;
      setIsDropdownOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="w-[20%] shadow-lg p-5 rounded bg-slate-100">
      <h1>Multi Select Dropdown</h1>

      <div className="relative" ref={dropdownRef}>
        <p>Select Options:</p>
        <div
          className="border-2 rounded flex items-center gap-2 p-2"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <span>icon</span>
          <p>
            {selectedCount > 0 ? `${selectedCount} selected` : "Choose Options"}
          </p>
        </div>

        {isDropdownOpen && (
          <ul className="bg-gray-200 rounded p-2 absolute top-20 w-full max-h-52 overflow-auto">
            <p onClick={() => setSelectedOptions({})}>Reset Selection</p>
            {lists?.map((list) => (
              <li key={list.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={list.id}
                  checked={!!selectedOptions[list.id]}
                  onChange={() => handleChange(list)}
                />
                <label htmlFor={list.id}>{list.label}</label>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={() => {
          setIsSubmit(true);
          const values = Object.values(selectedOptions)
            .map((option) => option.label)
            .join(", ");
          setSelectedValues(values);
        }}
      >
        Submit
      </button>

      {isSubmit && (
        <p>
          {selectedValues
            ? `Selected: ${selectedValues}`
            : "Please select atleast one option"}
        </p>
      )}
    </div>
  );
};

export default MultiSelectDropdown;

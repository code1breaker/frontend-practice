import { useState } from "react";

const AgeCalculator = () => {
  const [inputValue, setInputValue] = useState(new Date("2002-08-10"));
  const [error, setError] = useState("");
  const [age, setAge] = useState(null);

  const handleCalculateAge = () => {
    setError("");
    if (!inputValue) {
      setAge(null);
      setError("Please select a date");
      return;
    }
    const today = new Date();
    const selected = new Date(inputValue);

    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();

    const year = selected.getFullYear();
    const month = selected.getMonth();
    const date = selected.getDate();

    if (today < selected) {
      setAge(null);
      setError("Birthdate cannot be in the future");
      return;
    }

    let ageInYear = todayYear - year;
    let ageInMonth = todayMonth - month;
    let ageInDate = todayDate - date;

    if (ageInDate < 0) {
      ageInDate += new Date(todayYear, todayMonth, 0).getDate();
      ageInMonth--;
    }

    if (ageInMonth < 0) {
      ageInMonth += 12;
      ageInYear--;
    }

    setAge({ date: ageInDate, month: ageInMonth, year: ageInYear });
  };
  return (
    <div className="p-4">
      <h1>Age Calculator</h1>
      <div>
        <label>Enter/Select a birthdate:</label>
        <div className="w-[15rem]">
          <input
            type="date"
            className="outline-none border-2 px-3 w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-blue-400 text-white px-3 py-1 rounded"
        onClick={handleCalculateAge}
      >
        Calculate Age
      </button>
      {error && <p>{error}</p>}
      {age && (
        <p>
          {age.year} years {age.month} months {age.date} days{" "}
        </p>
      )}
    </div>
  );
};

export default AgeCalculator;

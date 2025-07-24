import { useState } from "react";

const ChipsInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const tag = { id: idCounter, label: inputValue };

      setTags((prev) => [...prev, tag]);
      setIdCounter((prev) => prev + 1);
      setInputValue("");
    }
  };

  const handleDeleteTags = (tagId) => {
    if (!tagId) return;
    setTags((prev) => {
      return prev.filter((tag) => tag?.id !== tagId);
    });
  };

  return (
    <>
      <div>
        <h1>Chips Input</h1>
        <input
          type="text"
          className="outline-none border-[2px]"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className="flex gap-4">
          {!!tags?.length &&
            tags?.map((tag) => (
              <div
                key={tag?.id}
                className="bg-gray-500 px-4 py-1 text-white rounded-full flex gap-5"
              >
                <p>{tag?.label}</p>
                <button
                  className="text-red-500"
                  onClick={() => handleDeleteTags(tag?.id)}
                >
                  X
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ChipsInput;

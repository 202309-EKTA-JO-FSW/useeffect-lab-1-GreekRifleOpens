import React, { useState } from "react";

const Form = ({ setDogsData }) => {
  const [inputText, setInputText] = useState("");

  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://dog.ceo/api/breeds/image/random/${inputText}`
      );
      const data = await response.json();
      if (data && data.status === "success") {
        setDogsData(data.message);
      } else {
        console.error("Error fetching dog data:", data);
      }
    } catch (error) {
      console.error("Error fetching dog data:", error);
    }
  };

  return (
    <form>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="number"
          className="form-control"
        />
      </div>
      <div className="d-grid">
        <button
          onClick={handleButtonClick}
          type="submit"
          className="btn btn-primary"
        >
          WOOF!
        </button>
      </div>
    </form>
  );
};

export default Form;

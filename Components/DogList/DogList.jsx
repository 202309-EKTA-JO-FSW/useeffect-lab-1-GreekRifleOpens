import React from "react";

export default function DogList({ dogsList }) {
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs <span role="img">🐶</span>
      </h3>
      {dogsList.map((dog, index) => (
        <img key={index} src={dog} alt={`Dog ${index}`} />
      ))}
    </div>
  );
}

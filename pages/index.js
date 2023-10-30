import React, { useState, useEffect } from "react";
import DogList from "../Components/DogList/DogList";
import Form from "../Components/Form/Form";

export default function Home() {
  const [dogsData, setDogsData] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/3"
        );
        const data = await response.json();
        setDogsData(data.message);
      } catch (error) {
        console.error("Error fetching dog data:", error);
      }
    };

    fetchDogs();
  }, []);

  return (
    <div className="card">
      <Form /> {}
      <DogList dogsList={dogsData} /> {}
    </div>
  );
}

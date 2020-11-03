import React, { useState, useEffect } from "react";
import AllBreeds from "./AllBreeds.component";

const AllBreedsContainer = (): JSX.Element => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBreeds(result);
        },
        (responseError) => {
          setIsLoaded(true);
          setError(responseError.message);
        }
      );
  }, []);

  return <AllBreeds error={error} isLoaded={isLoaded} breeds={breeds} />;
};

export default AllBreedsContainer;

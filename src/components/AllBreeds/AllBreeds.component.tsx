import React from "react";
import "./AllBreeds.style.css";
import Spinner from "../Spinner";

interface IBreed {
  name: string;
  id: number;
}

interface IAllBreedProps {
  error: null | string;
  isLoaded: boolean;
  breeds: ReadonlyArray<IBreed>;
}

const AllBreeds = ({
  error,
  isLoaded,
  breeds,
}: IAllBreedProps): JSX.Element => {
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!isLoaded) {
    return <Spinner />;
  }
  return (
    <>
      <h2 className="main__title">All breeds</h2>
      <ul>
        {breeds.map((breed: IBreed) => (
          <li key={breed.id}>{breed.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AllBreeds;

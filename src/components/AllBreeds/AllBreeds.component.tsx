import React from "react";
import IBreed from "../../interfaces/breed";
import "./AllBreeds.style.css";
import Spinner from "../Spinner";
import IErrorStatus from "../../interfaces/IErrorStatus";

interface IAllBreedProps {
  error: null | IErrorStatus;
  isLoaded: boolean;
  breeds: ReadonlyArray<IBreed>;
}

const AllBreeds = ({
  error,
  isLoaded,
  breeds,
}: IAllBreedProps): JSX.Element => {
  if (error) {
    return <div>Error: {error.statusText}</div>;
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

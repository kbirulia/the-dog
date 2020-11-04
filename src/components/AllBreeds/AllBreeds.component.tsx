import React from "react";
import { Link } from "react-router-dom";
import IBreed from "../../interfaces/breed";
import "./AllBreeds.style.css";
import Spinner from "../Spinner";
import IErrorStatus from "../../interfaces/IErrorStatus";
import ErrorPage from "../ErrorPage";

type TAllBreedProps = {
  error: null | IErrorStatus;
  isLoaded: boolean;
  breeds: ReadonlyArray<IBreed>;
};

const AllBreeds = ({
  error,
  isLoaded,
  breeds,
}: TAllBreedProps): JSX.Element => {
  if (error) {
    return <ErrorPage title={error.statusText} />;
  }
  if (!isLoaded) {
    return <Spinner />;
  }
  return (
    <>
      <h2 className="main__title">All breeds</h2>
      <ul>
        {breeds.map((breed: IBreed) => (
          <li key={breed.id}>
            <Link to={`/${breed.id}`}>{breed.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllBreeds;

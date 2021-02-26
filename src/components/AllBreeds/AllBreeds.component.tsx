import React from "react";
import { Link } from "react-router-dom";
import IBreed from "../../interfaces/breed";

type TAllBreedProps = {
  breeds: ReadonlyArray<Partial<IBreed>>;
};

const AllBreeds = ({ breeds }: TAllBreedProps): JSX.Element => {
  return (
    <>
      <h2 className="main__title">All breeds</h2>
      <ul>
        {breeds.map((breed: Partial<IBreed>) => (
          <li key={breed.id}>
            <Link to={`/breeds/${breed.id}`}>{breed.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllBreeds;

import React from "react";
import IBreed from "../../interfaces/breed";

import "./Breed.style.css";
import Property from "./Property.component";

type TBreedProps = {
  breed: IBreed;
};

const Breed = ({ breed }: TBreedProps): JSX.Element => {
  return (
    <>
      <h2 className="main__title">{breed.name}</h2>
      <ul>
        <Property name="Weight" value={`${breed.weight.metric} kg`} />
        <Property name="Height" value={`${breed.height.metric} cm`} />
        <Property name="Origin" value={breed.origin} />
        <Property name="Life Span" value={breed.life_span} />
        <Property name="Temperament" value={breed.temperament} />
        <Property name="Bred For" value={breed.bred_for} />
      </ul>
    </>
  );
};

export default Breed;

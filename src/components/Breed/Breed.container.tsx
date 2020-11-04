import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Breed from "./Breed.component";
import FetchResults from "../FetchResults";
import IBreed from "../../interfaces/breed";

interface TParamTypes {
  breedId: string;
}

const BreedContainer = (): JSX.Element => {
  const { breedId } = useParams<TParamTypes>();

  const { error, isLoaded, data } = useFetch<IBreed | null>(
    null,
    `https://api.thedogapi.com/v1/breeds/${breedId}`
  );

  return (
    <FetchResults error={error} isLoaded={isLoaded}>
      {data && <Breed breed={data} />}
    </FetchResults>
  );
};

export default BreedContainer;

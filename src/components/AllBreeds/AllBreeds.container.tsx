import React from "react";
import useFetch from "../../hooks/useFetch";
import AllBreeds from "./AllBreeds.component";
import IBreed from "../../interfaces/breed";
import FetchResults from "../FetchResults";

const AllBreedsContainer = (): JSX.Element => {
  const { error, isLoaded, data } = useFetch<ReadonlyArray<Partial<IBreed>>>(
    [],
    "https://api.thedogapi.com/v1/breeds"
  );

  return (
    <FetchResults error={error} isLoaded={isLoaded}>
      <AllBreeds breeds={data} />
    </FetchResults>
  );
};

export default AllBreedsContainer;

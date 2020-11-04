import React from "react";
import useFetch from "../../hooks/useFetch";
import AllBreeds from "./AllBreeds.component";
import IBreed from "../../interfaces/breed";

const AllBreedsContainer = (): JSX.Element => {
  const { error, isLoaded, data } = useFetch<ReadonlyArray<IBreed>>(
    [],
    "https://api.thedogapi.com/v1/bree"
  );

  return <AllBreeds error={error} isLoaded={isLoaded} breeds={data} />;
};

export default AllBreedsContainer;

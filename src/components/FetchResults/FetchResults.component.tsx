import React, { FunctionComponent } from "react";
import ErrorPage from "../ErrorPage";
import Spinner from "../Spinner";
import IErrorStatus from "../../interfaces/errorStatus";

type TFetchResultsProps = {
  error: IErrorStatus | null;
  isLoaded: boolean;
};

const FetchResults: FunctionComponent<TFetchResultsProps> = ({
  error,
  isLoaded,
  children,
}): JSX.Element => {
  if (error) {
    return <ErrorPage title={error.statusText} />;
  }
  if (!isLoaded) {
    return <Spinner />;
  }

  return <>{children}</>;
};

export default FetchResults;

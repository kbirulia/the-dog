import { useEffect, useState } from "react";
import IErrorStatus from "../../interfaces/IErrorStatus";

interface IUseFetch<T> {
  error: null | IErrorStatus;
  isLoaded: boolean;
  data: T;
}

const useFetch = <T>(
  initData: T,
  url: string,
  params?: RequestInit
): IUseFetch<T> => {
  const [error, setError] = useState<IErrorStatus | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState<T>(initData);

  useEffect(() => {
    fetch(url, params)
      .then((response: Response) => {
        if (!response.ok) {
          const { status, statusText } = response;
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject({ status, statusText });
        }
        return response.json();
      })
      .then((responseData: T) => {
        setIsLoaded(true);
        setData(responseData);
      })
      .catch((errorStatus: IErrorStatus) => {
        setIsLoaded(true);
        setError(errorStatus);
      });
  }, [url, params]);

  return { error, isLoaded, data };
};

export default useFetch;

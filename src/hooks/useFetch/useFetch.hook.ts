import { useEffect, useState } from "react";
import IErrorStatus from "../../interfaces/errorStatus";

type TUseFetch<T> = {
  error: null | IErrorStatus;
  isLoaded: boolean;
  data: T;
};

const useFetch = <T>(
  initData: T,
  url: string,
  params?: RequestInit
): TUseFetch<T> => {
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
        setError(
          errorStatus.status
            ? errorStatus
            : {
                status: null,
                statusText:
                  "Fetching failed. Check your network connection or disconnect Global Protect",
              }
        );
      });
  }, [url, params]);

  return { error, isLoaded, data };
};

export default useFetch;

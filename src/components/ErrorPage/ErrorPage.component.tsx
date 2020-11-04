import React, { FunctionComponent } from "react";
import "./ErrorPage.style.css";

export type ErrorPageProps = {
  title: string;
};

const ErrorPage: FunctionComponent<ErrorPageProps> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <div className="error-page">
      <h3 className="main__title">{title}</h3>
      {children}
    </div>
  );
};

export default ErrorPage;

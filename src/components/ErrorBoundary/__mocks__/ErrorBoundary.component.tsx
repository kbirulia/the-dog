import React, { FunctionComponent } from "react";

const ErrorBoundary: FunctionComponent = ({ children }) => (
  <div>{children}</div>
);

export default ErrorBoundary;

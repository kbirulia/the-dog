import React, { Component, ReactNode } from "react";
import ErrorPage from "../ErrorPage";

type TProps = {
  children: ReactNode;
};

type TState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): TState {
    return { hasError: true };
  }

  public render(): ReactNode {
    const {
      state: { hasError },
      props: { children },
    } = this;
    if (hasError) {
      return <ErrorPage title="Sorry.. there was an error" />;
    }

    return children;
  }
}

export default ErrorBoundary;

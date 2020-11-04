import React, { Component, ReactNode } from "react";
import ErrorPage from "../ErrorPage";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
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

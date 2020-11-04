import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header";
import AllBreeds from "../AllBreeds";
import ErrorBoundary from "../ErrorBoundary";
import ErrorPage from "../ErrorPage";
import Breed from "../Breed";

const App = (): JSX.Element => (
  <ErrorBoundary>
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/breeds" />} />
        <Route path="/breeds" exact component={AllBreeds} />
        <Route path="/breeds/:breedId" exact component={Breed} />
        <Route component={() => <ErrorPage title="Page not found" />} />
      </Switch>
    </main>
  </ErrorBoundary>
);

export default App;

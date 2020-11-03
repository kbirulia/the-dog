import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header";
import AllBreeds from "../AllBreeds";
import ErrorBoundary from "../ErrorBoundary";

const App = (): JSX.Element => (
  <ErrorBoundary>
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" exact component={AllBreeds} />
        <Route
          path="/:breed_id"
          exact
          component={() => <div>Some breed</div>}
        />
      </Switch>
    </main>
  </ErrorBoundary>
);

export default App;

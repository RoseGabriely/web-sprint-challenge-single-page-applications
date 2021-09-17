import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      <Link to="/">
        <button>Home</button>
      </Link>

      <Switch>
        <Route path="/pizza">
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;

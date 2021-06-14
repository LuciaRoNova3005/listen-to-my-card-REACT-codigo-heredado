import React from "react";
import "../stylesheets/App.scss";
import Card from "./Card/Card";
import Page from "../components/Landing/Page";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Page />
        </Route>
        <Route path="/card" exact>
          <Card />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

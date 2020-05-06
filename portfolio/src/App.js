import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App(props) {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path ="/">
      <Home/>
        </Route>
        <Route exact path ="/portfolio">
      <Portfolio/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home";
import NextToGoRaces from "./components/next_to_go_races";
import "./App.css";

export default function App() {
  <Switch>
    <Route path="/dashboard" component={NextToGoRaces} />
    <Route path="/home" component={Home} />
    <Redirect from="/" exact to="/home" />
    <Redirect to="/not-found" />
  </Switch>;
}

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import NextToGoRaces from "./components/next_to_go_races";
import ThankYou from "./components/ThankYou";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={NextToGoRaces} />
        <Route path="/home" component={Home} />
        <Route path="/thankyou" component={ThankYou} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
}

import "./App.css";
import Detail from "./views/Detail";
import Home from "./views/Home";
import PhoneList from "./views/PhoneList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <PhoneList />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

import "./App.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import PhoneList from "./pages/PhoneList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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

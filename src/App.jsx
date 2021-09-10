import "./App.css";
import Detail from "./views/Detail";
import Home from "./views/Home";
import PhoneList from "./views/PhoneList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <Home />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/list`}>
          <PhoneList />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/detail/:id`}>
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

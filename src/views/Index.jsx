import Home from "./Home"
import Detail from "./Detail";
import PhoneList from "./PhoneList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Webpages() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/list`} component={PhoneList} />
        <Route
          path={`${process.env.PUBLIC_URL}/detail/:id`}
          component={Detail}
        />
      </Switch>
    </Router>


    </div>
  );
}

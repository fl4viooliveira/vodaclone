import Home from "./Home"
// import Detail from "./Detail";
// import PhoneList from "./PhoneList";
import ProductList from "../components/data/ProductList"
import ProductDetail from "../components/data/ProductDetail"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Webpages() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/list`} component={ProductList} />
        <Route
          path={`${process.env.PUBLIC_URL}/detail/:id`}
          component={ProductDetail}
        />
      </Switch>
    </Router>


    </div>
  );
}

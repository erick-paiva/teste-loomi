import { Switch } from "react-router-dom";
import Login from "../pages/login";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
};

import { Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import { Route } from "./Route";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  );
};

import { Route, Switch } from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";
import { ContactPage } from "../components/pages/ContactPage";
import { Page404 } from "../components/pages/Page404";

export const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
};

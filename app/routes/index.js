import HomePage from './home';
import SettingsPage from './settings';

const { HashRouter: Router, Route, Redirect, Switch } = ReactRouterDOM;

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/settings" exact component={SettingsPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

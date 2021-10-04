import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Start from 'components/Start';
import Main from 'components/Main';
import Result from 'components/Result';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Start} path="/" exact />
        <Route component={Main} path="/main" />
        <Route component={Result} path="/result" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Blocks from './components/Blocks';
import BlockDetails from './components/BlockDetails';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/blocks" />
        </Route>
        <Route path="/blocks" exact>
          <Blocks />
        </Route>
        <Route path="/blocks/:hash">
          <BlockDetails />
        </Route>
        {/* For non existant routes load PageNotFound component */}
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

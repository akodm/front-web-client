import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import PageTransitionWapper from './components/PageTransitionWapper';

const FirstPage = React.lazy(() => import('./pages/Index'));

const App = () => {
  return (
    <PageWrapper>
      <Router>
        <PageTransitionWapper>
          <Switch>
            {/* First Page */}
            <Route exact path="/"><FirstPage /></Route>

            {/* Not Found Page */}
            <Route><FirstPage /></Route>
          </Switch>
        </PageTransitionWapper>
      </Router>
    </PageWrapper>
  );
}

export default App;

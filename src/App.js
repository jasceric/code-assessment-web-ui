import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useAppContext, { providerPropTypes } from './hooks/useAppContext';
import AppContext from './contexts/AppContext';

import ProductLanding from './pages/ProductLanding';
import Cart from './pages/Cart';
import ProductDetails from './components/ProductDetails';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const appContextValue = useAppContext();
  return (
    <AppContext.Provider value={appContextValue}>
      <Provider store={store}>
        <Router>
          <Route path="/">
            <ProductLanding />
          </Route>
          <Switch>
            <Route path="/product/:productId">
              <ProductDetails />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </AppContext.Provider>
  );
}

AppContext.Provider.propTypes = providerPropTypes;

export default App;

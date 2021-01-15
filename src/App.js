import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/general/NavBar'
import Footer from './components/general/Footer'
import Detail from './components/Detail'
import Home from './components/Home'
import Category from './components/Category/index'
import Cart from './components/Cart/index'
import StoreProvider from './components/Store/Store'

import './styles/general.css'

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:category_name">
            <Category />
          </Route>
          <Route path="/details/:id">
            <Detail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
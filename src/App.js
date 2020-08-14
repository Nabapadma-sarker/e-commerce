import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Search from './components/search/Search'
import MobileNav from './components/mobile-nav/MobileNav'
import Header from './components/header/Header'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'
import HomePage from './pages/home/HomePage';
import Shop from './pages/shop/Shop';
import {store} from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <React.Fragment>
              <Search/>        
              <div class="main-content-wrapper d-flex clearfix">
                  <MobileNav/>
                  <Header/>        
                  <Route exact path="/" component={HomePage}></Route>
                  <Route path="/shop" component={Shop}></Route>
                  <Route path="/product-details" component={HomePage}></Route>
                  <Route path="/checkout" component={HomePage}></Route>
                  <Route path="/cart" component={HomePage}></Route>
              </div>
              <Newsletter/>
              <Footer/>
          </React.Fragment> 
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

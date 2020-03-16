import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {
  return (
    <div >
      <Header></Header>
      <Router>
      <Switch>
          <Route path="/Shop">
            <Shop></Shop>
          </Route>
          <Route path="/Review">
            <Review></Review>
          </Route>
          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:key">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
    
    </Router>
        
    </div>
  );
}

export default App;

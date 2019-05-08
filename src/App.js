import React, { Component } from 'react';

import Inventory from './Pages/Inventory'
import AdminLogin from './Pages/AdminLogin'
import UserManagement from './Pages/UserManagement'
import AdminManagement from './Pages/AdminManagement'
import Header from './Components/Header'
import Admin from './Pages/Admin'
import '../src/App.css'

import {
  BrowserRouter as Router, withRouter, Route, Link, Switch} from "react-router-dom";



class App extends Component {

 
  render() {
    return (
      <div className="App">
        
        <Router>
          <div>
            <Header/>
            <Switch>
              {/* Note the use of 'exact' below */}
              <Route path="/" exact component={AdminLogin}/>
              <Route path="/admin/inventory" exact component={Inventory}/>
              <Route path="/admin/user-management" exact component={UserManagement}/>
              <Route path="/admin" exact component={Admin}/>
              <Route path="/admin/admin-management" exact component={AdminManagement}/>
             
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

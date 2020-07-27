import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Product.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AuthService from "./../../services/auth.service";

import Template from './../Template';
import Login from './../Login';

class App extends Component {

    constructor() {
        super();
    
        this.state = {
          showAdminBoard: false,
          currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showAdminBoard: true
          });
        }
    }
    
    logOut = () => {
        AuthService.logout();
    }

    render () {
        const { currentUser, showAdminBoard } = this.state;

        return (
            <Router>
            <div>
              <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                  bezKoder
                </Link>
                <div className="navbar-nav mr-auto">
        
                  {showAdminBoard && (
                    <li className="nav-item">
                      <Link to={"/dashboard"} className="nav-link">
                        Board
                      </Link>
                    </li>
                  )}

                </div>
    
                {currentUser ? (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/"} className="nav-link">
                        {currentUser.email}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a href="/login" className="nav-link" onClick={this.logOut}>
                        LogOut
                      </a>
                    </li>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to={"/login"} className="nav-link">
                        Login
                      </Link>
                    </li>
                  </div>
                )}
              </nav>
    
              <div className="container mt-3">
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route path="/dashboard" component={Template} />
                </Switch>
              </div>
            </div>
          </Router>
        )
    }
}

export default App;
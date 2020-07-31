import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AuthService from "./../../services/auth.service";
import Login from './../Login';

function Initial (props){

    const logOut = () => {
        AuthService.logout();
    }

        /*
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/dashboard" component={Template} />
        </Switch>
        */

    return (
        <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Backoffice
          </Link>
          <div className="navbar-nav mr-auto">
  
            {props.showAdminBoard && (
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  Board
                </Link>
              </li>
            )}

          </div>

          {props.currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  {props.currentUser.email}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
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

        <div>
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>
        </div>
      </div>
    </Router>
    );
}

export default Initial;
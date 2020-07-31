import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Product.css';

import AuthService from "./../../services/auth.service";
import Initial  from './Initial';
import Template from './../Template';

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
          const valid = AuthService.verifyUser();

          if (!valid) {
              AuthService.logout();
              this.props.history.push("/login");
              window.location.reload();
              return false;
          }

          this.setState({
              currentUser: user,
              showAdminBoard: true
          });
        }

        
    }

    render () {
        const { currentUser, showAdminBoard } = this.state;
        
        let component = <Initial showAdminBoard={showAdminBoard} currentUser={currentUser}/>

        if (this.state.currentUser) {
            component = <Template />
        }

        return (
          component
        )
    }
}

export default App;
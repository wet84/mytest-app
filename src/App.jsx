import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react'

//import Main from './containers/Main';

import ListUser from './components/ListUser';
import Input from './components/Input';
import Clientdetail from './components/UserDetail';
import UserDetail from './components/UserDetail';
import ClientData from './userData/index';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid className="app-style">
          <Grid.Row>
              <ListUser />
              <UserDetail />
              <ClientData />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;

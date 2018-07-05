import React, { Component } from 'react';
import './App.css';

//import Main from './containers/Main';



import ListUser from './components/ListUser';
import Input from './components/Input';
import Clientdetail from './components/UserDetail';
import UserDetail from './components/UserDetail';


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="ui grid app-style">
          <ListUser />
          <UserDetail />
        </div>
      </div>
    );
  }
}

export default App;

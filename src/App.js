import React, { Component } from 'react';
import MainNav from './components/nav/MainNav';
import LoginPage from './components/login/LoginPage';
import './App.css';
import SuccessPage from './components/SuccessPage';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <LoginPage /> */}
        {/* <SuccessPage /> */}
        <AppRouter />
      </div>
    );
  }
}

export default App;

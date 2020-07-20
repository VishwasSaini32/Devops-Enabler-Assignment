import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import FormDataComponent from './components/Form';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormDataComponent />
        <Home />
      </div>
    );
  }
}

export default App;
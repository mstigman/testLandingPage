import React, { Component } from 'react';

import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Nav from "./components/nav";

class App extends Component {
  render() {
    return (
      <div className="container">
          <Nav />
      </div>
    );
  }
}

export default App;

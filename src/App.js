import React, { Component } from 'react';
import Flexbox from 'flexbox-react';


import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Nav from "./components/nav";
import HomePage from './HomePage';
import ContactPage from "./ContactPage";

class App extends Component {
  render() {
    return (
      <Flexbox flex={1}>
          <Nav />
          <ContactPage />
      </Flexbox>
    );
  }
}

export default App;

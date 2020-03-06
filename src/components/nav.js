import React, { Component } from 'react';
import logo from "../images/KayNLogo.svg";

class Nav extends Component {
  render() {
    return (
      <nav style={{backgroundColor: '#83e5e8', height: 60, flexDirection: 'row'}}>
          <ul style={{height: 70, width: 70, paddingLeft: 15, backgroundColor: '#aaa0'}}>
            <img src={logo}/>
          </ul>
          <ul style={{fontSize: 50}}>
            <li className="logo">KayN</li>
          </ul>
          <ul/>
          <ul style={{}}>
              <li style={{fontSize: 30}}><a href="PrivacyPolicy">Home</a></li>
              <li style={{fontSize: 30}}><a href="#">About</a></li>
              <li style={{fontSize: 30}}><a href="#">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;

import React, { Component } from 'react';
import logo from "../images/KayNLogo.svg";

class Nav extends Component {;
  test() {
    console.log("test")
  }
  render() {
    return (
      <nav style={{backgroundColor: '#83e5e8', height: 65, flexDirection: 'row', position: 'fixed'}}>
          <ul style={{height: 70, width: 70, paddingLeft: 25, backgroundColor: '#aaa0'}}>
            <img src={logo}/>
          </ul>
          <ul style={{fontSize: 50}}>
            <li className="logo">KayN</li>
          </ul>
          <ul/>
          <ul style={{}}>
              <li style={{fontSize: 30}}><button onClick={() => this.test}>Home</button></li>
              <li style={{fontSize: 30}}><button onClick={() => this.test}>About</button></li>
              <li style={{fontSize: 30}}><button onClick={() => this.test}>Contact</button></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;

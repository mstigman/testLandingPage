import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import tab3 from "./images/tab3.svg";
import tab1 from "./images/tab1.svg";


class ContactPage extends Component {
  render() {
    return (
        <Flexbox flex={1}>
            <div style={{height: 100}}/>
            <Flexbox flex={1} flexDirection='column' style={{backgroundImage: "url(" + tab3 + ")", height: 950}}>
            </Flexbox>
        </Flexbox>
    );
  }
}

export default ContactPage;

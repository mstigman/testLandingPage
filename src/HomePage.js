import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import reviewImg from "./images/reviews.jpg";
import kaynImg from "./images/KayNLogo.svg";
import tab1 from "./images/tab1.svg";

class HomePage extends Component {
  render() {
    return (
        <Flexbox flex={1} flexDirection='column' style={{backgroundImage: "url(" + tab1 + ")", height: 4630}}>
            <div style={{height: 70}}/>
            <Flexbox flex={.6} flexDirection='column'>
                <Flexbox flex={.4} style={{backgroundColor: '#aaa0'}} alignItems='center'>
                    <Flexbox flex={.6} style={
                        {
                            paddingLeft: 50,
                            paddingTop:25,
                        }
                    }>
                        <p style={{fontSize: 25}}>When was the last time you were looking into a restaurant or product and came across some fishy reviews? Maybe they were fake, maybe not. But due to the fact that it's extremely advantageous for companies to manipulate reviews we are naturally very weary of trusting them.</p>
                    </Flexbox>
                    <Flexbox flex={.4} alignItems="center">
                        <img style={{height: 400, paddingTop: 75, paddingLeft: 25}} src={reviewImg}/>
                    </Flexbox>
                </Flexbox>
                <Flexbox flex={.5}>

                    <Flexbox flex={.35} alignItems="center">
                        <img style={{height: 400, paddingLeft: 100}} src={kaynImg}/>
                    </Flexbox>

                    <Flexbox flex={.6} style={
                        {
                            paddingLeft: 50,
                            paddingTop: 200,
                        }
                    }>
                        <p style={{fontSize: 25}}>KayN’s goal is to change how reviews work, to make them as useful as they should be to consumers and businesses. By combining the voting aspects of reddit and decentralization KayN creates a trusted ‘marketplace’ for consumers, reviewers, and businesses to interact.</p>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
            <Flexbox  flex={1} flexDirection='column'>

            </Flexbox>

            <Flexbox  flex={1} flexDirection='column'>

            </Flexbox>
        </Flexbox>
    );
  }
}

export default HomePage;

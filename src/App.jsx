import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
// HEY! Why don't dis work??? 
// import '../semantic/dist/semantic.min.css';
import './css/header.css';
import  Header  from './Components/Header';
import  Section  from './Components/Section';


class App extends Component {

  render() {
    return (
      <React.Fragment>
      <Header />
      <Section />
        </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
// HEY! Why don't dis work??? 
// import '../semantic/dist/semantic.min.css';
import './css/header.css';
import './css/content.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Section />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

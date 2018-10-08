import React, { Component } from 'react';
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css';
// HEY! Why don't dis work??? 
// import '../semantic/dist/semantic.min.css';
import './css/header.css';
import './css/content.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const MainSection = styled.div `{
  position: absolute;
  top: 75vh;
  width: 100%
}`

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <MainSection>
        <Section />
        <Footer />
        </MainSection>
      </React.Fragment>
    );
  }
}

export default App;

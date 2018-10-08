import React, { Component } from 'react';
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react';

const TitleWrapper = styled.div `{
    padding: 5vw 0 0 5vw;
}`

const Title = styled.p `{
    font-size: 10vw !important;
    text-transform: uppercase;
    line-height: 11.5vw !important;
}`

class Header extends Component {
    
    state = {
        class: "large"
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {

        if (window.pageYOffset > 100 || document.documentElement.scrollTop > 100) {
            this.setState({
                class: "small"
            })
        } else if (window.pageYOffset > 50 || document.documentElement.scrollTop > 100) {
            this.setState({
                class: "medium"
            })
        } else {
            this.setState({
                class: "large"
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="fullscreen-wrap" className={this.state.class}>
                    <TitleWrapper>
                        <Title>Jacob<br /> Berg</Title>
                        <p>Web Developer</p>
                    </TitleWrapper>
                    <div className="arrowPosition"> 
                        <div className="arrow"><Icon name="angle down" className="massive" /></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
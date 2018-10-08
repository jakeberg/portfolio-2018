import React, { Component } from 'react';
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react';

const TitleWrapper = styled.div `{
    position: absolute;
    padding: 6vw 0 0 6vw;
}`

const Title = styled.p `{
    text-transform: uppercase;
    font-size: 10vw;
    @media (max-width: 600px) {
        font-size: 15vw;
      }
    @media (max-width: 400px) {
        font-size: 20vw;
      }
}`

const TitleSmall = styled.p `{
    text-transform: uppercase;
    font-size: 3vw;
    padding: 10px 0 0 25px;
    @media (max-width: 800px) {
        font-size: 6vw;
      }
    @media (max-width: 400px) {
        font-size: 8vw;
      }
}`

const FullScreenWrap = styled.div `{
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 10px 20px rgb(54, 54, 54);
    z-index: 10;
    background-image: linear-gradient(to right bottom, #295498, #036da9, #0085b5, #219dbd, #4bb3c3);
}`

class Header extends Component {
    
    state = {
        class: "largest"
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            this.setState({
                class: "smallest"
            })
        } else if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            this.setState({
                class: "small"
            })
        } else if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            this.setState({
                class: "medium"
            })
        } else if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            this.setState({
                class: "large"
            })
        } else {
            this.setState({
                class: "largest"
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <FullScreenWrap className={this.state.class}>
                    {this.state.class === "smallest" ? <TitleSmall>Jacob Berg</TitleSmall> : null}
                    <TitleWrapper>
                        <Title>Jacob<br /> Berg</Title>
                    </TitleWrapper>
                    <div className="arrowPosition"> 
                        <div className="arrow"><Icon name="angle down" className="massive" /></div>
                    </div>
                </FullScreenWrap>
            </React.Fragment>
        );
    }
}

export default Header;
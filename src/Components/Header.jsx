import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';
import imageHeader from '../assets/photos/bg.jpg';

class Header extends Component {

    render() {
        return (
            <Container>
                <header className="v-header">
                    <div className="fullscreen-video-wrap">
                        <img src={imageHeader} />
                    </div>
                    <div className="header-content">
                        <h1>Jacob<br />Victor<br /> Berg</h1>
                        <br />
                        <div className="arrowPosition">
                            <Icon name="angle down massive" />
                        </div>
                    </div>
                </header>
            </Container>
        );
    }
}

export default Header;
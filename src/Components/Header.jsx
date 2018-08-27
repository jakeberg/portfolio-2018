import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';

class Header extends Component {

    render() {
        let intElemScrollTop = document.getElementById("fullscreen-wrap")
        console.log(intElemScrollTop)
        return (
            <React.Fragment>
                <div id="fullscreen-wrap">
                </div>
                <div className="header-content">
                    <div className="box">
                        <h1>Jacob<br />Victor<br /> Berg</h1>
                        </div>
                        <br />
                        <div className="arrowPosition">
                            <Icon name="angle down" className="massive" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
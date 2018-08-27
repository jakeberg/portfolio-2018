import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';


class Footer extends Component {

    render() {
        return (
                <div className="footer" >
                <Container>
                        <List>
                            <List.Item>
                                <List.Icon name='users' />
                                <List.Content>Jacob Victor Berg</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>Indianapolis, IN</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='mail' />
                                <List.Content>
                                    <a href='mailto:jacobvictorberg@gmail.com'>jacobvictorberg@gmail.com</a>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='linkify' />
                                <List.Content>
                                    <a href='https://www.linkedin.com/in/jacobvictorberg/'>LinkedIn</a>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Container>
                </div>
        );
    }
}

export default Footer;
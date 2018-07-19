import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';


class Footer extends Component {

    render() {
        return (
                <div raised className="footer" >
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
                                <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Icon name='linkify' />
                            <List.Content>
                                <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                            </List.Content>
                        </List.Item>
                    </List>
                    </Container>
                </div>
        );
    }
}

export default Footer;
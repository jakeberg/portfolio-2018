import React, { Component } from 'react';
import { Container, Segment, Grid, Image } from 'semantic-ui-react';
import image1 from '../assets/photos/testPhotos/1.jpg';
import image2 from '../assets/photos/testPhotos/2.jpg';
import image3 from '../assets/photos/testPhotos/3.jpg';
import profile from '../assets/photos/jake.jpg';


class Section extends Component {

    render() {

        return (
            <Container>
                <br />
                <h1>About me:</h1>
                <Segment raised >
                    <Grid>
                        <Grid.Column width={4}>
                            <Image src={profile} size='small' circular />
                        </Grid.Column>
                        <Grid.Column width={9}>

                            <p>is an experienced media professional with 5+ years in broadcasting, freelance videography, and creative media design.</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image src='/images/wireframe/media-paragraph.png' />
                        </Grid.Column>
                    </Grid>
                </Segment>
                <h1>Recent Projects:</h1>
                <Segment raised >
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column><Image src={image1} /></Grid.Column>
                            <Grid.Column><Image src={image2} /></Grid.Column>
                            <Grid.Column><Image src={image3} /></Grid.Column>
                            <Grid.Column><Image src={image1} /></Grid.Column>
                            <Grid.Column><Image src={image2} /></Grid.Column>
                            <Grid.Column><Image src={image3} /></Grid.Column>
                            <Grid.Column><Image src={image1} /></Grid.Column>
                            <Grid.Column><Image src={image2} /></Grid.Column>
                            <Grid.Column><Image src={image3} /></Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment raised >
                    <h1>Who I've Worked With:</h1>
                </Segment>

                <Segment raised >
                    <h1>Video Projects</h1>
                    <p>Video 1<br /> Video 2<br /></p>
                </Segment>

                <Segment raised >
                    <h1>Resume</h1>
                    <p>Resume<br /> Work History<br /></p>
                </Segment>

                <Segment raised >
                    <h1>Footer</h1>
                </Segment>
            </Container>
        );
    }
}

export default Section;
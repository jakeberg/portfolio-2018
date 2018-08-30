import React, { Component } from 'react';
import { Container, Segment, Grid, Image, Card } from 'semantic-ui-react';
import image1 from '../assets/photos/projects/foodfetch.png';
import image2 from '../assets/photos/projects/kwitter.png';
import image3 from '../assets/photos/projects/sokoban.png';
import image4 from '../assets/photos/projects/tower.png';
import image5 from '../assets/photos/projects/connectfour.png';
import image from '../assets/photos/projects/1.jpg';
import profile from '../assets/photos/jake.jpg';


class Section extends Component {

    render() {

        return (
            <Container className="all-content">
                <br />
                <h1>About me:</h1>
                <Segment raised className="transparent">
                    <Grid>
                        <Grid.Column width={3}>
                            <Image src={profile} size='small' circular />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={10}>
                            <p>Jacob Berg is an experienced media professional with 5+ years in broadcasting, freelance videography, and creative media design.</p>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image src='http://tradepending.com/wp-content/uploads/2015/03/placeholder.png' />
                        </Grid.Column>
                    </Grid>
                </Segment>
                <h1>Recent Projects:</h1>
                <Segment raised className="transparent">
                    <Grid verticalAlign='middle'  centered>
                        <Grid.Column mobile={16} tablet={8} computer={5}>
                            <a href="https://team-cheese.herokuapp.com/" className="ui medium image">
                                <div className="ui fluid image">
                                    <div className="ui blue ribbon label">React/SQL</div>
                                    <img src={image1} />
                                </div> 
                            </a>  
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={5}>
                            <a href="https://kwitter-jake.herokuapp.com/" className="ui medium image">
                                <div className="ui fluid image">
                                    <div className="ui blue ribbon label">React/Mongo</div>
                                    <img src={image2} />
                                </div> 
                            </a>  
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={5}>
                            <a href="https://jakeberg.github.io/sokoban/" className="ui medium image">
                                <div className="ui fluid image">
                                    <div className="ui yellow ribbon label">JavaScript</div>
                                    <img src={image3} />
                                </div> 
                            </a>  
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={5}>
                            <a href="https://jakeberg.github.io/towerOfHanoi/" className="ui medium image">
                                <div className="ui fluid image">
                                    <div className="ui yellow ribbon label">JavaScript</div>
                                    <img src={image4} />
                                </div> 
                            </a>  
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={8} computer={5}>
                            <a href="https://jakeberg.github.io/connectFour/" className="ui medium image">
                                <div className="ui fluid image">
                                    <div className="ui yellow ribbon label">JavaScript</div>
                                    <img src={image5} />
                                </div> 
                            </a>  
                        </Grid.Column>
                    </Grid>
                </Segment>
                <h1>Technology:</h1>
                <Segment raised className="transparent">
                    <Card.Group itemsPerRow={10} centered>
                        <Card raised image="https://cdn-images-1.medium.com/max/384/1*To2H39eauxaeYxYMtV1afQ.png" />
                        <Card raised image="https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg" />
                        <Card raised image="https://s24255.pcdn.co/wp-content/uploads/2017/07/postgresql-logo.png" />
                        <Card raised image="data:image/png;base64,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" />
                        <Card raised image="https://vignette.wikia.nocookie.net/howtoprogram/images/a/a9/CSS3.png/revision/latest?cb=20130422012035" />
                        <Card raised image="http://cdn1.cloudpro.co.uk/sites/cloudprod7/files/styles/thumbnail_large_620x350/public/Adobe_Creative_Cloud_logotype_with_icon_RGB_vertical_0.jpg?itok=s22idzOi" />
                    </Card.Group>
                <h1>Education:</h1>
                <Segment raised className="transparent">
                    <Grid celled='internally'>
                        <Grid.Row>
                            <Grid.Column width={2}>
                                <Image src='https://static1.squarespace.com/static/5992c2c7a803bb8283297efe/t/5b2a595a2b6a2875afd7027c/1529502678388/kenzie_logo' />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <p>Kenzie Academy is a coding school based in Indianapolis, IN. As a student, I have created Javascript games, built Twitter clones, and developed React apps from the ground up.</p> </Grid.Column>
                            <Grid.Column width={3}>
                                <Image src='/images/wireframe/image.png' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={2}>
                                <Image src='https://brand.iu.edu/images/resources-trident.jpg' />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <p>I studied production and design during my time at Indiana University. The skills I learned as a production student have made me incredibly organized and diligent in my work. I shot documentaries shown in film festivals, created motion graphics, worked on a Big Ten Network television show, and was employed at the local PBS station.</p>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Image src='/images/wireframe/image.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>

        );
    }
}

export default Section;
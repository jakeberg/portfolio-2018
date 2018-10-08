import React, { Component } from 'react';
import { Container, Segment, Grid, Image, Card } from 'semantic-ui-react';
import image1 from '../assets/photos/projects/foodfetch.png';
import image2 from '../assets/photos/projects/kwitter.png';
import image3 from '../assets/photos/projects/sokoban.png';
import image4 from '../assets/photos/projects/tower.png';
import image5 from '../assets/photos/projects/connectfour.png';
import image from '../assets/photos/projects/1.jpg';
import profile from '../assets/photos/jake.jpg';

const projectContent = [
    {
        label: "React/SQL",
        labelClass: "ui blue ribbon label",
        href: "https://team-cheese.herokuapp.com/",
        src: image1
    },
    {
        label: "React/Mongo",
        labelClass: "ui blue ribbon label",
        href: "https://kwitter-jake.herokuapp.com/",
        src: image2
    }

]


class Section extends Component {

    render() {

        return (
            <Container>
                <br />
                <h1>About me:</h1>
                <Segment raised className="transparent">
                    <Grid>
                        <Grid.Column width={3}>
                            <Image src={profile} size='small' circular />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={13}>
                            <p>Jacob Berg is an experienced media professional with 5+ years in broadcasting, freelance videography, and creative media design.</p>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <h1>Recent Projects:</h1>
                <Segment raised className="transparent" >
                    <Grid verticalAlign='middle'  className="center aligned">
                        {projectContent.map((project, index) => {
                            return (
                                <Grid.Column key={index} mobile={16} tablet={8} computer={5}>
                                    <a href={project.href} className="ui medium image">
                                        <div className="ui fluid image">
                                            <div className={project.labelClass}>{project.label}</div>
                                            <img src={project.src} />
                                        </div> 
                                    </a>  
                                </Grid.Column>
                            )
                        })}
                        {/* <Grid.Column mobile={16} tablet={8} computer={5} >
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
                        </Grid.Column> */}
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
                            <Card raised image="http://cdn1.cloudpro.co.uk/sites/cloudprod7/files/styles/thumbnail_large_620x350/public/Adobe_Creative_Cloud_logotype_with_icon_RGB_vertical_0.jpg?itok=s22idzOi" />
                        </Card.Group>
                </Segment>
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
                            <p><u>Telecommunications</u></p>
                            <br/>
                            JULY 2007 - MAY 2012

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
                            <p><u>Web and Software Development</u></p>
                            <br/>
                            JAN 2017 - PRESENT

                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>

        );
    }
}

export default Section;
import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';
import imageHeader from '../assets/photos/bg.jpg';

class Section extends Component {

    render() {
        return (
            <Container>
                <section className="section section-a">
                    <div className="container">
                        <h1>About</h1>
                        <p>is an experienced media professional with 5+ years in broadcasting, freelance videography, and creative media design.</p>
                    </div>
                </section>
                <section className="section section-b">
                    <div className="container">
                        <div className="row">
                            <h1>Who I've Worked With:</h1>
     
                        </div>
                        <br />
                        <div className="row">

                        </div>
                    </div>
                </section>

                <section className="section section-c">
                    <div className="container">
                        <h1>Video Projects</h1>
                        <p>Video 1<br /> Video 2<br /></p>
                    </div>
                </section>

                <section className="section section-d">
                    <div className="container">
                        <h1>Web Projects</h1>
                        <p>Video 1<br /> Video 2<br /></p>
                    </div>
                </section>


                <section className="section section-e">
                    <div className="container">
                        <h1>Resume</h1>
                        <p>Resume<br /> Work History<br /></p>
                    </div>
                </section>

                <section className="section section-f">
                    <div className="container">
                        <h1>Footer</h1>
                    </div>
                </section>
            </Container>
        );
    }
}

export default Section;
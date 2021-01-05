import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profile from '../../assets/img/profile/Profile.jpg'

const AboutMeComponent = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={profile} rounded/>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Satya Deva Ankey.</strong>
                                <br />I am a Computer Science graduate student at Northeastern University, Boston.
                                Prior to this, I worked as a Software Engineer in Deloitte, Hyderabad for more than 2 years after finishing
                                my Bachelors in 2018 from Chaitanya Bharathi Institute of Technology, Hyderabad. I like problem solving and
                                is proficient in the Java programming language. My other skills include SQL, React, HTML, CSS, JavaScript, Python
                                and SpringBoot.
                                <br/>
                                <br/>
                                Apart from academics, I am also very active in extra-curricular and co-curricular activities. I served as the placement
                                co-ordinator of CBIT for the 2014-2018 batch and was the captain of the department's Cricket, Badminton and Table-Tennis teams.
                                In my free time, I like to do problem solving on leetcode, play sports, watch movies and learn about gravity & time.
                                <br />
                                <br />
                            </Row>
                            <Row>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default AboutMeComponent;

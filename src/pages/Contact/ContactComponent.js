import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const ContactComponent = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>col1</Col>
                    <Col>col2</Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactComponent;

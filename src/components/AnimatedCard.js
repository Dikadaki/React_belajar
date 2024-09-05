import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './AnimatedCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimatedCard = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animasi hanya terjadi sekali
        threshold: 0.1, // Trigger ketika 10% dari card terlihat
        });
    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="justify-content-center px-10 align-self-center">
                <Col xs={12} md={6} lg={4} className="mb-4">
                    <Card ref={ref} className={`card ${inView ? 'slide-up' : ''} shadow-lg`}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Card Title 1</Card.Title>
                            <Card.Text className='overflow-y-scroll'>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-4">
                    <Card ref={ref} className={`card ${inView ? 'slide-up' : ''} shadow-lg`}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Card Title 2</Card.Title>
                            <Card.Text className='overflow-y-scroll'>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-4">
                    <Card ref={ref} className={`card ${inView ? 'slide-up' : ''} shadow-lg`}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Card Title 3</Card.Title>
                            <Card.Text className='overflow-y-scroll'>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    );
};

export default AnimatedCard;

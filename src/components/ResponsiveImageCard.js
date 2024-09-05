import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import alpukat from '../img/alpukat.jpg';
import naga from '../img/naga.jpg'
import leci from '../img/leci.jpg'


const ResponsiveImageCard = () => {
    const props = useSpring({
        from: { transform: 'translateY(50px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        config: { duration: 500 }
    });
    const propsb = useSpring({
        from: { transform: 'translateY(50px)', opacity: 0 },
        to: { transform: 'translateY(0)', opacity: 1 },
        config: { duration: 1000 }
    });
    return (
    <Container className="my-4 px-20">
        <div className='pb-5'>
        <Row className="align-items-center">
        <Col xs={12} md={6} className='order-md-2'>
        <animated.div style={props}>
            <Card.Img variant="top" src={alpukat} className='slide-up'/>
        </animated.div>
        </Col>
        <Col xs={12} md={6} className='order-md-1'>
            <Card.Body>
            <animated.div style={propsb}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            </animated.div>
            </Card.Body>
        </Col>
        </Row>
        </div>
        <div className='pb-5'>
        <Row className="align-items-center">
        <Col xs={12} md={6}>
        <animated.div style={props}>
            <Card.Img variant="top" src={naga} className='slide-up'/>
        </animated.div>
        </Col>
        <Col xs={12} md={6}>
            <Card.Body>
            <animated.div style={propsb}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            </animated.div>
            </Card.Body>
        </Col>
        </Row>
        </div>
        <div className='pb-5'>
        <Row className="align-items-center">
        <Col xs={12} md={6} className='order-md-2'>
        <animated.div style={props}>
            <Card.Img variant="top" src={leci} className='slide-up'/>
        </animated.div>
        </Col>
        <Col xs={12} md={6} className='order-md-1'>
            <Card.Body>
            <animated.div style={propsb}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            </animated.div>
            </Card.Body>
        </Col>
        </Row>
        </div>
    </Container>
    );
};

export default ResponsiveImageCard;

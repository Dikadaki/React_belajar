import React from 'react';
import { Carousel } from 'react-bootstrap';
import alpukat from '../img/alpukat.jpg';
import naga from '../img/naga.jpg'
import leci from '../img/leci.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeCarousel.css'

const HomeCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={alpukat}
                    alt="First slide"
                    style={{height: '100vh', objectFit: 'cover'}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={leci}
                    alt="Second slide"
                    style={{height: '100vh', objectFit: 'cover'}}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={naga}
                    alt="Third slide"
                    style={{height: '100vh', objectFit: 'cover'}}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeCarousel;

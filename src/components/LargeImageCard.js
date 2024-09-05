import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import naga from '../img/naga.jpg'

const LargeImageCard = () => {
    return (
    <Card className="mb-3" style={{ maxWidth: '100%' }}>
        <div className="row g-0">
        <div className="col-md-4">
            <Card.Img 
            src={naga}
            alt="Card image"
            style={{ height: '100%', objectFit: 'cover' }} 
            />
        </div>
        <div className="col-md-8">
            <Card.Body>
                <Card.Title>Large Card Title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </div>
        </div>
    </Card>
    );
};

export default LargeImageCard;

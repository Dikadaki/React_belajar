import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = ({ title, description, image }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="left" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CustomCard;

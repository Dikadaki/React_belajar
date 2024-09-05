import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulir = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = `Product Name: ${productName}\nPrice: ${price}\nDescription: ${description}`;
        const whatsappLink = `https://wa.me/<YOUR_PHONE_NUMBER>?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    return (
    <Container>
        <Row className="justify-content-md-center">
        <Col md={6}>
            <h2 className="text-center mt-4">Formulir Jual Beli</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="productName" className="mb-3">
                <Form.Label>Nama Produk</Form.Label>
                <Form.Control
                type="text"
                placeholder="Masukkan nama produk"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group controlId="price" className="mb-3">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                type="number"
                placeholder="Masukkan harga produk"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            </Form.Group>

            <Form.Group controlId="description" className="mb-3">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan deskripsi produk"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
                Submit
            </Button>
            </Form>
        </Col>
    </Row>
    </Container>
    );
};

export default Formulir;

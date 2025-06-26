import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const Hero = () => {
    return (
        <section className="bg-black text-light py-5" id="hero">
             <Container fluid="lg">
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start">
                         <h1 className="display-4 fw-bold text-info">Level Up Your Style!</h1>
                        <p className="lead text-muted">Discover the future of fashion. Where your wear meets sleek design.</p>
                        <Button variant="outline-info" size="lg" href="#products">Shop Now</Button>
                    </Col>
                    <Col md={6} className="text-center mt-4 mt-md-0">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0622/3885/1281/files/image10_5ef3da2a-6494-4770-a0e8-4668930558b5_480x480.png?v=1711731734"
                        alt="Casual Summer Outifit"
                        className="img-fluid rounded-4 shadow"
                    />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
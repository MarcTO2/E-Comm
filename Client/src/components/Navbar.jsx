import React from "react";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

const Navbar = () => {
    return (
        <BsNavbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container>
                <BsNavbar.Brand href="/" className="fw-bold text-info fs-4">
                    VEX.E
                </BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="vex.e-navbar" />
                <BsNavbar.Collapse id="vex.e-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className="text-info text-light">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/shop" className="text-info text-light">
                            Shop
                        </Nav.Link>
                        <Nav.Link href="/about" className="text-info text-light">
                            About
                        </Nav.Link>
                        <Nav.Link href="/cart" className="text-info text-light">
                            Cart
                        </Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;
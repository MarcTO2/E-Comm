import React from "react";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const { cartCount } = useCart();
    
    return (
        <BsNavbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3 shadow-sm">
            <Container fluid>
                <BsNavbar.Brand href="/" className="fw-bold text-info fs-4">
                    StyleSculpt
                </BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="stylesculpt-navbar" />
                <BsNavbar.Collapse id="stylesculpt-navbar">
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
                            Cart <span className="badge bg-info text-dark">{cartCount}</span>
                        </Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;
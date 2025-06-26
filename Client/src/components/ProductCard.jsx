import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <Card className="bg-dark text-light h-100 shadow-sm border border-info rounded-4">
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title className="text-info fw-bold">{product.title}</Card.Title>
          <Card.Text className="text-muted">{product.description}</Card.Text>
          <h5>${product.price}</h5>
          <Button variant="outline-info" className="w-100 mt-3" onClick={() => addToCart(product)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    )
}

export default ProductCard;
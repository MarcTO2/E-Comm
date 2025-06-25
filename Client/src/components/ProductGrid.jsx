// src/components/ProductGrid.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const sampleProducts = [
  {
    id: 1,
    title: "Neon Jacket",
    description: "Futuristic windbreaker with LED lining.",
    price: 120,
    image: "https://via.placeholder.com/300x200/000000/00ffff?text=Neon+Jacket",
  },
  {
    id: 2,
    title: "Cyber Sneakers",
    description: "AI-enhanced comfort and glow soles.",
    price: 150,
    image: "https://via.placeholder.com/300x200/000000/00ffff?text=Cyber+Sneakers",
  },
  {
    id: 3,
    title: "Holo T-Shirt",
    description: "Color-shifting smart fabric t-shirt.",
    price: 90,
    image: "https://via.placeholder.com/300x200/000000/00ffff?text=Holo+T-Shirt",
  },
];

const ProductGrid = () => {
  return (
    <section className="bg-black text-light py-5" id="shop">
      <Container>
        <h2 className="text-info mb-4 text-center">Featured Products</h2>
        <Row className="g-4">
          {sampleProducts.map(product => (
            <Col key={product.id} xs={12} md={6} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductGrid;

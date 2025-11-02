import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/Card/ProducCard';

const Products = () => {
  const products = useSelector(state => state.products.items);
  return (
    <div style={{ display: 'flex' }}>
      {products.map( (p) => (<ProductCard key={p.id} product={p} />) )}
    </div>
  );
};

export default Products;

import React from 'react'
// import { useLocation, useParams } from 'react-router-dom'
// import ProductList from './ProductList.content';

const ProductDetail = ({ product,match }) => {
    const productId = parseInt(match.params.id);
    // const products = product.find((u) => u.id === productId);
    // const { id } = useParams();
    const products = product.find((products) => products.id === productId);
    if (!product) {
        return <div>User not found</div>;
      }
    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product Name: {products.name}</p>
            <p>Product Category: {products.category}</p>
            <p>Product Freshness: {products.freshness}</p>
            <p>Product Description: {products.description}</p>
            <p>Product Price: {products.price}</p>
        </div>
    )
}

export default ProductDetail
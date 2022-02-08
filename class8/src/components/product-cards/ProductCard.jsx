import React from "react";
// import { Link } from "react-router-dom";
import './ProductCard.scss'

export const ProductCard = ({product}) => {
return (
    <div className="product">
        <h3 className="product_info">Product details:</h3>
        <p>Product name: {product.title}</p>
        <p>Product description: {product.description}</p>
        <p>Product price: {product.price}</p>
        <img className="product_image"src={product.image} alt={product.title} srcset="" />

         {/* <Link><p>Product details:</p></Link> */}
    </div>
)
}
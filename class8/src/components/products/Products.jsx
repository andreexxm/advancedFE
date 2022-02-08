import React from "react";
import { ProductCard } from "../product-cards/ProductCard";
import "../product-cards/ProductCard";

export const Products = (props) => {
    
    const {products} = props;
    return (
        <>
        <div className="products">
            {
                !!products.length ? products.map((product) => (
                    <ProductCard key = {product.id} product = {product}/>
                )) : (
                    <h3>No products in the list soz</h3>
                )
            }
        </div>
        </>
    )
};
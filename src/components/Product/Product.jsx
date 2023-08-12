import React from 'react';
import "./Product.css"

const Product = ({ product }) => {
    const { id, img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: {price}</p>
                <p>Manufecturer:{seller}</p>
                <p>Ratting: {ratings} Stars</p>

            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;
import React from 'react';
import image from '../../../images/product -01.png';
import './Cart.css';
import { Button } from 'react-bootstrap';

const Cart = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="cart-header mt-3">
                    <h4>Shopping Cart</h4>
                </div>
                <div className="cart-boby">
                    <div className="single-cart-item">
                        <div className="single-cart-item-img d-flex">
                            <img src={image} alt="" />
                            <div className="">
                            <h3 className="mt-4">Perfume</h3>
                            <a className="float-start mt-2">Details</a>
                            </div>
                            <div className="mt-5 float-end price">
                                <h3>$399</h3>
                            </div>
                        </div>
                        <div className="float-end mx-5">
                            <h5>sub total $399</h5>
                        </div>
                        <div>
                            <button className="checkout-button" variant="outline">Checkout</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
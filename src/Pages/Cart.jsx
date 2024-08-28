import React from 'react';
import cartimg from "../img/cartimg.png";
import { NavLink } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { BsTrash } from 'react-icons/bs';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

function Cart() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    const handleRemoveClick = (id) => {
        removeFromCart(id);
    };

    const increaseQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item) {
            updateQuantity(id, item.quantity + 1);
        }
    };

    const decreaseQuantity = (id) => {
        const item = cart.find(item => item.id === id);
        if (item && item.quantity > 1) {
            updateQuantity(id, item.quantity - 1);
        }
    };
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    return (
        <div>
            {cart.length === 0 ?
                <div className="container">
                    <div className='card w-100 border shadow my-3' style={{ backgroundColor: "#f8f8f8" }}>
                        <img src={cartimg} alt="" className='img-fluid mx-auto d-block card-img-top w-25' />
                        <div className="card-body mx-auto text-center">
                            <h4 className="card-title">Your Cart Is Empty!</h4>
                            <p className="card-text">Browse our categories and discover our best deals!</p>
                            <button className="btn btn-outline-primary">
                                <NavLink to={"/"} className="link" aria-current="page">Start Shopping</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
                :
                (
                    <div className="container text-start">
                        <h4 className='text-center bg-secondary mt-2 text-light rounded-pill'>Your Cart. Total: ${totalPrice.toFixed(2) }</h4>
                        {cart.map((item) => (
                            <div key={item.id} className='d-flex shadow border pt-4 container-fluid rounded-4 my-2'>
                                <div className="">
                                    <img src={item.image} alt="" className='w-100 h-75' />
                                </div>
                                <div className='ms-2' style={{ width: "170%" }}>
                                    <h5>{item.title}</h5>
                                    <p className='h5'>Price : ${item.price}</p>
                                    <p className='h5'>Rate : {item.rating.rate}</p>
                                    <p className='h5'>Quantity: {item.quantity}</p>
                                    <p className='h5'>Added Time: {item.addedTime}</p>
                                </div>
                                <button
                                    className="btn btn-warning h-25 d-flex py-2 mx-1"
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                    <FaMinusCircle />
                                </button>
                                <button
                                    className="btn btn-danger h-25 d-flex"
                                    onClick={() => handleRemoveClick(item.id)}
                                >
                                    Remove <BsTrash className='mt-1' />
                                </button>
                                <button
                                    className="btn btn-primary h-25 d-flex py-2 mx-1"
                                    onClick={() => increaseQuantity(item.id)}
                                >
                                    <FaPlusCircle />
                                </button>
                            </div>
                        ))}                     
                    </div>
                )
            }
        </div>
    );
}

export default Cart;


// Pascalcase the initial and last word in upper case
// Camelcase the initial in lower case and last word in upper case
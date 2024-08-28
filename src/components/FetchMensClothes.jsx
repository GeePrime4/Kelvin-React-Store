import React, { useEffect, useState } from 'react';
import { FaCloudRain, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function FetchMensClothes() {
    const [mensClothes, setMensClothes] = useState([]);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const fetchMensClothes = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
            const resJson = await response.json();
            setMensClothes(resJson);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMensClothes();
    }, []);

    const handleAddToCartClick = (item) => {
        const check = localStorage.getItem('user');
        if (check) {
            addToCart(item);            
        } else {
            alert('Please Log In');
        }
    };

    return (
        <div>
            {mensClothes.length === 0 ? (
                <div className="d-flex justify-content-evenly align-items-center" style={{ height: "62vh" }}>
                    <h1 className="spinner-grow text-danger mx-auto"><FaCloudRain /></h1>
                </div>
            ) : (
                <div className='row g-0 p-4'>
                    {mensClothes.map(({ id, title, image, price, rating, description, category }) => (
                        <div className="col-sm-4 p-1" key={id}>
                            <div className="card p-2 border border-3 border-dark">
                                <img src={image} alt={description} className="card-img-top img-fluid" style={{ height: "270px" }} />
                                <div className="card-body h6">
                                    <div className="card-title">{title.slice(0, 40)}...</div>
                                    <div className="card-text">
                                        <p className="card-text text-italic overflow-hidden">{description.slice(0, 40)}...</p>
                                        <p className="card-text text-italic">{category.toUpperCase()}</p>
                                        <p className="card-text text-italic">${price}</p>
                                        <p className="card-text text-italic">{rating.rate}<FaStar color="yellow" /></p>
                                        <button
                                            className="card-link btn btn-dark"
                                            onClick={() => handleAddToCartClick({ id, title, image, price, rating, description, category })}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FetchMensClothes ;

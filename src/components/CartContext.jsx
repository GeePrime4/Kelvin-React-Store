import React, { createContext, useContext, useEffect, useState } from 'react';

const cartContext = createContext();

const useCart = () => useContext(cartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prevItems) => {
            const itemExists = prevItems.find((i) => i.id === item.id);
            if (itemExists) {
                return prevItems.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: (i.quantity || 1) + 1, addedTime: i.addedTime }
                        : i
                );
            } else {
                return [...prevItems, { ...item, quantity: 1, addedTime: new Date().toLocaleString() }];
            }
        });
    };

    const updateQuantity = (id, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </cartContext.Provider>
    );
};

export { CartProvider, useCart };

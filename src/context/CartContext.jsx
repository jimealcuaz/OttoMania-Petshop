import React from 'react';
import { useState } from 'react';
import { CounterContext } from './counterContext';

const CartContext = ({children}) => {

    const [cart, setCart]=useState([]);
   
   
    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({...item, quantity:newQuantity});
        setCart(newCart);
    }

    const clearCart=() => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


  return (
    <CounterContext.Provider value={{clearCart, isInCart, removeProduct, addProduct}}>
        {children}
    </CounterContext.Provider>
  )
}

export default CartContext
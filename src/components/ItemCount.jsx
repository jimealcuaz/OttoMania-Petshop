import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { CounterContext } from '../context/counterContext';

const ItemCount = () => {
    const {counter, increment, decrement, reset} = useContext(CounterContext);
    

    return (
        <div className="d-flex flex-column">
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">

                <button type="button" className="btn btn-secondary" onClick={()=>decrement()}>-</button>
                <button type="button" className="btn btn-light">{counter}</button>
                <button type="button" className="btn btn-secondary" onClick={()=>increment()}>+</button>
            </div>
            <div className="btn-group d-flex flex-column" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success">Agregar al carrito</button>
                <button type="button" className="btn btn-success" onClick={()=>reset()}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
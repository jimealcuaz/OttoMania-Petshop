import React, {useState, useContext} from 'react';
import CartContext from '../context/CartContext';
import ItemCount from './ItemCount';

const useCartContext = () => useContext (CartContext);

const ItemDetail = ({ productDetail }) => {

    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        addProduct(data,quantity);
    }
    return (
        <div className="df-itemdetail">
            <div className="card">
                <img src={productDetail.imagen} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{productDetail.nombre}</h5>
                    <p className="card-text">${productDetail.precio}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Categoria: {productDetail.categoria}</li>
                    <li className="list-group-item">Stock: {productDetail.stock}</li>
                </ul>
                <div className="card-body">
                    <div><CartContext><ItemCount /></CartContext></div>
                    <div className="btn-group d-flex flex-column" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-success">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
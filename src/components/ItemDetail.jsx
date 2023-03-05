import React from 'react'
import CartContext from '../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({ productDetail}) => {
    return (
        <div className="df-itemdetail">
            <div className="card">
                <img src={productDetail.imagen} className="card-img-top"/>
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
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail
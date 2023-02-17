import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <div>
            <div>
                <div className="card">
                    <img src={item.imagen} className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">${item.precio}</p>
                        <p className="card-text">Stock: {item.stock}</p>
                        <Link to="/item/:id">
                        <a href="#" className="btn btn-outline-secondary">Ver detalle</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
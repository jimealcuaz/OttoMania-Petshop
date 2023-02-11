import React from 'react'

const ItemCount = ({stock}) => {

    return (
        <div className="d-flex flex-column">
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-secondary">-</button>
                <button type="button" className="btn btn-light">{stock}</button>
                <button type="button" className="btn btn-secondary">+</button>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success">¡Quiero comprar!</button>
            </div>
        </div>
    )
}

export default ItemCount
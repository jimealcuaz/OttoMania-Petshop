import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ productDetail }) => {
    return (
        <div>
            <div className="card">
                <img src="#" className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                    <div><ItemCount stock={5} /></div>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail
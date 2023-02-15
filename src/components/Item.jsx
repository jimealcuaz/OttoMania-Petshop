import React from 'react'

const Item = ({item}) => {
    return (

        <div className="card">
            <img src="..." className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default Item
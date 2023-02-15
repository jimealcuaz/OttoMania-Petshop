import React from 'react';
import Item from './Item';


const ItemList = ({ productList }) => {


    return (

        <div>
            <div>
                {productList.map((item) => (
                    <Item key={item.nombre} 
                    item={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemList
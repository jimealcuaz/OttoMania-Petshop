import React from 'react';
import Item from './Item';


const ItemList = ({ productList }) => {


    return (

        <div>
            <div className="df-itemlist">
                {productList.map((item) => (
                    <Item key={item.id} 
                    item={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemList
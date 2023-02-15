import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState([]);
    const getDetail = () => {
        return new Promise((resolve, reject) => {
            if (productDetail.length === 0) {
                reject(new Error("No existen productos"))
            }
            setTimeout(() => {
                resolve(productDetail)
            }, 3000);
        })
    }

    return (
        <div><ItemDetail productDetail={productDetail} /></div>
    )
}

export default ItemDetailContainer
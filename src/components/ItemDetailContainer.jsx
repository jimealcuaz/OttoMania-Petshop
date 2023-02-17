import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const productos = [
        {
          id: 1,
          nombre: "Producto 1",
          precio: 1000,
          stock: 5,
          imagen: "/imagenes/perro1.jpg",
          categoria: "perros"
        },
        {
          id: 2,
          nombre: "Producto 2",
          precio: 2000,
          stock: 5,
          imagen: "/imagenes/perro2.jpg",
          categoria: "perros"
        },
        {
          id: 3,
          nombre: "Producto 3",
          precio: 3000,
          stock: 10,
          imagen: "/imagenes/perro3.jpg",
          categoria: "perros"
        },
        {
          id: 4,
          nombre: "Producto A",
          precio: 1500,
          stock: 7,
          imagen: "/imagenes/gatoa.jpg",
          categoria: "gatos"
        },
        {
          id: 5,
          nombre: "Producto B",
          precio: 2500,
          stock: 3,
          imagen: "/imagenes/gatob.jpg",
          categoria: "gatos"
        },
        {
          id: 6,
          nombre: "Producto C",
          precio: 3500,
          stock: 8,
          imagen: "/imagenes/gatoc.jpg",
          categoria: "gatos"
        },
      ];
    const [productDetail, setProductDetail] = useState({});
    const {id}=useParams()
    const getDetail = () => {
        return new Promise((resolve, reject) => {
            if (productos.length === 0) {
                reject(new Error("No existen productos"))
            }
            setTimeout(() => {
                resolve(productos)
            }, 3000);
        })
    }

    useEffect(()=>{
        getDetail()
        .then((res)=> setProductDetail(res.find((item)=> item.id === Number(id))))
    },[id])
    return (
        <div><ItemDetail productDetail={productDetail}/></div>
    )
}

export default ItemDetailContainer
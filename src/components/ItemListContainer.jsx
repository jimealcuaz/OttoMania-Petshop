import React from 'react';
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

const ItemListContainer = ({ greeting }) => {

  const [productList, setProductList] = useState([]);
  setProductList(datosFetched);
  console.log(productList);
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 1000,
      stock: 5
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 2000,
      stock: 5
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: 3000,
      stock: 10
    },
    {
      id: 4,
      nombre: "Producto A",
      precio: 1500,
      stock: 7
    },
    {
      id: 5,
      nombre: "Producto B",
      precio: 2500,
      stock: 3
    },
    {
      id: 6,
      nombre: "Producto C",
      precio: 3500,
      stock: 8
    },
  ];

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      if (productos.length === 0) {
        reject(new Error("No hay productos para mostrar"))
      }
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getProductos();
      setProductList(datosFetched);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <h2>{greeting}</h2>
      </div>
      <div><ItemCount stock={5} /></div>
      <div><ItemList productList={productList}/></div>
    </div>
  )
}

export default ItemListContainer
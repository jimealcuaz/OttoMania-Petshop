import React from 'react';
import ItemCount from "./ItemCount";
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <div>
        <h2>{greeting}</h2>
      </div>
      <div><ItemCount stock={5} /></div>
      <div><ItemList /></div>
    </div>
  )
}

export default ItemListContainer
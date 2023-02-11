import React from 'react';
import { useState } from 'react';

const Componente1 = () => {

    const [counter, setCounter] = useState(0);
 
    return (
    <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter-1)}>restar</button>
        <button onClick={() => setCounter(counter+1)}>sumar</button>
    </div>
  );
};

export default Componente1
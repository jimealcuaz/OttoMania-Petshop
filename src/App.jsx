import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";

const App = () => {

  let productos = [
    { id: 1, nombre: "producto1", precio: 1000 },
    { id: 2, nombre: "producto2", precio: 2000 },
    { id: 3, nombre: "producto3", precio: 3000 },
  ]
  const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if (descuento) {
      resolve("descuento aplicado");
    }
    else {
      reject("no existen descuentos");
    }
  });

  setTimeout(() => {
    console.log("setTimeOut");
  }, 2000);

  console.log(aplicarDescuento);


  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Todo para tu mascota en un solo lugar" />
      <ItemCount stock={5} />
    </div>
  );
};

export default App


import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Componente1 from "./components/Componente1";

const App = () => {


  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Todo para tu mascota en un solo lugar" />
      <Componente1 />
    </div>
  );
};

export default App


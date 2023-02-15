import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {


  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Todo para tu mascota en un solo lugar" />
      <ItemDetailContainer />
    </div>
  );
};

export default App


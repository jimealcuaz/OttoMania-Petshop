import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting= "Todo para tu mascota en un solo lugar"/>
    </div>
  );
};

export default App


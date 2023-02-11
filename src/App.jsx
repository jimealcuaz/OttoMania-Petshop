import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount";

const App = () => {

    return(
    <div>
      <NavBar/>
      <ItemListContainer greeting= "Todo para tu mascota en un solo lugar"/>
      <ItemCount stock={5}/>
    </div>
  );
};

export default App


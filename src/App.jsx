import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {


  return (
    <BrowserRouter>
      
      <NavBar />

      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="Todo para tu mascota en un solo lugar" />}/>
        <Route exact path="/ItemDC" element={<ItemDetailContainer />}/>
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App


import React from "react";
import Sidebar from "./sidebar";
import AboutApp from "./AboutApp";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AboutAuthor from "./AboutAuthor";
import ToDoList from "./ToDoList";
import NotFound from "./notfound";
import Home from "./Home";

function App() {
    return(
      <>

    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/About/AboutApp"element={<AboutApp/>}/>
      <Route path ="/About/AboutAuthor"element={<AboutAuthor/>}/>
      <Route path ="*"element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>     

    </>
    );
}

export default App;

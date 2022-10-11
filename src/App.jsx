import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Book from "./Components/Book/Book";

import Home from './Components/Home/Home'
import Login from "./Components/Login/Login";
const App = () => {

    
    
    return(
        <div className="app">
                <Routes  >

                    <Route path = '/'  element={<Home />} />

                    <Route path='/login' element={<Login />}></Route>

                    <Route path='/register' element={<Book/>}></Route>
                </Routes>
        </div>

    )
}

export default App
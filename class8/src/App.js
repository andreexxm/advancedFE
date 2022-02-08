import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import React, {useEffect, useState} from 'react';
// import { Playground } from './components/playground/Playground';
import {Home} from "./components/home/Home"
import {Products} from "./components/products/Products"
import { AddProducts } from './components/add-product/AddProduct';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    console.log('component did mount');
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();

    setProducts(result);

  };

  return (
    <>
      {/* <Playground /> */}

    <Router>
      <Header />
      
      <Routes>
        <Route path={"/"} element={<Home/>}  />
        <Route path={"/products"} element={<Products products={products}/>}  />
        <Route path={"/add"} element={<AddProducts/>}  />
        {/* empty slash signifies the the default route */}
      </Routes>
    </Router>

    </>
  );
}

export default App;

// export const vs default there is a difference between the export but also between the way the exported file is imported:
// when we export a const, we have to import the file with hardcoded {}
//if we only have const -> export default....
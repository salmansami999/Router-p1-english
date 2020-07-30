import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Product from './Product';
import ProductDetails from './ProductDetails';
import ProductHome from './ProductHome';


function NotFound() {
  return <div><h1>Path Not Found</h1></div>
}


function App() {

  const navigate = useNavigate();
  return (
    

    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link> |{' '}
        <Link to="about">About</Link> |{' '}
        <Link to="products">Product</Link> |{' '}
        <Link to="/products/mobile">Mobile</Link> |{' '}
        <Link to="/products/laptop">Laptop</Link>|{' '}
        <button onClick={ ()=>{
            navigate('/about');
        }}>
          Display About Page
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
         <Route path="products" element={<Product />}>
           <Route path="/" element={<ProductHome />}></Route>
           <Route path=":productId" element={<ProductDetails />}></Route>
           
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div >
    
  );
}

export default App;

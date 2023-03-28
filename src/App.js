import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css';


import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import SignIn from './components/signup_sign/SignIn';
import SignUP from './components/signup_sign/SignUP';
import Navbaar from "./components/home/Navbaar";
import Newnav from "./components/home/Newnav";
import Cart from "./components/Cart/Cart";
import Buynow from "./components/buynow/Buynow";
//import { Routes,Route } from 'react-router-dom';

{/*import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import SignIn from './components/signup_sign/SignIn';
import SignUP from './components/signup_sign/SignUP';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow'; */}

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/header" element={<Navbaar/>}/>
        <Route path="/newnav" element={<Newnav/>}/>
        <Route path ="/" element={<Maincomp/>}/>
        <Route path ="/login" element={<SignIn/>}/>
        <Route path ="/register" element={<SignUP/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/buynow' element={<Buynow/>}/>
        
      </Routes>
    </BrowserRouter>
    <Footer/>
      
    </div>
  );
}

export default App;

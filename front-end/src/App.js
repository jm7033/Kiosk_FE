import React, {Suspense, lazy, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const IntroPage = lazy(() => import('./pages/IntroPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));

const App = () => {

  const [receipt, setReceipt] = useState({
    order : undefined,
    type : undefined,
    menus : [],
    totalPrice : 0,
  });

  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
            <Route path='/' element={<IntroPage receipt={receipt} setReceipt={setReceipt}/>}/>
            <Route path='/order' element={<OrderPage receipt={receipt} setReceipt={setReceipt}/>}/>
            <Route path='/menu' element={<MenuPage receipt={receipt} setReceipt={setReceipt} cart={cart} setCart={setCart}/>}/>
            <Route path = "menu/:category" element={<MenuPage receipt={receipt} setReceipt={setReceipt} cart={cart} setCart={setCart}/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
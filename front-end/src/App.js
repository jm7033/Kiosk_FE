import React, {Suspense, lazy, useState} from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

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

  const params = useParams();
  const category = params.category || 'all';

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
            <Route path='/' element={<IntroPage receipt={receipt} setReceipt={setReceipt}/>}/>
            <Route path='/order' element={<OrderPage receipt={receipt} setReceipt={setReceipt}/>}/>
            <Route path='/menu' element={<MenuPage receipt={receipt} setReceipt={setReceipt} category={category}/>}/>
            <Route path = "menu/:category" element={<MenuPage receipt={receipt} setReceipt={setReceipt}/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
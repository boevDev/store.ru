import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import TShirtCatalog from './pages/Catalog/Catalog';
import Gocheckout from './pages/Gocheckout/Gocheckout';
import CatalogsList from './pages/CatalogsList/CatalogsList';

export default function App() {
  return (
    <div>
      <Header />
      <div className='w-full flex justify-center items-center'>
        <div className='w-full max-w-screen-2xl px-4'>
          <Routes>
            <Route path='/' element={<CatalogsList />} />
            <Route path='product/:category/:id' element={<ProductDetails />} />
            <Route path='cart' element={<Cart />} />
            <Route path='catalog/:category' element={<TShirtCatalog />} />
            <Route path='gocheckout' element={<Gocheckout />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

import './App.css';
import {  React } from 'react';
import Shimmer from './Utils/Shimmers/Shimmer';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BookDetails from "./Pages/BookDetails";
import Cart from './Pages/Cart';
import Order from './Pages/Order';

// const Home = React.lazy(() => import('./Pages/Home'));
// const BookDetails = React.lazy(() => import('./Pages/BookDetails'));
// const Cart = React.lazy(() => import('./Pages/Cart'));
// const Order = React.lazy(() => import('./Pages/Order')); 

function App() {
  return (
    <div className="bg-[#111827] min-h-screen relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookdetails" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector(store => store.cart.cartItems);
  return (
    <div className="fixed z-10 flex items-center justify-around w-full h-16 py-2 shadow-2xl bg-inherit">
      <h1 className="font-sans text-4xl italic font-semibold tracking-wide text-gray-200 ">
        BooksHub
      </h1>

      <div className="flex items-center gap-10">
        <Link to="/" className="font-sans text-lg font-normal text-gray-200">
          Home
        </Link>
        <Link
          to="/order"
          className="font-sans text-lg font-normal text-gray-200"
        >
          My Orders
        </Link>
        <div className="relative">
          <Link
            to="/cart"
            className="font-sans text-lg font-normal text-gray-200"
          >
            <MdOutlineAddShoppingCart className="text-2xl" />
          </Link>
          <h1 className="absolute top-0 font-bold text-yellow-300 -right-3 ">
            {cart.length}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header
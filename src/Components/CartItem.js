import React from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { decrementItem, incrementItem, removeCartItem } from "../Utils/Slices/cartSlice";
import { useDispatch } from "react-redux";
import CartItemTemplate from "./CartItemTemplate";


const CartItem = ({ title, author_name, isbn, totalItems, _version_ }) => {
  const dispatch = useDispatch();

  console.log("totalItems", totalItems);

  return (
    <div className="flex items-center justify-between w-2/3 px-4 py-2 shadow-2xl">
      <CartItemTemplate
        isbn={isbn}
        title={title}
        author_name={author_name}
        imgMaxWidth={`max-w-[100px]`}
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <RiSubtractFill
            onClick={() => dispatch(decrementItem(_version_))}
            className="w-6 h-6 text-white border-2 border-yellow-500 rounded-full aspect-square"
          />
          <h1 className="px-3 text-white ">{totalItems}</h1>
          <IoMdAdd
            onClick={() => dispatch(incrementItem(_version_))}
            className="w-6 h-6 text-white border-2 border-yellow-500 rounded-full aspect-square"
          />
        </div>
        <button
          onClick={() => dispatch(removeCartItem(_version_))}
          className="px-4 py-1 font-sans text-base font-medium text-yellow-500 rounded shadow-md bg-emerald-950"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

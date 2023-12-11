import React from 'react'
import fallBackImage from "../Assets/imageNotFound.png";
import { getCoverImg } from "../Utils/constant";

const CartItemTemplate = ({isbn, title, author_name, imgMaxWidth, className = "", onClick}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 ${className} w-full`}
    >
      <div className={`${imgMaxWidth} rounded overflow-hidden aspect-square h-full`}>
        <img
          className="object-cover w-full h-full"
          src={getCoverImg(isbn[0])}
          alt="cartImage"
          onError={(e) => (e.currentTarget.src = fallBackImage)}
        />
      </div>

      <div>
        <h1 className="font-sans text-xl font-medium leading-6 text-gray-300">
          {title}
        </h1>
        <p className="flex items-center font-sans text-sm font-normal text-gray-300 gap-x-1">
          <span className="font-sans italic font-light text-sx opacity-70 ">
            by
          </span>
          {author_name.slice(0, 3).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default CartItemTemplate
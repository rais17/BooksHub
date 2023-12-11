import React, { useEffect, useState } from "react";
import { getCoverImg, isItemInCart } from "../Utils/constant";
import fallBackImage from "../Assets/imageNotFound.png";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../Utils/Slices/cartSlice";

const Card = ({
  title,
  first_publish_year,
  language,
  author_name,
  isbn,
  _version_,
  className = "",
  isIcon = true
}) => {
  const [cartMsg, setCartMsg] = useState(null);
  const cart = useSelector(store => store.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const isPresent = isItemInCart(cart, _version_);
    setCartMsg(isPresent);
  }, [])

  const addToCart = () => {
    dispatch(
      addCartItems({
        title: title,
        first_publish_year: first_publish_year,
        language: language,
        author_name: author_name,
        isbn: isbn,
        _version_: _version_,
        totalItems: 1
      })
    );
    setCartMsg(true);
  };

  return (
    <div
      className={`shadow-2xl flex items-center px-2 py-4 gap-4 ${className}`}
    >
      <div className="max-w-[160px] h-[210px] aspect-square rounded-md overflow-hidden shadow-md hover:scale-105 transition-all duration-200 ">
        <img
          className="w-full h-full object-coverr "
          src={getCoverImg(isbn?.[0])}
          alt=""
          loading="lazy"
          onError={(e) => (e.currentTarget.src = fallBackImage)}
        />
      </div>

      <div className="space-y-1">
        <h1 className="font-sans text-xl font-medium leading-6 text-gray-300">
          {title}
        </h1>
        <h2 className="flex items-center font-sans text-sm font-normal text-gray-300 gap-x-1">
          <span className="font-sans italic font-light text-sx opacity-70 ">
            by
          </span>{" "}
          {author_name.slice(0, 3).join(", ")}
        </h2>
        <div>
          <p className="flex items-center pt-2 font-sans text-sm font-normal text-gray-300 gap-x-1">
            <span className="font-sans text-xs font-normal">
              First publish in
            </span>{" "}
            {first_publish_year}
          </p>
          <p className="flex items-center -mt-1 font-sans text-base font-medium text-gray-300 gap-x-1">
            <span className="font-sans text-xs font-normal">Available in</span>{" "}
            {language}
          </p>
        </div>

        {isIcon && (
          <button
            onClick={() => addToCart()}
            className="px-4 py-1 font-sans text-base font-medium text-yellow-500 rounded shadow-md bg-emerald-950"
          >
            {cartMsg ? `Item Added` : `Add to Cart`}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

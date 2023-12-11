import React from 'react'
import { useSelector } from 'react-redux';
import PlaceOrderTemplate from "../Components/PlaceOrderTemplate"
import SearchBar from '../Components/SearchBar';
import { extractItems } from '../Utils/constant';
import CartItemTemplate from '../Components/CartItemTemplate';

const Order = () => {
  const orderss = useSelector(store => store.placeOrder);
  const filteredResults = useSelector((store) => store.filteredResults?.results);

  // const books = [...orderss?.currentOrder?.items, ...orderss?.previousOrder?.items];
  const allItems = [
    ...extractItems(orderss.currentOrder),
    ...extractItems(orderss.previousOrder),
  ];



  return (
    <div className="py-20 text-white">
      <div className="max-w-5xl mx-auto space-y-10">
        <SearchBar books={allItems} />
        {filteredResults ? (
          <div className="flex w-full h-16 px-28">
            <CartItemTemplate
              title={filteredResults?.[0]?.title}
              isbn={filteredResults?.[0]?.isbn}
              author_name={filteredResults?.[0]?.author_name}
              imgMaxWidth={`max-width-[70px]`}
              className="transition-all duration-300 ease-linear rounded hover:bg-gray-800"
            />
          </div>
        ) : (
          <div className="space-y-10">
            <div className="space-y-2">
              {orderss?.currentOrder?.length > 0 && (
                <h1 className="pb-2 text-3xl font-medium text-gray-300 border-b-[1px] border-gray-500 font-sans">
                  Current Order
                </h1>
              )}
              <PlaceOrderTemplate orders={orderss?.currentOrder} />
            </div>
            <div className="space-y-2">
              {orderss?.previousOrder?.length > 0 && (
                <h1 className="pb-2 text-3xl font-medium text-gray-300 border-b-[1px] font-sans border-gray-500">
                  Previous Orders
                </h1>
              )}
              <PlaceOrderTemplate orders={orderss?.previousOrder} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order
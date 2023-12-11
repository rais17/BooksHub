import React from 'react'

const OrderDetails = ({orderID, date, time}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="font-sans text-sm font-normal text-gray-200">{orderID}</h1>

      <div className="flex flex-col items-center gap-[2px">
        <h2 className="font-sans text-xs text-gray-200">
          <span className="font-sans text-xs text-gray-200">Order Date -</span>{" "}
          {date}
        </h2>
        <h3 className="font-sans text-xs text-gray-200">
          <span className="font-sans text-xs text-gray-200">Order Time -</span>{" "}
          {time}
        </h3>
      </div>
    </div>
  );
}

export default OrderDetails
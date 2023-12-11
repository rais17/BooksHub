import React from 'react'
import OrderDetails from './OrderDetails'
import OrderItems from './OrderItems'

const PlaceOrderTemplate = ({orders}) => {
  return (
      <div className='flex flex-col w-full gap-16'>
          {
              orders?.map(order => {
                  return (
                    <div className='flex flex-col w-full gap-2 shadow-2xl'>
                      <OrderDetails
                        orderID={order?.orderID}
                        date={order?.date}
                        time={order?.time}
                        />
                          
                        <OrderItems items={order?.items} />
                    </div>
                  );


              })
         } 
    </div>
  )
}

export default PlaceOrderTemplate
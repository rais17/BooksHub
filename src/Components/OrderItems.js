import React from 'react'
import CartItemTemplate from './CartItemTemplate';
import { useDispatch } from 'react-redux';
import { addToBookDetails } from '../Utils/Slices/booksSlice';
import { useNavigate } from 'react-router-dom';


const OrderItems = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (item) => {
    dispatch(addToBookDetails(item));
    navigate("/bookdetails");
  }
  
  return (

      <div className='w-full space-y-2'>
          {
              items.map(item => {
                  return (

                    <CartItemTemplate
                        onClick={() => handleClick(item)}
                        isbn={item?.isbn}
                        title={item?.title}
                        author_name={item?.author_name}
                        imgMaxWidth={`max-w-[70px]`}
                        className="transition-all duration-300 ease-linear rounded hover:bg-gray-800"
                      />

                  );
              })
          }
    </div>
  )
}

export default OrderItems
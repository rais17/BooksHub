import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Components/Card';
import { IoReturnUpBackSharp } from "react-icons/io5";
import { removeBookDetails } from '../Utils/Slices/booksSlice';
import { useNavigate } from 'react-router-dom';



const BookDetails = () => {
  const book = useSelector((store) => store.books.booksDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("boooooooooooks detailssss aagya ", book);
  const handleClick = () => {
    dispatch(removeBookDetails());
    navigate("/order");
  }
  return (
    <div className="w-full py-20">
      <div className="max-w-5xl mx-auto">
        <IoReturnUpBackSharp
          className="text-3xl text-yellow-500 cursor-pointer"
          onClick={handleClick}
        />
        <Card {...book} className="w-full" isIcon={false} />
      </div>
    </div>
  );
}

export default BookDetails
import React, { useEffect, useRef, useState } from "react";
import useFilteredBooks from "../CustomHook/useFilteredBooks";
import { formatName } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setFilteredResults } from "../Utils/Slices/filteredResultsSlice";
import { RxCross2 } from "react-icons/rx";

const SearchBar = ({ books }) => {
  const [searchTxt, setSearchTxt] = useState("");
  const selectedRef = useRef(null);

  const dispatch = useDispatch();

  const filterBooks = useFilteredBooks();

  const handleSearch = () => {
    filterBooks(books, selectedRef.current.value, formatName(searchTxt));
  };

  useEffect(() => {
    !searchTxt && dispatch(setFilteredResults(null));
  }, [searchTxt]);

  return (
    <div className="flex items-center justify-center max-w-4xl mx-auto mt-20">
      <select
        className="bg-[#374151] text-gray-200 px-5 py-2 border font-sans text-sm outline-none"
        name="books"
        ref={selectedRef}
      >
        <option className="font-sans" value="title">
          Title
        </option>
        <option className="font-sans" value="author_name">
          Author
        </option>
      </select>

      <div className="relative flex items-center w-1/2">
        <input
          value={searchTxt}
          className="w-full px-3 py-2 font-sans text-sm text-gray-700 border border-none focus:outline-none "
          onChange={(e) => setSearchTxt(e.target.value)}
          type="text"
          placeholder="Search book using title or author name..."
        />
        {searchTxt && (
          <RxCross2
            onClick={() => {
              setSearchTxt("");
              dispatch(setFilteredResults(null));
            }}
            className="absolute z-20 text-xl font-extrabold text-black cursor-pointer right-2"
          />
        )}
      </div>

      <button
        onClick={() => handleSearch()}
        className="px-6 py-2 font-sans text-sm text-white border"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

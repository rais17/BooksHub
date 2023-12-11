import React from 'react'
import SearchBar from '../Components/SearchBar'
import { useSelector } from 'react-redux';
import Cards from '../Components/Cards'
import useOpenLibrary from "../CustomHook/useOpenLibrary";
import { OPEN_LIBRARY_URL, QUERY_PARAMS } from "../Utils/constant";

const Home = () => {
  useOpenLibrary(OPEN_LIBRARY_URL + QUERY_PARAMS);
  const books = useSelector((store) => store.books?.booksCatalog);
  return (
    <div className="w-full min-h-screen py-10 space-y-4">
      <SearchBar books={books} />
      <Cards />
    </div>
  );
}

export default Home
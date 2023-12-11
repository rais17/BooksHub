import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';


const Cards = () => {

  const booksCatalog = useSelector((store) => store.books?.booksCatalog);
  const [displayBooksCatalog, setDisplayBooksCatalog] = useState(booksCatalog);
  const filteredResults = useSelector(store => store.filteredResults?.results);
  

  useEffect(() => {
      filteredResults &&
      Array.isArray(filteredResults) &&
      filteredResults.length > 0 &&
      setDisplayBooksCatalog(filteredResults);

  }, [filteredResults]);

  useEffect(() => {
    booksCatalog && !filteredResults && setDisplayBooksCatalog(booksCatalog)
  }, [booksCatalog, filteredResults]);

  return (
    <div className="flex flex-wrap max-w-6xl gap-4 mx-auto">
      {displayBooksCatalog &&
        displayBooksCatalog.map((book) => (
          <Card
            key={book._version_}
            {...book}
            className="w-[calc(50%-16px)] "
          />
        ))}
    </div>
  );
}

export default Cards
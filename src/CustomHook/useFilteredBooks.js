import { useDispatch } from "react-redux";
import { setFilteredResults } from "../Utils/Slices/filteredResultsSlice";

const useFilteredBooks = () => {

    const dispatch = useDispatch();

  const filterBooks = (books, filterKey, filterValue) => {
    if (!filterValue) return dispatch(setFilteredResults(null));

      const filtered = books.filter((book) => {
        const keyValue = book[filterKey];
        if (Array.isArray(keyValue)) {
          return keyValue.some((name) => name.includes(filterValue));
        }
        return keyValue.includes(filterValue);
      });

      dispatch(setFilteredResults(filtered));
    };

    return filterBooks;

}

export default useFilteredBooks
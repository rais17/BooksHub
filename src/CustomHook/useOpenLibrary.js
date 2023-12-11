import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../Utils/Slices/booksSlice";

const useOpenLibrary = (url) => {

    const dispatch = useDispatch();
    const booksCatalog = useSelector((store) => store.books.booksCatalog);

    useEffect(() => {
        !booksCatalog &&
          !Array.isArray(booksCatalog) &&
          !booksCatalog?.length > 0 &&
          getOpenLibraryData();
    }, [url]);

    const getOpenLibraryData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();

            dispatch(addBooks(json.docs));
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

export default useOpenLibrary;
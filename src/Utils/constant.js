export const OPEN_LIBRARY_URL = `https://openlibrary.org/search.json?q=`;
export const QUERY_PARAMS = ['bestseller', 'award-winning'];
export const getCoverImg = (isbnNum) => `https://covers.openlibrary.org/b/isbn/${isbnNum}-L.jpg?default=false`;

export const formatName = (name) => {
  return name
    .trim() 
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
    .join(" ");
}

export const isItemInCart = (cart, id) => {
    return cart.some(
      (item) => item._version_ === id
    );
}

export const extractItems = (orders) => orders.map((order) => order.items).flat();

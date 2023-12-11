import { useDispatch, useSelector } from "react-redux";
import CartItem from '../Components/CartItem';
import { removeCart } from "../Utils/Slices/cartSlice";
import { addPlaceOrder } from "../Utils/Slices/placeOrderSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const handleOrder = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    const orderID = `order-${Date.now()}`;

    const items = {
      orderID: orderID,
      date: formattedDate,
      time: formattedTime,

      items: cartItems
    };

    dispatch(addPlaceOrder(items));
    dispatch(removeCart());
    navigate("/order");
  }

  return (
    <div className="flex flex-col items-center max-w-6xl py-20 mx-auto gap-y-4">
      {cartItems.map((item) => (
        <CartItem key={item._version_} {...item} />
      ))}

      {cartItems.length > 0 && (
        <button
          onClick={() => handleOrder()}
          className="px-16 py-2 font-sans text-2xl font-medium text-white bg-orange-500"
        >
          Place Order
        </button>
      )}
    </div>
  );
}

export default Cart
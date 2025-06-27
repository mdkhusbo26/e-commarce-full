import emptyCart from '../assets/images/emptyCart.svg';
import cartWithItem from '../assets/images/cartWithItem.svg';
import { Link } from 'react-router-dom';
import shopIcon from '../assets/images/shop.svg';
import {
  setShowCart,
  offProductView,
} from '../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
  let productShow = useSelector(state => state.products.isLogedIn);
  let cart = useSelector(state => state.products.cartItem);

  const showLoginOption = () => {
    if (productShow) {
      return (
        <ul className="flex float-right space-x-4 mr-2">
          <li className="bg-pink-200 border-2 border-pink-400 my-auto p-1 text-cyan-600 rounded-md">
            Products
          </li>
          <li
            onClick={() => {
              dispatch(setShowCart());
              dispatch(offProductView());
            }}
            className="border-2 border-pink-400 rounded-full p-1 bg-pink-200"
          >
            <img
              src={cart.length ? cartWithItem : emptyCart}
              alt="cart icon"
              className="h-7"
            />
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex float-right space-x-4 mr-2">
          <Link
            to="/login"
            className=" mt-2 bg-pink-200 border-2 border-pink-400 p-1 text-cyan-600 rounded-md w-28  text-center"
          >
            Login
          </Link>
        </ul>
      );
    }
  };

  let dispatch = useDispatch();
  return (
    <div className="flex justify-between">
      <img src={shopIcon} alt="" />
      <div>{showLoginOption()}</div>
    </div>
  );
}

export default Navbar;

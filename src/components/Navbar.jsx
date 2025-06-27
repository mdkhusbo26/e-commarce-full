import emptyCart from '../assets/images/emptyCart.svg';
// import cartWithItem from '../assets/cartWithItem.svg';
import {
  setShowCart,
  offProductView,
} from '../features/products/productsSlice';
import { useDispatch } from 'react-redux';

function Navbar() {
  let dispatch = useDispatch();
  return (
    <div>
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
          <img src={emptyCart} alt="cart icon" className="h-7" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

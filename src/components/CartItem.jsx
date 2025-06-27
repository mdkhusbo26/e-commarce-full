import { useSelector, useDispatch } from 'react-redux';
import {
  removeCart,
  updateCartItemCount,
  clearCart,
} from '../features/products/productsSlice';

function CartPage() {
  let cart = useSelector(state => state.products.cartItem);
  let showCart = useSelector(state => state.products.showCart);
  let dispatch = useDispatch();

  let totalUnitPrice = v => {
    let x = (v.productCount * v.price).toFixed(2);
    return x;
  };

  let getCartTotal = () => {
    return cart
      .reduce((acc, v) => acc + v.price * v.productCount, 0)
      .toFixed(2);
  };

  let itemCountPlus = i => {
    let saveProduct = cart[i];
    dispatch(
      updateCartItemCount({
        newValue: {
          id: saveProduct.id,
          title: saveProduct.title,
          productCount:
            saveProduct.productCount < 20
              ? saveProduct.productCount + 1
              : saveProduct.productCount,
          price: saveProduct.price,
          thumbnail: saveProduct.thumbnail,
        },
        index: i,
      })
    );
  };
  let itemCountMinus = i => {
    let saveProduct = cart[i];

    dispatch(
      updateCartItemCount({
        newValue: {
          id: saveProduct.id,
          title: saveProduct.title,
          productCount:
            saveProduct.productCount > 1
              ? saveProduct.productCount - 1
              : saveProduct.productCount,
          price: saveProduct.price,
          thumbnail: saveProduct.thumbnail,
        },
        index: i,
      })
    );
  };

  const cartItems = () =>
    cart.map((v, i) => (
      <div
        key={i}
        className="flex gap-2 bg-gray-300 rounded-md mt-2 w-full px-3 py-1"
      >
        <img
          src={v.thumbnail}
          alt="PorductImage"
          className="w-16 h-16 hover:scale-125 transition-transform"
        />
        <div className="flex flex-col w-full my-auto">
          <div className="flex justify-between w-full">
            <p className="text-lg font-sans">{v.title}</p>
            <button onClick={() => dispatch(removeCart(i))} className="">
              ✕
            </button>
          </div>
          <div className="flex gap-2">
            <h3 className="px-1 my-auto bg-gray-100 text-cyan-600 text-sm rounded-md border-2 border-gray-400 py-1">
              Price: ${v.price}
            </h3>
            <div className="flex px-2 gap-2 mx-autotext-cyan-600 bg-slate-100 rounded-md border-2 border-gray-400">
              <button onClick={() => itemCountMinus(i)}>-</button>
              <span className="bg-gray-400 px-2 my-auto text-sm text-white font-sans rounded-full">
                {v.productCount}
              </span>
              <button onClick={() => itemCountPlus(i)}>+</button>
            </div>
            <h4 className="px-1 my-auto bg-gray-100 text-cyan-600 text-sm rounded-md border-2 border-gray-400 hover:scale-110 transition-transform py-1">
              Total: ${totalUnitPrice(v)}
            </h4>
          </div>
        </div>
      </div>
    ));

  return (
    <div
      className={`absolute z-10 bg-pink-200 border-2 border-pink-400 opacity-95 right-5 top-14 p-2 w-[445px] min-h-48 max-h-[450px] overflow-y-auto rounded-xl ${
        showCart ? '' : 'hidden'
      }`}
    >
      {cart.length ? (
        <div>
          {cartItems()}
          <div className="flex justify-between mt-4 px-2 py-1 border-t-2 border-gray-400 pt-2">
            <p className="text-md font-semibold text-gray-700">Total Price:</p>
            <p className="text-md font-semibold text-cyan-700">
              ${getCartTotal()}
            </p>
          </div>
          <div className="flex justify-between mt-4 px-2 py-1 border-t-2 border-gray-400 pt-2">
            <button
              onClick={() => dispatch(clearCart())}
              className="text-sm font-semibold text-cyan-700 rounded-md px-1"
            >
              Remove All
            </button>
            <button className="text-md font-semibold text-cyan-700 border-2 border-pink-400 bg-gray-300 rounded-md px-1">
              Check Out
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Cart is empty</p>
      )}
    </div>
  );
}

export default CartPage;

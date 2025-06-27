import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCart,
  offCart,
  setProductView,
  productCartCountMinus,
  productCartCountPlus,
  productCartCountOne,
  offProductView,
} from '../features/products/productsSlice';
import {} from '../features/products/productsSlice';

function ProductCard() {
  let products = useSelector(state => state.products.apiProducts?.products);
  let productShow = useSelector(state => state.products.productView);
  let cart = useSelector(state => state.products.cartItem);
  let productCartCount = useSelector(state => state.products.productCartCount);
  let [saveProduct, setSaveProuct] = useState('');

  let dispatch = useDispatch();

  let addItem = () => {
    let cartExist = cart?.filter(v => v.id === saveProduct.id);
    if (cartExist[0]?.id !== saveProduct.id) {
      dispatch(
        addCart({
          id: saveProduct.id,
          title: saveProduct.title,
          productCount: productCartCount,
          price: saveProduct.price,
          thumbnail: saveProduct.thumbnail,
        })
      );
    } else {
      alert('Already Added');
    }
    dispatch(productCartCountOne());
    dispatch(offProductView());
  };

  let renderProducts = () => {
    return products?.map(v => (
      <div
        className="max-h-64 w-44 bg-white cursor-pointer"
        key={v.id}
        onClick={() => {
          setSaveProuct(v);
          dispatch(setProductView());
          dispatch(offCart());
        }}
      >
        <img src={v.thumbnail} alt="PorductImage" className="w-44 h-44" />
        <div className="mx-2">
          <h1 className="font-serif text-sm">{v.title}</h1>
          <h3>
            <span className="text-xl  text-orange-300">{v.price}</span>
            <span className="text-sm">{v.discountPercentage}%</span>
          </h3>
        </div>
      </div>
    ));
  };

  let showProduct = () => {
    if (!productShow) return null;
    else {
      return (
        <div className=" max-w-3xl p-6 bg-gray-100 shadow-xl rounded-2xl  z-30 fixed border-2 border-pink-200">
          {/* Close Button */}
          <button
            onClick={() => {
              dispatch(setProductView());
              setSaveProuct('');
              dispatch(productCartCountOne());
            }}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Images */}
            <div className="flex flex-wrap gap-4">
              {saveProduct.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`product-${index}`}
                  className="w-40 h-40 object-cover rounded-lg border hover:scale-110 transition-transform"
                />
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{saveProduct?.title}</h2>
              <p className="text-gray-600">{saveProduct?.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-yellow-500 font-semibold">
                  ⭐ {saveProduct?.rating}
                </span>
                <span className="text-sm text-gray-500"></span>
              </div>
              <p className="text-3xl font-bold text-green-600">
                ${saveProduct?.price}
              </p>
              <div className="flex px-3 py-1 gap-4 mx-auto bg-slate-400 rounded-full">
                <button onClick={() => dispatch(productCartCountMinus())}>
                  -
                </button>
                <span className="bg-gray-100 px-3 py-1 text-pink-400 font-sans font-semibold rounded-full">
                  {productCartCount}
                </span>
                <button onClick={() => dispatch(productCartCountPlus())}>
                  +
                </button>
              </div>
              <button
                onClick={() => addItem()}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {products?.length ? (
        renderProducts()
      ) : (
        <p className="text-orange-400 text-xl">Loading...</p>
      )}
      {showProduct()}
    </>
  );
}

export default ProductCard;

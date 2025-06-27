import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addProduct,
  offProductView,
  offCart,
} from '../features/products/productsSlice';

function ProductList() {
  let dispatch = useDispatch();
  let [productsCategory, setProductsCategory] = useState([]);
  let [catName, setCatName] = useState('');

  let [smList, setSmList] = useState(false);

  let getProducts = () => {
    if (catName === '' || catName === 'all') {
      axios
        .get('https://dummyjson.com/products')
        .then(productRes => productRes.data)
        .then(finalResponse => {
          dispatch(addProduct({ apiProducts: finalResponse }));
        });
      dispatch(offProductView());
      dispatch(offCart());
    } else {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then(res => res.data)
        .then(finalRes => {
          dispatch(addProduct({ apiProducts: finalRes }));
        });
      dispatch(offProductView());
      dispatch(offCart());
    }
  };

  let getCategory = () => {
    axios
      .get('https://dummyjson.com/products/category-list')
      .then(res => res.data)
      .then(finalRes => {
        setProductsCategory(finalRes);
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, [catName]);

  let renderList = () => {
    return productsCategory?.map((v, i) => (
      <li
        key={i}
        onClick={() => setCatName(v)}
        className=" border-2 border-pink-300 rounded-full px-2 bg-pink-100 mb-1 text-cyan-600 cursor-pointer"
      >
        {v.charAt(0).toUpperCase() + v.slice(1)}
      </li>
    ));
  };
  let renderListsm = () => {
    return productsCategory?.map((v, i) => (
      <li
        key={i}
        onClick={() => {
          setCatName(v);
          setSmList(false);
        }}
        className="border-b-2 border-b-pink-300 px-2 mb-2 text-cyan-700 cursor-pointer hover:bg-gray-300 rounded"
      >
        {v.charAt(0).toUpperCase() + v.slice(1)}
      </li>
    ));
  };

  return (
    <div>
      <div className=" max-lg:hidden">
        <ul>
          <li
            onClick={() => setCatName('all')}
            className=" border-2 border-pink-300 rounded-full px-2 bg-pink-100 mb-1 text-cyan-600"
          >
            All Products
          </li>
          {renderList()}
        </ul>
      </div>
      <div className="lg:hidden">
        <button
          onClick={() => setSmList(prev => !prev)}
          className={`left-1 text-xl font-semibold top-16 fixed z-50 ${
            smList ? 'hidden' : ''
          }`}
        >
          ☰
        </button>
        <div
          className={`bg-gray-400 absolute  left-0 w-54 p-4 shadow-lg  rounded ${
            smList ? '' : 'hidden'
          }`}
        >
          <div className="flex justify-end">
            <span
              onClick={() => setSmList(prev => !prev)}
              className={`text-xl text-cyan-600 cursor-pointer hover:text-red-600 ${
                smList ? '' : 'hidden'
              }`}
            >
              ✕
            </span>
          </div>
          <ul>
            <li
              onClick={() => {
                setCatName('all');
                setSmList(false);
              }}
              className="border-b-2 border-b-pink-300 px-2 mb-2 text-cyan-700 cursor-pointer hover:bg-gray-300 rounded"
            >
              All Products
            </li>
            {renderListsm()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;

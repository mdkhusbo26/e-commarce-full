import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';

import ProductList from '../components/ProductList';
import CartItem from '../components/CartItem';

function Home() {
  return (
    <div className="h-auto  bg-gray-300 flex">
      <div className="px-3 pt-2 w-screen min-h-screen">
        <CartItem />

        <Navbar />

        <div className="flex">
          <div className="ml-12">
            <ProductList />
          </div>
          <div className="grid grid-cols-4 col-start-4 w-10/12 max-sm:col-start-2 max-sm:grid-cols-2 gap-3 max-sm:w-11/12 max-lg:col-start-3 max-lg:grid-cols-3 max-w-[780px] mx-auto">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

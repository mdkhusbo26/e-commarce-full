import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    apiProducts: [],
    apiList: [],
    cartItem: [],
    productCartCount: 1,
    showCart: false,
    productView: false,
  },
  reducers: {
    addProduct: (state, action) => {
      const { apiProducts } = action.payload;
      state.apiProducts = apiProducts;
    },
    addCatName: (state, action) => {
      const { catName } = action.payload;
      state.catName = catName;
    },
    productCartCountMinus: state => {
      state.productCartCount =
        state.productCartCount > 1
          ? state.productCartCount - 1
          : state.productCartCount;
    },
    productCartCountPlus: state => {
      state.productCartCount = state.productCartCount + 1;
    },
    productCartCountOne: state => {
      state.productCartCount = 1;
    },
    addCart: (state, action) => {
      state.cartItem.push(action.payload);
    },
    clearCart: state => {
      state.cartItem = [];
    },
    updateCartItemCount: (state, action) => {
      const { newValue, index } = action.payload;
      state.cartItem[index] = newValue;
    },
    removeCart: (state, action) => {
      const removeItemId = action.payload;
      state.cartItem = state.cartItem.filter((v, i) => i !== removeItemId);
    },
    setShowCart: state => {
      state.showCart = !state.showCart;
    },
    offCart: state => {
      state.showCart = false;
    },
    setProductView: state => {
      state.productView = !state.productView;
    },
    offProductView: state => {
      state.productView = false;
    },
  },
});

export const {
  addProduct,
  addCatName,
  addCart,
  showCart,
  setShowCart,
  offCart,
  offProductView,
  setProductView,
  removeCart,
  productCartCountPlus,
  productCartCountMinus,
  productCartCountOne,
  updateCartItemCount,
  clearCart,
} = productsSlice.actions;

export default productsSlice.reducer;

import { productActions } from "../reducers/productReducer";
import { createAsyncThunk } from '@reduxjs/toolkit';

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `http://localhost:8000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    dispatch(productActions.getAllProducts({ data }));
  };
}


export const getProductDetail = createAsyncThunk(
    'product/getProductDetail',
    async (id, { rejectWithValue }) => {
      try {
        const response = await fetch(`http://localhost:8000/products/${id}`);
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Could not fetch product');
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

export const productAction = { getProducts, getProductDetail };

// function getProducts(searchQuery){
//     return async(dispatch, getState)=>{
//         let url = `http://localhost:8000/products?q=${searchQuery}`;
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log("프로덕트액션에서: ", data)
//         dispatch({type:"GET_PRODUCT_SUCCESS", payload:{ data }});
//         };
// }

// function getProductDetail(searchQuery) {
//     return async (dispatch) => {
//       let url =  `http://localhost:8000/products?q=${searchQuery}`;
//       let response = await fetch(url);
//       let data = await response.json();
//       dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
//     };
//   }
//   export const productAction = { getProducts, getProductDetail };
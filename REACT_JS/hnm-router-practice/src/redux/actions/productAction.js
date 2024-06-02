function getProducts(searchQuery){
    return async(dispatch, getState)=>{
        let url = `http://localhost:8000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log("프로덕트액션에서: ", data)
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{ data }});
        };
}

function getProductDetail(searchQuery) {
    return async (dispatch) => {
      let url =  `http://localhost:8000/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
    };
  }
  export const productAction = { getProducts, getProductDetail };
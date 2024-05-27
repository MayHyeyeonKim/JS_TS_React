import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const PrivateRoute = ({isLoggedIn}) => {
    const location = useLocation();
  return isLoggedIn?( <ProductDetail/> ) : ( <Navigate to="/login" replace state={{to:location}} />)
}

export default PrivateRoute
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate()
  const goProductPage=()=>{
    navigate('/products?q=skirts&page=3')
  };
  return (
    <div>
        <p>Homepage</p>
        <Link to="/about">Go to Aboutpage </Link>
        <button onClick={goProductPage}> go to product page </button>
    </div>
  )
}

export default Homepage
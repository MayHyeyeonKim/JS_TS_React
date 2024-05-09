import React from 'react'
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
    const navigate = useNavigate()

    const goToHomepage=()=>{
        navigate('/')
    }

  return (
    <div>
        <p>Aboutpage</p>
        <button onClick={goToHomepage}>Go to HomePage</button>
    </div>
    
  )
}

export default Aboutpage
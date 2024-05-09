import React from 'react'
import { Link} from "react-router-dom";
import Aboutpage from './Aboutpage';
const Homepage = () => {
  return (
    <div>
        <p>Homepage</p>
        <Link to="/about">Go to Aboutpage </Link>
    </div>
  )
}

export default Homepage
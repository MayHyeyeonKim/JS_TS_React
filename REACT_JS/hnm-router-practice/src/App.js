import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import ProductAll from './page/ProductAll';
import LoginPage from './page/LoginPage';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';
//1. Product Page, Login, Product Detail Page ✅
// 1-1 navigation bar
//2. On the Product Page, all products can be viewed
//3. When the login button is pressed, the login page is displayed
//4. If the product detail is pressed without being logged in, the login page will appear first. If logged in, the product detail page can be viewed.
//5. By clicking the logout button, one is logged out.
//6. Once logged out, the product detail page cannot be viewed; the login page reappears.
//7. When logged in, the logout button is visible, and when logged out, the login button is visible.
//8. Products can be searched.

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(()=>{
  //   console.log(isLoggedIn)
  // },[isLoggedIn])

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("handleLogin함수가 실행됨")
  };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ProductAll /> }/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;

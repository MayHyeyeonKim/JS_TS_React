import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import LoginPage from './page/LoginPage';
import ProductDetail from './page/ProductDetail';
//1. Product Page, Login, Product Detail Page ✅
//2. On the Product Page, all products can be viewed
//3. When the login button is pressed, the login page is displayed
//4. If the product detail is pressed without being logged in, the login page will appear first. If logged in, the product detail page can be viewed.
//5. By clicking the logout button, one is logged out.
//6. Once logged out, the product detail page cannot be viewed; the login page reappears.
//7. When logged in, the logout button is visible, and when logged out, the login button is visible.
//8. Products can be searched.

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAll />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
      </Routes>
    </div>
  );
}

export default App;

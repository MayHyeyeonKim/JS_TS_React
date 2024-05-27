import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Beauty",
    "Sport",
    "Sale",
    "Sustainability",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    console.log("key press");
    if (event.key == "Enter") {
    //   console.log("엔터눌림", event.key);
      let keyword = event.target.value;
    //   console.log(keyword);
    navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div> Login </div>
        {/* <div>{isLoggedIn ? 'Logout' : 'Login'}</div> */}
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            onKeyPress={(event) => search(event)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

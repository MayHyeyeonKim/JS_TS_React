import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids', 'H&M HOME', 'Beauty', 'Sport', 'Sale', 'Sustainability']

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login')
    }

  return (
    <div>
        <div className='login-button' onClick={goToLogin}>
        <div><FontAwesomeIcon icon={faUser} /></div>
        <div> Login </div>
        {/* <div>{isLoggedIn ? 'Logout' : 'Login'}</div> */}
        </div>
        <div className='nav-section'>
            <img width={100}src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" />
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu) => (
                    <li>{menu}</li>
                ))}
            </ul>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                <input type="text" placeholder='Search'></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar
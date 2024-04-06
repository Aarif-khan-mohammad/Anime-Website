import React from 'react'
import { NavLink  , withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = (props) => {
    const onClickLogout = ()=>{
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
    }
  return (
    <header className='header'>
      <h1 className='logo'> <span className='span-logo'>AR</span> Anime</h1>
      <div className='left-head'>
        <ul className='head-list'>
            <li className='nav-links'><NavLink to="/" className='nav-link'>Home</NavLink></li>
            <li className='nav-links'><NavLink to="/about" className='nav-link'>Animes</NavLink></li>
        </ul>
        <button type="button" className="logout-desktop-btn" onClick={onClickLogout} >
            Logout
        </button>
      </div>
      
    </header>
  )
}

export default withRouter(Header)

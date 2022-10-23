import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom'

function Header(){
   
    return (
        <nav className="header-nav">
            <NavLink to="/">
                <img src={logo} alt='Kasa' className='header-nav__logo' />
            </NavLink>

            <div className="header-nav__links">
                <NavLink to="/" className={(isActive) =>
                    isActive ? "header-nav__links--active" : "header-nav__links--inactive"
                    }  > 
                    Accueil
                </NavLink>

                <NavLink  to="/about" className={(isActive) =>
                    isActive ? "header-nav__links--active" : "header-nav__links--inactive"
                    }  >
                    À Propos
                </NavLink>
            </div>
        </nav>                   
    )
}


export default Header
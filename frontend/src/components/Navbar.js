import'./Navbar.css';
import {Link} from 'react-router-dom';

export const Navbar = ({click}) => {
  return (
    <nav className= "navbar">

        <div className = "navbar__logo">
            <h2> Martinas Store </h2>
        </div>


        <ul className= "navbar__links">
            <li>
                <Link to="/cart" className="cart__link">
                <i className='fas fa-shopping-cart'></i>
                <span>
                    Carrito 
                    <span className = 'cartlogo__badge'> 0 </span>
                </span>
                </Link>
            </li>
            <li>
                <Link to="/">
                Tienda
                </Link>
            </li>

        </ul>


        <div className = "hamburger__menu" onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </nav>
  )
};

export default Navbar;

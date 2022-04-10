import'./Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = ({click}) => {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;


    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty + Number(item.qty), 0)
    };

    return (
    <nav className= "navbar">

        <div className = "navbar__logo">
            <Link to = '/'><img className = "navbar__imgtitle" src = "martinas_title.png" alt="Martinas_title"></img></Link>
        </div>


        <ul className= "navbar__links">
            <li>
                <Link to="/cart" className="cart__link">
                <i className='fas fa-shopping-cart'></i>
                <span>
                    Carrito 
                    <span className = 'cartlogo__badge'> {getCartCount() }</span>
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

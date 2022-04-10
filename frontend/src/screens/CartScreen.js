import './CartScreen.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

//components
import CartItem from '../components/CartItem';

//Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';

const CartScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () =>{
        return cartItems.reduce((qty, item) => Number(item.qty) + qty,0);
    };

    const addThousandSeparator = (str) => (
        str.toLocaleString('de')
    );

    const getCartSubtotal = () => {
        return cartItems.reduce((price,item) => (item.price * item.qty) + price,0);
    };


    return <div className='cartscreen'>

                <div className = "cartscreen__left">

                    <h2> Carrito de Compras </h2>

                    {cartItems.length === 0 ? (
                        <div> El Carrito esta Vacío
                            <Link to="/"> Regresar a la Tienda </Link>  
                        </div>
                    ): (cartItems.map((item) => 
                        (<CartItem 
                            key={item.product}
                            item = {item}
                            qtyChangeHandler = {qtyChangeHandler}
                            removeFromCartHandler = {removeFromCartHandler}
                        />)))
                    }

                </div>
                    
                <div className = "cartscreen__right">
                    <div className="cartscreen__info">
                        <p> Subtotal {getCartCount()} items</p>
                        <p> $ {getCartSubtotal().toLocaleString('de')} </p>
                    </div>
                    <div>
                        <button> Pagar</button>
                    </div>
                </div>


           </div>
};

export default CartScreen;
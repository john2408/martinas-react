import './Product.css';
import {Link} from 'react-router-dom';

const Product = () => {
  return (
    <div className="product">
        <img src="images/1.jpg" alt=""/>

        <div className="product__info">
            <p className="info__name">Product 1</p>
            <p className="info__description"> Lorem ipsum</p>
            <p className= "info__price">$ 499.99</p>
        </div>

        <Link to={`/product/${1111}`} className='info__button'> Personalizar</Link>
    </div>
  )
};

export default Product;
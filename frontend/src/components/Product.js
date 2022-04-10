import './Product.css';
import {Link} from 'react-router-dom';

const Product = ({imagePath, title, price, description, productId} ) => {
  return (
    <div className="product">
        <img src={imagePath} 
             alt={title}/>

        <div className="product__info">
            <p className="info__name">{title}</p>
            <p className="info__description"> {description.substring(0,100)}...</p>
            <p className= "info__price">{price.toLocaleString('de') }</p>
        </div>

        <Link to={`/product/${productId}`} className='info__button'> Personalizar</Link>
    </div>
  );
};

export default Product;
import './ProductScreen.css'
import {Link} from 'react-router-dom';

const ProductScreen = () => {
    return <div className='productscreen'>
                <div className = "productscreen__left">

                    <div className = "left__image">
                        <img src="../images/1.jpg" alt=""/>
                    </div>

                    <div className= "left__info">
                        <p className= "left__name"> Product 1</p>
                        <p className= "left__price"> $ 499 </p>
                        <p className= "left__description"> Description </p>
                    </div>
                </div>

                <div className="productscreen__right">
                    <div className="right__info">
                        <p>
                            Precio: <span>$ 499.99</span>
                        </p>
                        <p>
                            Estado: <span>In Stock</span>
                        </p>
                        <p>
                            Cantidad
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </p>
                        <p>
                            <button type="button"> Agregar al Carrito</button>
                        </p>


                    </div>
                </div>

                
            </div>
};

export default ProductScreen;
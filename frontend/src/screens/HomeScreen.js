import './HomeScreen.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Product from "../components/Product";
import Banner from '../components/Banner';

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'

const HomeScreen = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts)
  const {products, loading, error} = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch] );

  console.log(products)

  return (<div className='homescreen'>
  <Banner/>
  <h2 className = "homescreen__title">Desayunos Sorpresa</h2>
  
  
  <div className = "homescreen__products">
   {loading ? <h2>Loading...</h2> 
    : error ? <h2>{error}</h2>
    : products.map(product => (
      <Product 
        key = {product._id}
        productId = {product._id}
        title = {product.title}
        price = {product.price}
        description = {product.description}
        imagePath = {product.imagePath}
      />
    ) )}
    
  </div>
  
  
  
  </div>)
};

export default HomeScreen;
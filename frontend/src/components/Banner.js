import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Banner = () => {
  return (
    <Carousel autoPlay dynamicHeight={true} width="100%">
        <div>
            <img alt="" src="images/1.jpg" className='banner__img' />
            <p className="legend">Legend 1</p>  
        </div>
        <div>
            <img alt="" src="images/2.jpg" className='banner__img'/>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="images/3.jpg" className='banner__img'/>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="images/4.jpg" className='banner__img'/>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="images/5.jpg" className='banner__img'/>
            <p className="legend">Legend 2</p>
        </div>
        
    </Carousel>
  )
}

export default Banner;
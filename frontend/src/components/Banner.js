import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// Ref: http://react-responsive-carousel.js.org/storybook/?path=/story/01-basic--base
export const Banner = () => {
  return (
    <Carousel autoPlay dynamicHeight={true} width="100%" showThumbs={false} infiniteLoop= {true} showStatus= {false}>
        <div>
            <img alt="" src="images/1.jpg" className='banner__img' />
        </div>
        <div>
            <img alt="" src="images/2.jpg" className='banner__img'/>
        </div>
        <div>
            <img alt="" src="images/3.jpg" className='banner__img'/>
        </div>
        <div>
            <img alt="" src="images/4.jpg" className='banner__img'/>
        </div>
        <div>
            <img alt="" src="images/5.jpg" className='banner__img'/>
        </div>
        
    </Carousel>
  )
}

export default Banner;

//<p className="banner__legend">Legend 1</p>  
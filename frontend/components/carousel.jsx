import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class NewCarousel extends React.Component {
  render() {
    return (
      <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div className="carousel">
          <img src="http://res.cloudinary.com/rebekahliu/image/upload/c_fill,h_1078,w_1500/v1506441441/sea-2755908_1920_yj46cq.jpg" />
          <div className='carousel-slide-1'>
            <h1>Creators unite here</h1>
            <h3>Use kickstarter to explore the bounds of creativity</h3>
          </div>
        </div>
        <div className='carousel'>
          <img src="http://res.cloudinary.com/rebekahliu/image/upload/v1506556498/pexels-photo-278810_ixcmhy.jpg" />
          <div className='carousel-slide-2'>
            <span>Make your idea a reality</span><br />
            <Link to='/project/new'>Create a project</Link>
          </div>
        </div>

        <div className='carousel'>
          <img src="http://res.cloudinary.com/rebekahliu/image/upload/v1506556796/nature-branches-leaf-leaves_tks96f.jpg" />
          <div className='carousel-slide-3'>
            <span>Add something new to your collection</span> <br />
            <Link to='/categories'>Explore</Link>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default NewCarousel;

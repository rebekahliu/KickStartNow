import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class NewCarousel extends React.Component {
  render() {
    return (
      <Carousel showArrows={true}>
        <div className="carousel">
          <img src="http://res.cloudinary.com/rebekahliu/image/upload/v1506313367/praline-182861_1920_fzf2p2.jpg" />
        </div>
        <div>
          <img src="http://res.cloudinary.com/rebekahliu/image/upload/v1506286732/hot-2574466_1920_pcnovs.jpg" />
        </div>
        <div>
          <img src="http://res.cloudinary.com/rebekahliu/image/upload/v1506233874/pug-690566_1920_dyd2ts.jpg" />
        </div>
      </Carousel>
    );
  }
}

export default NewCarousel;

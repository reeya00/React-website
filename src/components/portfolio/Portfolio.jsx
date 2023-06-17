import React from 'react';
import './portfolio.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG7 from '../../assets/portfolio7.jpg';


const Portfolio = () => {
  const carouselSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {/* Add your portfolio items here */}
        {/* <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

        <div className="carousel">
          <Slider {...carouselSettings}>
            <div className='slide'>
              <h3>Dhoon</h3>
              <img src={IMG1} alt=''/>
            </div>
            <div>
              <h3>Zerone</h3>
              <img src={IMG2} alt=''/>
            </div>
            <div>
              <h3>Github Field Day</h3>
              <img src={IMG3} alt=''/>
            </div>
            <div>
              <h3>LOCUS</h3>
              <img src={IMG4} alt=''/>
            </div>
            <div>
              <h3>ParkMitra</h3>
              <img src={IMG7} alt=''/>
            </div>
            <div>
              <h3>Digital Art</h3>
              <img src={IMG5} alt=''/>
            </div>
            <div>
              <h3>Digital Art</h3>
              <img src={IMG6} alt=''/>
            </div>
  
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

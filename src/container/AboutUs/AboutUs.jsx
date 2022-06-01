import React from 'react';

import './AboutUs.css';
import { images } from '../../constants'

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="big-G" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content-about'>
        <h1 className='headtext__cormorant'>About US</h1>
        <img src={images.spoon} alt="spoon image" className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eum commodi illum, molestiae illo nobis doloremque impedit vero accusamus, aliquam ab asperiores laudantium labore suscipit sequi, quia nostrum alias numquam?</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content-knife'>
         <img src={images.knife} alt="images.knife"/>
      </div>
      <div className='app__aboutus-content-history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="spoon image" className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eum commodi illum, molestiae illo nobis doloremque impedit vero accusamus, aliquam ab asperiores laudantium labore suscipit sequi, quia nostrum alias numquam?</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

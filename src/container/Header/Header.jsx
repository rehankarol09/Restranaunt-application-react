import React from 'react';

import './Header.css';
import { images} from '../../constants'
import {SubHeading} from '../../components/'

const Header = () => {
  
return(
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading  title="Restrananunt"/>
      <h1 className='app__header_h1'>Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin:"1rem 0"}}>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
      <button type="button" className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
        <img src={images.welcome} alt="welcome" />
    </div>

  </div>
);
}



export default Header;

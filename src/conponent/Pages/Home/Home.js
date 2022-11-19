import React from 'react';
import Feature from '../../Feature/Feature';
import Product from '../../Product/Product';

import Slider from './Slider';
import Subsciption from './../../Subscription/Subsciption';
import Footer from './../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
         
          <Slider></Slider>
          <Feature></Feature>
          <Product></Product>
          <Subsciption></Subsciption>
          <Footer></Footer>
        </div>
    );
};

export default Home;
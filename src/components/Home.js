import React from 'react';
//import LargeImageCard from './LargeImageCard';
import AnimatedCard from './AnimatedCard';
import HomeCarousel from './HomeCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';


const Home = () => {
    return (
    <div>
        <HomeCarousel/>
        <div>
            <h1 className='mt-3 mb-2'> Kata Mereka </h1>
            <AnimatedCard/>
        </div>
    </div>
    );
};

export default Home;

import React from 'react';
import  '../app.css';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <div className="flex flex-col lg:flex-row items-center p-5 mt-[70px] lg:mt-[212px] ml-[50px]">
    <div className="">
      <h1 className="text-red-600 font-semibold text-xl">Fitness Club</h1>
      <h2 className="font-bold text-2xl lg:text-4xl mt-8 mb-6">
        Sweat, Smile <br />
        And Repeat
      </h2>
      <p className="text-lg font-serif leading-9">
        Check out the most effective exercises personalized to you
      </p>
      <div className="mt-12">
        <a
          href="#exercises"
          className="block w-[200px] text-center bg-red-600 py-3 text-lg text-white rounded hover:bg-red-700 transition duration-300"
        >
          <button className="w-full h-full bg-transparent text-white">
            Explore Exercises
          </button>
        </a>
      </div>
    </div>
    <div className="lg:w-1/2 lg:ml-10 mt-10 lg:mt-0">
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className=" hero-banner-img  "
      />
    </div>
  </div>
);

export default HeroBanner;


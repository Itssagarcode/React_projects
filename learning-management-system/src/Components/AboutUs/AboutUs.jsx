import HomeLayout from "../../Layouts/HomeLayout";
import aboutUs from "../../assets/aboutUs.png";
import { celebrities } from "../../Constants/CelebrityData";
import service1 from "../../assets/service1.svg";
import service2 from "../../assets/service2.svg";
import service3 from "../../assets/service3.svg";
import service4 from "../../assets/service4.svg";
import service5 from "../../assets/service5.svg";
import service6 from "../../assets/service6.svg";

import React from "react";
import Slider from "../Slider/Slider";

const AboutUs = () => {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className=" space-y-10">
            <h1 className="text-center text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
            PW Skills' mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from "How Can I Do It?" to "Of Course I Can Do It". We aim to do this by providing exceptional up skilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.
            </p>
          </section>
        </div>
        <div>
          <img className="m-20" src={aboutUs} alt="" />
        </div>
        {/* ---------------our mission---------- */}

        <div className="bg-gray-700">
        <h1 className="text-center m-10 text-5xl text-yellow-500 font-semibold">
            Our Mission
          </h1>
            <p className=" p-20 text-xl text-gray-200">PW Skills is the result of a continual effort to exponentially increase the employability of every Indian, irrespective of their socioeconomic status. With accessibility and affordability being the support structure of high-quality, industry-relevant courses, PW Skills aims to empower professionals and students alike to either jumpstart their careers or leverage existing skills with new, future-driven upgrades that will help them realise their full potential.</p>
        </div>
        <div>
          <h1 className="text-center m-10 text-5xl text-yellow-500 font-semibold">
            Our Services
          </h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <div class="flex items-center">
    <img class="inline-block mr-2" src={service1} alt="" />
    <div>
      <h3 class="mb-1">Affordable online courses</h3>
      <p>Affordable online courses along with learning communities.</p>
    </div>
  </div>
  <div class="flex items-center">
    <img class="inline-block mr-2" src={service2} alt="" />
    <div>
      <h3 class="mb-1">Affordable online courses</h3>
      <p>Affordable online courses along with learning communities.</p>
    </div>
  </div>
  <div class="flex items-center">
    <img class="inline-block mr-2" src={service3} alt="" />
    <div>
      <h3 class="mb-1">Affordable online courses</h3>
      <p>Affordable online courses along with learning communities.</p>
    </div>
  </div>
  <div class="flex items-center">
    <img class="inline-block mr-2" src={service4} alt="" />
    <div>
      <h3 class="mb-1">Affordable online courses</h3>
      <p>Affordable online courses along with learning communities.</p>
    </div>
  </div>
  <div class="flex items-center">
    <img class="inline-block mr-2" src={service5} alt="" />
    <div>
      <h3 class="mb-1">Affordable online courses</h3>
      <p>Affordable online courses along with learning communities.</p>
    </div>
  </div>
  <div class="flex items-center">
    <img class="inline-block mr-2" src={service6} alt="" />
    <div>
      <h3 class="mb-1">Affordable online courses</h3>
      <p>Affordable online courses along with learning communities.</p>
    </div>
  </div>
  

</div>

        </div>
        <div className="carousel m-auto w-1/2 my-16">
        {celebrities && celebrities.map(celebrity => (<Slider 
                                                                    {...celebrity} 
                                                                    key={celebrity.slideNumber} 
                                                                    totalSlides={celebrities.length}
                                                                    
                                                                />))}   
        </div>
          </div>
   
    </HomeLayout>
  );
};

export default AboutUs;

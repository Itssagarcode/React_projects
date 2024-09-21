import React from 'react';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    className={`flex flex-col items-center justify-center rounded-bl-lg w-[270px] h-[282px] cursor-pointer gap-[47px] ${
      bodyPart === item ? 'border-t-4 border-red-600 bg-white' : 'bg-white'
    }`}
    onClick={() => {

      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" className="w-10 h-10" />
    <h2 className="text-2xl font-bold font-serif text-[#3A1212] capitalize">
      {item}
    </h2>
  </div>
);

export default BodyPart;


import React from 'react';

const Detail = ({ exerciseDetail }) => {
  // Ensure exerciseDetail exists before destructuring
  if (!exerciseDetail || Object.keys(exerciseDetail).length === 0) {
    return <p>Loading...</p>; // You can return a loader here if needed
  }

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: '/path/to/bodyPart.png',  // Replace with correct path
      name: bodyPart,
    },
    {
      icon: '/path/to/target.png',  // Replace with correct path
      name: target,
    },
    {
      icon: '/path/to/equipment.png',  // Replace with correct path
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 p-5">
      <img src={gifUrl} alt={name} className="detail-image" />
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold capitalize">{name}</h1>
        <p className="text-lg text-gray-700">
          Exercises keep you strong. <span className="capitalize">{name}</span> is one of the best exercises to target your <span className="capitalize">{target}</span>. It will help improve your mood and gain energy.
        </p>
        {extraDetail.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="bg-yellow-200 rounded-full p-5">
              <img src={item.icon} alt={item.name} className="w-10 h-10" />
            </div>
            <h2 className="text-xl capitalize">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

 
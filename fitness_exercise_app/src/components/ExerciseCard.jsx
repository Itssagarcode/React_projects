import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link
    to={`/exercise/${exercise.id}`}
    className="exercise-card block rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 w-64"
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      className="w-full h-48 object-cover"
    />
    <div className="flex mt-3 px-5 space-x-3">
      <button className="bg-red-300 text-white text-sm px-4 py-1 rounded-full capitalize">
        {exercise.bodyPart}
      </button>
      <button className="bg-yellow-400 text-white text-sm px-4 py-1 rounded-full capitalize">
        {exercise.target}
      </button>
    </div>
    <h3 className="mt-2 px-5 text-lg lg:text-xl font-bold text-gray-900 capitalize pb-2">
      {exercise.name}
    </h3>
  </Link>
);

export default ExerciseCard;


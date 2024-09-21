import React from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-0 lg:mt-24">
    <h2 className="text-2xl lg:text-4xl font-bold text-black mb-8 ml-5">
      Similar <span className="text-red-600 capitalize">Target Muscle</span> exercises
    </h2>
    <div className="relative p-2 ml-[120px]">
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar className="w-[1100px]" data={targetMuscleExercises} />
      ) : (
        <Loader /> 
         
      )}
    </div>

    <h2 className="text-2xl lg:text-4xl font-bold text-black mt-14 lg:mt-24 mb-8 ml-5">
      Similar <span className="text-red-600 capitalize">Equipment</span> exercises
    </h2>
    <div className="relative p-2 ml-[120px]">
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar className="w-[1100px]" data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </div>
  </div>
);

export default SimilarExercises;

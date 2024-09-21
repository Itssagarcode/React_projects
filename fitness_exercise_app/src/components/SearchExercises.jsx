import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import Exercises from './Exercises';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exercisesData)
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      console.log(searchedExercises)

      setSearch('');
      setExercises(searchedExercises); // Update the state with the filtered exercises
      console.log(searchedExercises)
    
    }
  };

  return (
    <div className="flex flex-col items-center mt-9 p-5">
      <h1 className="font-bold text-2xl lg:text-4xl mb-12 text-center">
        Awesome Exercises You <br /> Should Know
      </h1>
      <div className="relative mb-18">
        <input
          className="w-[350px] lg:w-[1170px] h-[76px] px-4 py-3 font-semibold border-none rounded-full shadow-md focus:outline-none"
          type="text"
          placeholder="Search Exercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="search-btn absolute right-0 top-0 h-[56px] w-[80px] lg:w-[173px] bg-red-600 text-white text-sm lg:text-lg rounded-full"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="relative w-full p-5">
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyPart/>
      </div>
    </div>
  );
};

export default SearchExercises;

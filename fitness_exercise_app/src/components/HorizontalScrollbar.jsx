import React from 'react'
import BodyPart from './bodyPart'
import ExerciseCard from './ExerciseCard'

const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyPart}) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide space-x-4 p-4 w-full" style={{ width: '1100px' }}>
        {data.map((item) =>(
            <div 
            className=''
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
             
            >
                
         {isBodyPart ? <BodyPart item ={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
          {/* {console.log(item)} */}
            </div>
        ))}
    </div>
  )
}

export default HorizontalScrollbar
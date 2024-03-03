import React from 'react'

const App = () => {
  // to access the env in vite (import.meta.env.variable name)  in react we use .env.procces.variablename
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div className='bg-gray-500'>App</div>
  )
}

export default App

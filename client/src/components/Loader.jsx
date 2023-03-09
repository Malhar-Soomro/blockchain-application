import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center w-full mt-5'>
      <div className='border-r border-red-400 h-20 w-20 rounded-full animate-spin'/>
    </div>
  );
}

export default Loader;
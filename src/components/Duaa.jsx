import React from 'react'

const Duaa = ({ ar , en}) => {
  return (
    <div className='w-[80vw] m-auto my-30 p-10 sm:p-20 flex flex-col gap-4 sm:gap-10 border-2 rounded-4xl bg-white'>
        <h1 className='italic text-xl sm:text-5xl font-bold mb-5'>Daily Duaa :</h1>
        <h1 className='amiri-regular text-xl sm:text-4xl leading-10 sm:leading-20'>{ar}</h1>
        <h2 className='text-sm sm:text-xl'>{en}</h2>
    </div>
  )
}

export default Duaa
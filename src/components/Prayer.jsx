import React from 'react'

const Prayer = ({ Logo , PrayerName , PrayerTime , next }) => {
  if (next){    
    return (
      <div className='bg-blue-50 border-2 border-blue-400 self-center shadow-2xl hover:bg-gradient-to-br from-white to-250% to-blue-400/70 hover:shadow-gray-400/50 rounded-3xl p-6 w-70 flex flex-col justify-center max-h-40'>
        <div className="flex flex-row ">
          <img src={Logo} alt="" className='w-25' />
          <div className='h-full pl-8 self-center my-auto'>
            <h1 className='font-bold text-2xl text-left'>{PrayerName}</h1>
            <p className='text-lg text-left'>{PrayerTime}</p>
          </div>
        </div>
        <p className='text-red-600 text-lg font-bold f'>{Math.round(Math.abs(next.in / 60))} hours {Math.abs(next.in + 60 * Math.round(Math.abs(next.in / 60)))}munites left</p>
      </div>
    )
  }else 
  
  return (
    <div className="bg-gray-100 border-2 border-gray-300 self-center shadow-2xl hover:border-double hover:bg-gradient-to-br from-white to-250% to-gray-400 hover:shadow-gray-400 rounded-3xl p-6 flex flex-row w-70 min-h-40">
      <img src={Logo} alt="" className='w-25' />
      <div className='h-full pl-8 self-center'>
        <h1 className='font-bold text-2xl text-left'>{PrayerName}</h1>
        <p className='text-lg text-left'>{PrayerTime}</p>
      </div>
    </div>
  )
}

export default Prayer
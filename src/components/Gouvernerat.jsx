import React from 'react'
import tunisiaGovernorates from '../prayerTimeCalculation/long-lat.js'
const Gouvernerat = ({ setPlace }) => {
  
  return (
<div className="w-[80vw] sm:w-100 m-auto my-5">
      <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-xl shadow-md">
        <select
          id='selection'
          onChange={(e) => e.target.value !="null" && setPlace(e.target.value)}
          className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-amber-50/10 text-gray-50"
          aria-placeholder='selectionner une ville'
        >
          <option value={"null"} className='text-gray-600'>
              Selectionner une ville
          </option>
          {tunisiaGovernorates.map((option) => (
            <option key={option.name} value={option.name} className='text-black'>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Gouvernerat
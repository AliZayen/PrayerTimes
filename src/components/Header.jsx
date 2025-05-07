import React from 'react'
import Logo from '/Logo.svg'
import location from "/location.svg"
const Header = ({ adresse }) => {
  return (
     <>
        <div className='flex flex-row justify-between mx-0 bg-gray-200 px-8 py-5 rounded-3xl '>
            <div className='hover:cursor-pointer font-bold text-xl flex self-center gap-3'> <img src={Logo} alt="Logo Mosqué" className='h-9'/>
                <h2 className='self-center'>ISLAMI</h2></div>
            <div className='flex gap-3'>
               <h2 className='font-bold text-xl self-center'>{adresse == null ? "Adresse" : adresse}</h2>
                <img src={location} alt="" className='h-9'/>
            </div>
        </div>
     </>
  )
}

export default Header
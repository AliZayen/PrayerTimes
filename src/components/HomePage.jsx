import { useState } from 'react'
import Footer from '../components/Footer'
import PrayerTime from '../components/PrayerTime'
import data from '/alert.svg'
import longLat from '../prayerTimeCalculation/long-lat.js'
import duaa from '../prayerTimeCalculation/randomDuaa.js'
import Duaa from '../components/Duaa.jsx'
import HeroSection from '../components/HeroSection.jsx'
import NextMonthPrayer from '../components/NextMonthPrayer.jsx'

function getLongLat( gouv ){
  return longLat.filter((e)=> e.name === gouv)[0];
}

function HomePage() {
  const [ place , setPlace ] = useState(null);
  return (
    <>
        <HeroSection place={place} setPlace={setPlace}/>
        {place == null ? 
        <div className='flex flex-col-reverse gap-5 p-2xl my-50'>
            <h1 className='text-3xl'>Aucune gouvernerat n'est séléctionné !</h1>
            <img src={data} alt="" className='self-center w-25 lg:w-40' />
        </div> 
        :
        <PrayerTime date={new Date()} gouvernerat={getLongLat(place)}/>
        }
        {place && <NextMonthPrayer place={getLongLat(place)} />}
        <Duaa ar={duaa.ar} en={duaa.en}/>
        <Footer />
    </>
    
  )
}

export default HomePage

import Prayer from './Prayer'
import sunrise from '/sunrise.svg'
import sunset from '/sunset.svg'
import night from '/night.svg'
import afternoon from '/late-afternoon.svg'
import sun from '/sun.svg'
import PT from '../prayerTimeCalculation/PrayerTime.js'
import nextSalat from '../prayerTimeCalculation/nextSalat.js'
import getHijriDate from '../prayerTimeCalculation/getHijriDate.js'

const PrayerTime = ({ gouvernerat }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September']
  const dt = new Date();
  const pt = PT.getTimes(dt,[gouvernerat.latitude,gouvernerat.longitude],1)
  const nextPrayer = nextSalat(gouvernerat)
  return (
    <div className=' my-50'>
    <div className='m-15'>
      <h1 className='md:text-6xl text-5xl font-bold m-5'>Daily Prayer Times:</h1>
      <h3 className='md:text-4xl text-2xl md:font-light text-neutral-600'>{dt.getDate()} {months[dt.getMonth()]} {dt.getFullYear()} - {getHijriDate(dt)}</h3>
    </div>
    <div className='grid lg:grid-cols-3 lg:w-270 md:grid-cols-2 md:w-160 sm:grid-cols-1 gap-y-10 place-items-center m-auto'>
      <Prayer Logo={sunrise} PrayerName={"Subh"} PrayerTime={pt.fajr} next={nextPrayer.salat==="fajr" && nextPrayer}/>
      <Prayer Logo={sun} PrayerName={"Dhuhr"} PrayerTime={pt.dhuhr} next={nextPrayer.salat==="dhuhr" && nextPrayer}/>
      <Prayer Logo={afternoon} PrayerName={"Asr"} PrayerTime={pt.asr} next={nextPrayer.salat==="asr" && nextPrayer}/>
      <Prayer Logo={sunset} PrayerName={"Maghrib"} PrayerTime={pt.maghrib} next={nextPrayer.salat==="maghrib" && nextPrayer}/>
      <Prayer Logo={night} PrayerName={"Isha"} PrayerTime={pt.isha} next={nextPrayer.salat==="isha" && nextPrayer}/>
      </div>
    </div>
  )
}

export default PrayerTime
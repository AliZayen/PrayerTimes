import Clock from "./Clock";
import Gouvernerat from "./Gouvernerat";

const HeroSection = ({ place , setPlace }) => {
    const dt = new Date();
    return (
    <>
    <div className="bg-[url(/mosquee.gif)] w-screen h-screen bg-cover shadow-blue-950 shadow-lg">
        <div className="bg-gray-800/70 h-screen w-screen flex flex-col justify-between p-10 ">
          <div className="border-b-2 border-amber-50/20 flex flex-row justify-between text-amber-50  text-xl">
            <h1 className="px-2 sm:px-8 py-3 ">ISLAMIC</h1>
            <ul className="hidden flex-row gap-4 sm:flex" >
            <li className="px-2 lg:px-8 py-3 hover:bg-amber-50/80 hover:text-gray-800 hover:cursor-pointer">Home</li>
            <li className="px-2 lg:px-8 py-3 hover:bg-amber-50/80 hover:text-gray-800 hover:cursor-pointer">Prayer Time</li>
            <li className="px-2 lg:px-8 py-3 hover:bg-amber-50/80 hover:text-gray-800 hover:cursor-pointer">Duaa</li>
            <li className="px-2 lg:px-8 py-3 hover:bg-amber-50/80 hover:text-gray-800 hover:cursor-pointer">About</li>
            </ul>
          </div>
          <div className="self-center flex flex-col gap-10">

            <div>
              
              <h1 className='amiri-bold text-3xl md:text-5xl text-amber-50'>﴾وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ﴿</h1>
              <h2 className='italic amiri-rgular text-left pl-6 text-xl md:text-4xl text-amber-50'>سورة البقرة، آية:177</h2>
            </div>
            <div>
              <Clock />
              <Gouvernerat setPlace={setPlace} label={place} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
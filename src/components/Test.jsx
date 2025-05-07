import pt from "../prayerTimeCalculation/PrayerTime";

const TableHeadData = ({ element }) =>{
  return (
      <th className="border-2 p-2 w-13 text-xs md:w-30 sm:w-25 sm:text-lg">{element}</th>
  )
}

const TableHead = (data) =>{  
  return (
      <tr className="bg-gray-600 border-2 text-amber-50">
        {data.data.map((e,key)=>{
          return <TableHeadData key={key} element={e}/>
        })}
      </tr>
  )
}

const TableData = ({ element }) =>{
  return (
      <td className="px-1 py-2 w-15 text-xs md:w-30 sm:w-25 sm:text-lg border-2 border-amber-50">{element}</td>
  )
}

const TableRow = (data) =>{
  return (
      <tr className="bg-gray-200 text-gray-950">
        {data.data.map((e,key)=>{
          return <TableData key={key} element={e}/>
        })}
      </tr>
  )
}

const monthsList = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Test = ({ place }) => {
  const dt = new Date();
  const getPrayerMonth = () =>{
    var result = [];
    for (let i = 0; i < 30; i++) {
      let prayerTimesList = pt.getTimes(new Date(dt), [place.latitude , place.longitude ], 1)
      let dayPrayers = {day : dt.getDate(),month : monthsList[dt.getMonth()] , fajr : prayerTimesList.fajr, dhuhr : prayerTimesList.dhuhr,asr : prayerTimesList.asr, maghrib : prayerTimesList.maghrib, isha : prayerTimesList.isha}
      dt.setDate(dt.getDate()+1);
      result.push(dayPrayers);
    }
    
    return result;
  }
  const result = getPrayerMonth();
  return (
    <div >
      <div className='m-15'>
        <h1 className='md:text-6xl text-5xl font-bold m-5'>Monthly Prayer Times:</h1>
        <h3 className='md:text-4xl text-2xl md:font-light text-neutral-600'>{place.name} {result[0].day} {result[0].month} {dt.getFullYear()} - {result[29].day} {result[29].month} {dt.getFullYear()}</h3>
      </div>      
      <table className="m-auto">
        <thead>
          <TableHead data={["Date" , "Fajr" , "Dhuhr" , "Asr" , "Maghrib" , "Isha" ]}/>
        </thead>
        <tbody>
          {
            result.map((e)=>{
              console.log(e);
              return (
                <TableRow data={[e.day +" "+ e.month, e.fajr , e.dhuhr , e.asr , e.maghrib , e.isha ]}/>
            )})
          }
        </tbody>
      </table>
    </div>
  );
}

export default Test
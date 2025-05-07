import PrayerTime from "../prayerTimeCalculation/PrayerTime";
const actualDateTime = new Date();

function nextSalat (longLat) {
    const prayerTimes = PrayerTime.getTimes( new Date(), [longLat.latitude , longLat.longitude ] , 1);
    let diff;
    let [h , m] = prayerTimes.fajr.split(":").map(Number);
    diff = (actualDateTime.getHours()*60 + actualDateTime.getMinutes()) - (h*60 + m);
    if(diff<0){
      return {salat : 'fajr' , in : diff};
    }
    [h , m] = prayerTimes.dhuhr.split(":").map(Number);
    diff = (actualDateTime.getHours()*60 + actualDateTime.getMinutes()) - (h*60 + m);
    if(diff<0){
      return {salat : 'dhuhr' , in : diff};
    }
    [h , m] = prayerTimes.asr.split(":").map(Number);
    diff = (actualDateTime.getHours()*60 + actualDateTime.getMinutes()) - (h*60 + m);
    if(diff<0){
      return {salat : 'asr' , in : diff};
    }
    [h , m] = prayerTimes.maghrib.split(":").map(Number);
    diff = (actualDateTime.getHours()*60 + actualDateTime.getMinutes()) - (h*60 + m);
    if(diff<0){
      return {salat : 'maghrib' , in : diff};
    }
    [h , m] = prayerTimes.isha.split(":").map(Number);
    diff = (actualDateTime.getHours()*60 + actualDateTime.getMinutes()) - (h*60 + m);
    if(diff<0){
      return {salat : 'isha' , in : diff};
    }
    return "";
  }

export default nextSalat;
import { useEffect , useState } from "react";

export default function getHijriDate(dt){    
    const [ date , setDate ] = useState(null);  
    async function getHijriDate(){
        const url = `https://api.aladhan.com/v1/gToH?date=${dt.getDate().toString().padStart(2 , "0")}-${(dt.getMonth() +1).toString().padStart(2 , "0")}-${dt.getFullYear()}`;
        const response = await fetch(url)
        const data = await response.json();
        setDate(data.data.hijri);
    }
    useEffect(()=>{
        getHijriDate();    
    },[])
    return date ? date.day+" "+date.month.en+" "+date.year : "Loading..."
}
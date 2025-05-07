import React, { useEffect, useState } from 'react'

export default async function HijriDate () {
    const [ date , setDate ] =useState();
    
    // Function to fetch data from the Aladhan API
    async function getHijriDate() {
        const apiURL = "https://api.aladhan.com/v1/gToHCalendar/4/2025"
        try{
            const response = await fetch(apiURL)

            if(!response.ok){
                throw response;
            }

            const data = await response.json();

            console.log("data :" ,data);
            return data;
            
        }catch(error){
            console.log("erreur fetching :", error);
        }
    }
    setDate(getHijriDate());
    const dt = new Date();
    return (<>
        <h1>{date.data[0].hijri.date}</h1>
    </>
        
  )
}
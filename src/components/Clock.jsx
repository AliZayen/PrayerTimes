import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [ time , setTime ] = useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000)
    },[])
    return (
    <div>
        <h1 className='text-7xl sm:text-9xl font-mono font-bold text-amber-50'>
            {`${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}:${String(time.getSeconds()).padStart(2, '0')}`}        
        </h1>
    </div>
  )
}

export default Clock
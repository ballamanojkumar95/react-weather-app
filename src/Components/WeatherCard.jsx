import React, { useEffect, useState } from 'react'
import UseDate from '../Utils/UseDate'
import sun from '../../public/icons/sun.png'
import fog from '../../public/icons/fog.png'
import cloud from '../../public/icons/cloud.png'
import rain from '../../public/icons/rain.png'
import snow from '../../public/icons/snow.png'
import strom from '../../public/icons/storm.png'
import windy from '../../public/icons/windy.png'
import overcast from '../../public/icons/overcast-64.png'


function WeatherCard({
    temprature,windspeed,humidity,location,heatindex,iconstring,conditions
}) {

    const [icon,setIcon] = useState();
    const {time} = UseDate();
    
    useEffect(() =>{
      if(iconstring){
        if(iconstring?.toLowerCase().includes('clear')){
                    setIcon(sun)
                }
                else if(iconstring?.toLowerCase().includes('Cloudy')){
                    setIcon(cloud)
                }
                else if(iconstring?.toLowerCase().includes('fog')){
                    setIcon(fog)
                }
                else if(iconstring?.toLowerCase().includes('rain') || iconstring?.toLowerCase().includes('shower')){
                    setIcon(rain)
                }
                 else if(iconstring?.toLowerCase().includes('Snow')){
                    setIcon(snow)
                }
                 else if(iconstring?.toLowerCase().includes('thunder') || iconstring?.toLowerCase().includes('strom')){
                    setIcon(strom)
                }
                else if(iconstring?.toLowerCase().includes('Sunny')){
                    setIcon(sun)
                }
                 else if(iconstring?.toLowerCase().includes('wind')){
                    setIcon(windy)
                }
                else if(iconstring?.toLowerCase().includes('overcast')){
                   setIcon(overcast)
                }
      }
    },[iconstring])

  return (
    <>
       <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
        {conditions ? 
        <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
        <img src={icon} alt="" />
         <p className='font-bold md:text-5xl sm:text-3xl flex justify-center items-center'>
            {temprature} &deg;C
         </p>
        </div>
        
        : <div className='text-center'><span className="loader"></span></div>}
         {conditions ? <div className='font-bold text-center text-xl'>
            {location}
        </div> :""}
        {conditions?   <div className='w-full flex items-center justify-between mt-4'>
          <p className='flex-1 text-center p-2 '>{new Date().toDateString()}</p>
          <p className='flex-1 text-center p-2 '>{time}</p>

        </div>
         :""}
        
        {conditions ? <div className='w-full flex justify-between items-center mt-4 gap-4'>
             <p className='flex-1 text-center font-bold p-2 bg-blue-600 shadow rounded-lg'>
                Wind Speed <span className='font-normal'>{windspeed}</span>
             </p>
             <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
                Humidity <span className=''>{humidity}</span>
             </p>
        </div>:''}
          {conditions ? <div className='w-full p-3 mt-4 flex justify-between items-center'>
           <p className='font-semibold'>Heat Index</p>
           <p className='font-semibold'>
            {heatindex ? heatindex :'NA'}
           </p>

        </div>
        :""}
           {conditions ? <hr className='bg-slate-500' /> :''}
          <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
            {conditions}
          </div>
    </div>
    </>
   
  )
}

export default WeatherCard
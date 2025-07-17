import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context/Index'
import Clear from '../../public/images/Clear.jpg'
import Cloudy from '../../public/images/Cloudy.jpg'
import fog from '../../public/images/fog.png'
import Rainy from '../../public/images/Rainy.jpg'
import Snow from '../../public/images/snow.jpg'
import Stromy from '../../public/images/Stormy.jpg'
import Sunny from '../../public/images/Sunny.jpg'
import overcast from '../../public/images/overcast.jpg'



function BackgroundLayout() {
      const {weather} = useStateContext();
      const [image,setimage] = useState();

      useEffect(() =>{
       
        if(weather.conditions){
        let imageString = weather.conditions;
        if(imageString?.toLowerCase().includes('clear')){
            setimage(Clear)
        }
        else if(imageString?.toLowerCase().includes('cloudy')){
            setimage(Cloudy)
        }
        else if(imageString?.toLowerCase().includes('fog')){
            setimage(fog)
        }
        else if(imageString?.toLowerCase().includes('rain') || imageString?.toLowerCase().includes('shower')){
            setimage(Rainy)
        }
         else if(imageString?.toLowerCase().includes('Snow')){
            setimage(Snow)
        }
         else if(imageString?.toLowerCase().includes('thunder') || imageString?.toLowerCase().includes('strom')){
            setimage(Stromy)
        }
        else if(imageString?.toLowerCase().includes('Sunny')){
            setimage(Sunny)
        }
        else if(imageString?.toLowerCase().includes('overcast')){
            setimage(Rainy)
        }
    }
      },[weather])

      return (
        <img src={image} alt="" className='h-screen w-full fixed top-0 left-0 -z-[10]' />
      )
}

export default BackgroundLayout
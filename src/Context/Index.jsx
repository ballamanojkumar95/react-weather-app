 import { useContext,createContext,useState,useEffect } from "react";
 import axios from 'axios';
 

 const stateContaxt = createContext();

 export const StateContextProvider = ({children}) =>{
     const [weather, setWeather] = useState({});
     const [values, setValues] = useState([]);
     const [place, setplace] = useState("kashmir");
     const [location,setLocation] = useState('');

     //fetch api
     const fetchWeather = async() =>{
          const options = {
            method:'GET',
            url:'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params:{
                aggregateHours:'24',
                location: place,
                contentType:'json',
                unitGroup:'metric',
                shortColumnNames:0
            },
              headers:{
                'x-rapidapi-key': '5ec3196350msh2719099f4aea0d1p11c32ejsnc72d3ea6005c',
                'x-rapidapi-host' : 'visual-crossing-weather.p.rapidapi.com'
              }
          }

          try{
            const response = await axios.request(options);
            console.log(response.data);
            const thisData = Object.values(response.data.locations)[0];
            setLocation(thisData.address);
            setValues(thisData.values);
            setWeather(thisData.values[0])
          }catch(e){

          }
     }

     useEffect(() =>{
        fetchWeather()
     },[place])

     return (
          <stateContaxt.Provider value={{
            weather,setplace,values,location,place
          }}>
            {children}
          </stateContaxt.Provider>
            
     )
 }
  export const useStateContext = () => useContext(stateContaxt)
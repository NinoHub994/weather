import React, { ReactElement, useState } from "react";
import { useMeteo } from "../../hooks/useMeteo";
import "bootstrap/dist/css/bootstrap.css";
import "./Meteo.css"
//import { cities } from "../../Data/city-list";
//? the unity measure of temperature is given in kelvin unit C = K – 273.15
export const Meteo = () => {
  


  //console.log(cities.length);
  const [city, setCity] = useState("Catania");
  const [meteo, setMeteo, isLoading] = useMeteo(city);
  const [inputValue, setInputValue] = useState('');
  const [fCity, setFcity]=useState<string[]>([]);

  const handleKeyDown = (el: React.KeyboardEvent<HTMLInputElement>) => {
    if (el.key === "Enter") {
      setInputValue(el.currentTarget.value);
      if(!fCity.includes(inputValue) && fCity.length<5){
        
        setFcity([...fCity,inputValue]);
        setCity(inputValue);
      }
    }
  };

  const handleClick = () => {
    if(inputValue){
      setCity(inputValue);
      if(!fCity.includes(inputValue) && fCity.length<5){
        
        setFcity([...fCity,inputValue]);
        setCity(inputValue);
      }
      console.log(fCity);
    }
  }

  const updateInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="box col-6">
          <input onKeyDown={handleKeyDown} id='input' onChange={updateInput} placeholder=""></input>
          {!isLoading && meteo && fCity[0] && <div>Meteo di {fCity[0]} è {meteo.weather[0].description}</div>}
            <button className="btn btn-primary" onClick={handleClick}>Enter</button>
          </div>
        <div
          style={{backgroundColor: "rgb(135, 206, 250)" }}
          className="box col-6"
        >
           {!isLoading && meteo && fCity[1] && 
           <div>
            <h1>
              Meteo di {fCity[1]} è {meteo.weather[0].description}
            </h1>
            <h1>
              Temperature of {fCity[1]} è {Math.round(Number(meteo.main.temp)-273) }
            </h1>
           </div>}
        </div>
      </div>
      <div className="row">
        <div
          style={{backgroundColor: "rgb(144, 238, 144)" }}
          className="box col-6"
        >
          {!isLoading && meteo && fCity[2] && <div>Meteo di {fCity[2]} è {meteo.weather[0].description}</div>}
        </div>
        <div
          style={{backgroundColor: "rgb(255, 255, 224)" }}
          className="box col-6"
        >
          {!isLoading && meteo && fCity[3] && <div>Meteo di {fCity[3]} è {meteo.weather[0].description}</div>}
        </div>
      </div>
    </div>
  );
};

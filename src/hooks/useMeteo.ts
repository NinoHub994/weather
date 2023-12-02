import axios from "axios";
import { useEffect, useState } from "react";
const apiKey = "c6f1a03fe5099f551d623b4622189306";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
//https://api.openweathermap.org/data/2.5/weather?appid=c6f1a03fe5099f551d623b4622189306&q=catania

export interface Root {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export const useMeteo = (city: string) => {
  const [isLoading, setLoading] = useState(false);
  const [meteo, setMeteo] = useState<Root>();

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const { data } = await axios.get<Root>(`${url}&q=${city}`);
      setLoading(false);
      setMeteo(data);
    };
    loadData();
  }, [city]);
  return [meteo, setMeteo, isLoading] as [Root, Function, boolean];
};
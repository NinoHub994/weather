import React from 'react';
import { NavigationProvider } from './components/Wrapper/NavigationProvider';
import './App.css';
export interface city  {
  cityId: '5454711',
  name: 'Albuquerque',
  country: 'US',
  altCountry: '',
  muni: '',
  muniSub: '',
  featureClass: 'P',
  featureCode: 'PPLA2',
  adminCode: 'NM',
  population: 545852,
  loc: {
    type: 'Point',
    coordinates: [-106.65114, 35.084] 
  }
}

 


const App = () => {
  return (
  <div>
    <NavigationProvider />
  </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { ListCharacters } from '../ListCharacters/ListCharacters'
import { SingleCharacter } from '../SingleCharacter/SingleCharacter'
import { Characters } from '../Characters/Characters'
import { Meteo } from '../Meteo/Meteo'
import ProductApp from '../ProductApp/ProductApp'


export const NavigationProvider = () => { 
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/characters" element={<div style={{display:"flex",}}><Characters /></div>}>
            </Route>
            <Route path="/characters/list" element={<div style={{display:"flex",}}><ListCharacters /></div>}>
                <Route index></Route>
                <Route path=':id' element={<SingleCharacter></SingleCharacter>}></Route>
            </Route>
            <Route path="/" element={<Meteo />}>

            </Route>
            <Route path="/products" element={<ProductApp />}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

const Container = () => {
    return <div style={{display: 'flex'}}><ListCharacters /><Outlet /></div>
}

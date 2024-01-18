// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Rider from "./rider"
import CitiesPage from "../citiesPage/citiesPage"

const RiderRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<Rider />} />
         <Route path="cities" element={<CitiesPage isRider />} />
      </Routes>
   )
}

export default RiderRoute
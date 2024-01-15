// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Driver from "./driver"


const DriverRoute = () => {

   return (
      <Routes>
         <Route path="/" element={<Driver />} />
         {/* <Route path="view-filing" element={< />} /> */}
      </Routes>
   )
}

export default DriverRoute
// import React from 'react'
import { Route, Routes } from "react-router-dom"
import Rider from "./rider"

const RiderRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<Rider />} />
         {/* <Route path="view-filing" element={< />} /> */}
      </Routes>
   )
}

export default RiderRoute
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/home'
import DriverRoute from './page/driverPage/driverRoute'
import RiderRoute from './page/riderPage/riderRoute'

function App() {
   return (
      <div className='App min-vh-100'>
         <Routes>
            <Route 
               path='/' 
               element={<HomePage /> }
            />
            <Route path='driver' element={<DriverRoute /> } />
            <Route path='rider' element={<RiderRoute /> } />
         </Routes>
      </div>
   )
}

export default App
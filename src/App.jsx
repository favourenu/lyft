import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/home'
import DriverRoute from './page/driverPage/driverRoute'

function App() {
   return (
      <div className='App min-vh-100'>
         <Routes>
            <Route 
               path='/' 
               element={<HomePage /> }
            />
            <Route path='driver' element={<DriverRoute /> } />
         </Routes>
      </div>
   )
}

export default App
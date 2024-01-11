import './App.css'
import Nav from './shared/components/navigations/Nav'

import { BrowserRouter as Router } from "react-router-dom";

import HomeContents from './homepage/page/home';

function App() {
  return (
    <Router>
     <Nav/>
     <HomeContents/>
    </Router>
  )
}

export default App

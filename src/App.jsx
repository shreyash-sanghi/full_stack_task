import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Billing from './Billing'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Routes>
     <Route exact path='/' Component={Dashboard}/>
     <Route exact path='/billing' Component={Billing}/>
    </Routes>
    </>
  )
}

export default App

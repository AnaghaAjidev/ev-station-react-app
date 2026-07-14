import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBooking from './components/AddBooking'
import ViewBooking from './components/ViewBooking'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path='/' element={<AddBooking/>}/>
        <Route path='/view' element={<ViewBooking/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

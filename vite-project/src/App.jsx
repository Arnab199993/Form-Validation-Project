import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Validation from './Components/Validation'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Outlet/>
      <Validation/>
    </div>
  )
}

export default App

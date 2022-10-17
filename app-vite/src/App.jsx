import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dictaphone from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>START APP VIRE</h1>
     <Dictaphone />
    </div>
  )
}

export default App

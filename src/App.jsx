import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to my world</h1>
      <h2>Today's task is to complete React</h2>
      <h3>Date - 29.07.2025</h3>
      <h3>2400090137 - Manan Shah</h3>
      <h4>{count}</h4>

      <div className="card-grid">
        <Link className="card" to="/page">Go To Page
        <img src="./assets/images/b1.png"></img>
        </Link>
        
        <Link className="card" to="/manan">Go To MANAN</Link>
        <Link className="card" to="/program">Go To Program</Link>
        <Link className="card" to="/Apple">Go To Apple</Link>
        <Link className="card" to="/Meta">Go To Meta</Link>
        <Link className="card" to="/Tanu">Go To Tanu</Link>
      </div>
    </>
  )
}

export default App

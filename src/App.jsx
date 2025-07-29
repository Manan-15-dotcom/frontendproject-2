import { useState } from 'react'
import{Link}from'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>welcome to my world</h1>
     <h2>today task's is to complete react</h2>
     <h3>date-29.07.2025"</h3>
     <h3>2400090137 - Manan shah</h3>
     <h4>
      {count}
     </h4>
     <Link to="/page">Go To Page</Link>
     <br />
     <Link to="/manan">Go To MANAN</Link>
<br />
     <Link to="/program">Go To program</Link>
    </>
        )
      }
    

export default App

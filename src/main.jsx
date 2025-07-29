import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Page from './Page.jsx'
import Manan from './Manan.jsx'
import Program from './Program.jsx'
createRoot(document.getElementById('root')).render(

<BrowserRouter basename="frontendproject-2">

  <Routes>
    <Route path="/" element = {<App/>}></Route>
    <Route path='/page' element={<Page/>}></Route>
   <Route path='/manan' element={<Manan/>}></Route>
   <Route path='/program' element={<Program/>}></Route>
  </Routes>
</BrowserRouter>
)


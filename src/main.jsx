import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Page from './Page.jsx'
import Manan from './Manan.jsx'
import Program from './Program.jsx'
import Apple from './Apple.jsx'
import Meta from './Meta.jsx'
import Tanu from './Tanu.jsx'
createRoot(document.getElementById('root')).render(

<BrowserRouter basename="frontendproject-2">

  <Routes>
    <Route path="/" element = {<App/>}></Route>
    <Route path='/page' element={<Page/>}></Route>
   <Route path='/manan' element={<Manan/>}></Route>
   <Route path='/program' element={<Program/>}></Route>
   <Route path='/Apple' element={<Apple/>}></Route>
   <Route path='/meta' element={<Meta/>}></Route>
   <Route path='/Tanu' element={<Tanu/>}></Route>
  </Routes>
</BrowserRouter>
)


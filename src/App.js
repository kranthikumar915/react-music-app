import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Contact from './component/Contact'
import Menu from './component/Menu'
import Home from './component/Home'
import Pnf from './component/Pnf'
import Music from './component/Music'

function App(props){
    return (
      <BrowserRouter>
             <Menu/>
             <ToastContainer autoClose={4000} position={'top-right'}/>
             <Routes>
                 <Route path={'/'} element={<Home/>}/>
                 <Route path={'/music'} element={<Music/>}/>
                 <Route path={'/contact'} element={<Contact/>}/>
                 <Route path={'/*'} element={<Pnf/>}/>
             </Routes>
      </BrowserRouter>
    )
}
export default App
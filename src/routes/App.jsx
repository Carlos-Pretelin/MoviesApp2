import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "../containers/Layout"
import Home from "../pages/Home"
import Profile from "../pages/Profile"

import NotFound from "../pages/NotFound"
//scss
import "../styles/App.scss"

const App = () => {
  return (
    
      <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/profile' element={<Profile/>} />
                <Route exact path='*' element={<NotFound/>} />
                
              </Routes>
            </Layout>
        </BrowserRouter>
    
  )
}

export default App
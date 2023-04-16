import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../components/Home';


const AppRouters = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>

            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouters
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../components/Home';
import NotFound404 from './NotFound404';
import AddRestaurant from '../components/AddRestaurant';


const AppRouters = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/add' element={<AddRestaurant/>}/>

            </Route>
            
            <Route path='/*' element={<NotFound404/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouters
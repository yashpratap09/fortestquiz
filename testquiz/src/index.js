import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from './pages/AdminRegister';
import HomePage from './pages/homePage';
import LoginAdmin from './pages/loginAdmin';
import StudentRegisterForm from './pages/StudentRegister'
import StudentLogin from './pages/loginStudent';
import Quiz from './quiz';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>

    <Route path='/' element={<HomePage/>}/>
    <Route path='/Adminregister' element={<RegisterForm/>}/>
      <Route path='/Adminlogin' element={<LoginAdmin/>}/>



  
    <Route path='/Studentregister' element={<StudentRegisterForm/>}/>
    <Route path='/Studentlogin' element={<StudentLogin/>}/> 
    <Route path='/Quiz' element={<Quiz/>}/> 



  </Routes>
  
  
  
  </BrowserRouter>
);


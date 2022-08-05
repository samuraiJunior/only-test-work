import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import Login from './Pages/Login';
import Profile from './Pages/Profile';

function App() {
  const [login, setLogin]=useState("")

  return (
    <AppWrapper >
    <CompanyName>ONLY.</CompanyName>
      <Routes>
        <Route path='/' element={<Navigate to={"/login"}/>}/>
        <Route path='/login' element={<Login setLogin={setLogin}/>}/>
        <Route path='/profile' element={<Profile login={login}/>}/>
      </Routes>
    </AppWrapper>

  );
}

export default App;
const AppWrapper=styled("div")`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
heigth:100%;
margin:0 auto;
width:640px;
height:900px;
`
const CompanyName=styled("h3")`
font-weight: 700;
font-size: 64px;
line-height: 78px;

position:absolute;
top:0;
color: #000000;
`

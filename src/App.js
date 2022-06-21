import './App.css';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfollio/Portfolio'
import Service from './pages/services/Service'
import React  from 'react';
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import {Routes, Route } from "react-router-dom";

function App() {
  const colors = {
                    "DarkBlue": "#002840",
                    "Blue" : "#AADFEE",
                    "LightBlue" : "#D4EFF7",
                    "greywhite" : "#F6F3EE",
                    "white" : "#ffffff",
                    "grey" : "#999999"
                }
  return (
    <div className="app">
    <Header className="header" LogoColor = {colors.DarkBlue}/>
      <Routes>
      <Route path="*" element={<h1 style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'

        }}>NO Page</h1>} />
          <Route path="/" element={
            <Home className="home"
              BgColor = {colors.greywhite}
              FontColor = {colors.DarkBlue}
              objColor ={colors.Blue}
              LiteColor = {colors.LightBlue} />}/>
          <Route path="/about" element={
            <About 
                BgColor = {colors.greywhite}
                FontColor = {colors.DarkBlue}
                objColor ={colors.Blue}
                LiteColor = {colors.LightBlue} />}/>
          <Route path="/portfolio" element={
            <Portfolio
              color = {colors}
            />
            } />
          <Route path="/services" element={
            <Service
                color = {colors}
              />} />
        </Routes>
       <Footer className="footer"
              IconColor ={colors.DarkBlue} 
              OnClickColor = {colors.grey} 
              ShadowColor ={colors.grey} 
              TabColor ={colors.greywhite} />
    </div>
  );
}

export default App;

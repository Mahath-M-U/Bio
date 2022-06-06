import './App.css';
import Home from './component/Home'
import About from './component/About'
import Footer from './component/Footer'
import Header from './component/Header'
import colors from './Assets/Colours.json'
import {Routes, Route } from "react-router-dom";


function App() {
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
          <Route path="/works" element={<h1 style={{
            width:'100vw',
            height:'100vh',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>Coming Soon</h1>} />
          <Route path="/services" element={<h1 style={{
            width:'100vw',
            height:'100vh',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}>Coming Soon</h1>} />
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

import './App.css';
import Home from './component/Home'
import About from './component/About'
import Footer from './component/Footer'
import colors from './Assets/Colours.json'
import Header from './component/Header'


function App() {
  return (
    <div className="app">
      <Header className="header"
        LogoColor = {colors.DarkBlue}
      />
      <Home className="home"
        BgColor = {colors.greywhite}
        FontColor = {colors.DarkBlue}
        objColor ={colors.Blue}
        LiteColor = {colors.LightBlue}
      />

      <Footer className="footer"
        IconColor ={colors.DarkBlue} 
        OnClickColor = {colors.grey} 
        ShadowColor ={colors.grey} 
        TabColor ={colors.greywhite} 
      />
      <About 
          BgColor = {colors.greywhite}
          FontColor = {colors.DarkBlue}
          objColor ={colors.Blue}
          LiteColor = {colors.LightBlue}
      />
    </div>
  );
}

export default App;

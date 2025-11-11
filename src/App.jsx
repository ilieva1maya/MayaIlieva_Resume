
import './App.css';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import Footer from './components/footer/Footer'; 
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Welcome/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App

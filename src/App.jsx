
import './App.css';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import Footer from './components/footer/Footer'; 
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Education from './components/education&certification/Education';
import Hobbies from './components/hobbies/Hobbies';

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Welcome/>
      <Skills/>
      <Experience/>
      <Education/>
      <Hobbies/>
      <Footer/>
    </>
  )
}

export default App

import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Contact } from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className='bg-[#1c1c1c]'>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutme' element={<AboutMe/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;

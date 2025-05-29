import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Website from './pages/Website';
import Graphic from './pages/Graphic';
import Video from './pages/Video';
import Digital from './pages/Digital';



function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/website' element={<Website />} />
        <Route path='/graphic' element={<Graphic />} />
        <Route path='/video' element={<Video />} />
        <Route path='/digital' element={<Digital />} />
      </Routes>
    </div>
  );
}

export default App;

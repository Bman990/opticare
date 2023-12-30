import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/opticare/" element={<Home />} />
        <Route path="/opticare/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

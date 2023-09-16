import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Terms from './pages/terms'; // Ensure this path points to your Terms component
import Privacy from './pages/privacy'; // Ensure this path points to your Privacy component
import { Analytics } from '@vercel/analytics/react';

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div className='main'>
          <div className='gradient' />
        </div>

        <div className='app'>
          <Routes>
            <Route path="/" element={<><Hero /><Demo /><Footer /></>} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Analytics />
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;

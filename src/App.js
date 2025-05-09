// App.js
import './App.css';
import Footer from './components/footer/Footer';
import HeroSection from './components/hero-section/HeroSection';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/testimonials/Testimonials';
import Form from './components/Form/Form';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Programs />
              <Reasons />
              <Plans />
              <Testimonials />
              <Join />
              <Footer />
            </>
          }
        />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HospitalSearchPage from './pages/HospitalSearch';
import ContactUsPage from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hospital-search" element={<HospitalSearchPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/" element={<HospitalSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;

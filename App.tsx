import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import Admin from './pages/Admin';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          {/* Admin Route */}
          <Route path="/admin" element={<Admin />} />
          {/* Dynamic Service Routes */}
          <Route path="/solucoes/:id" element={<ServiceDetail />} />
          <Route path="/servicos/:id" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
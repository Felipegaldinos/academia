import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import Modalities from '@/pages/Modalities.jsx';
import Plans from '@/pages/Plans.jsx';
import Structure from '@/pages/Structure.jsx';
import Team from '@/pages/Team.jsx';
import Contact from '@/pages/Contact.jsx';
import Blog from '@/pages/Blog.jsx';

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/modalidades" element={<Modalities />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/estrutura" element={<Structure />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
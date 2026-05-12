import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/aboutus/About.jsx';
import Auth from './pages/auth/Auth.jsx';

function AppContent() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  const isAuthPage = location.pathname === '/auth';

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await fetch('http://127.0.0.1:8000/api/projects/');
        if (!result.ok) {
          throw new Error(`Network response was not ok: ${result.statusText}`);
        }
        const data = await result.json();
        setProjects(data);
      } catch (error) {
        console.error('console error:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const result = await fetch('http://127.0.0.1:8000/api/categories/');
        if (!result.ok) {
          throw new Error(`Network response was not ok: ${result.statusText}`);
        }
        const data = await result.json();
        setCategories(data);
      } catch (error) {
        console.error('console error:', error);
      }
    };

    fetchProjects();
    fetchCategories();
  }, []);
  
  return (
    <div className="font-sans" dir="rtl">
      <Routes>
        <Route path="/" element={
          <main>
            <Header/>
            <Hero />
            <Services />
            <Portfolio projects={projects} categories={categories} />
          </main>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

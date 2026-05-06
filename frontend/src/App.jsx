import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Services from './components/Services/Services.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/aboutus/About.jsx';

function App() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [siteSettings, setSiteSettings] = useState(null);

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

    const fetchSiteSettings = async () => {
      try {
        const result = await fetch('http://127.0.0.1:8000/api/site-settings/');
        if (!result.ok) {
          throw new Error(`Network response was not ok: ${result.statusText}`);
        }
        const data = await result.json();
        setSiteSettings(Array.isArray(data) ? data[0] ?? null : data);
      }catch(e) {
        console.error('console error:', e);
      }
    }

    fetchProjects();
    fetchCategories();
    fetchSiteSettings();
  }, []);
  
  return (
    <Router>
      <div className="font-sans" dir="rtl">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Portfolio projects={projects} categories={categories} />
            </main>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer siteSettings={siteSettings} />
      </div>
    </Router>
  );
}

export default App;

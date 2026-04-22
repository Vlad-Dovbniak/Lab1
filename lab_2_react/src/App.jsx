import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode'); 
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="container mx-auto relative">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <About />
        <Experience />
        <Skills />
        <Education />
        <Languages />
        <Reviews />
      </main>
      
      <Footer />
      <ContactForm />
    </div>
  );
}

export default App;
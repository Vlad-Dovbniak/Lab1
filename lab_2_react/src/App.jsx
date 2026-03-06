import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
        <Languages />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
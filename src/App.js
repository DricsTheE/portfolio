//Import components of the app
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

//Run the main App
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;

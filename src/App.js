import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
      </div>
    </div>
  );
}

export default App;

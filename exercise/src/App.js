import logo from './logo.svg';
import './App.css';
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import ClassCounter from "./ClassCounter";
import FunctionalCounter from "./FunctionalCounter";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <ClassCounter />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wellcome to Geophysico LLC.
        </p>
        <a
          className="App-link"
          href="https://ibrahimilhan35.github.io/Geophysico-Website-Test/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About Us
        </a>
        <Contact />
        <FunctionalCounter />
      </header>
      <Footer />
    </div>
  );
}

export default App;


import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import ClassSignUpForm from "./components/ClassSignUpForm"
import CardList from "./components/CardList"; 
import jsonData from "./components/data.json";
import ColorButtonA from "./components/Week-8/ColorButtonA";
import ColorButtonB from "./components/Week-8/ColorButtonB";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container container-odd">
        <h1>Pure and Higher-Order Components</h1>
        <ColorButtonA />
        <ColorButtonB />
      </section>
      <section className="container">
        <h1>Person Cards</h1>
        <CardList data={jsonData} />
      </section>
      <section className="container">
        <ClassCounter />
      </section>
      <section className="container">
        <header className="App-header">
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
        </header>
      </section>
      <section className="container">
        <FunctionalCounter />
      </section>
      <section className="container">
        <ClassSignUpForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;


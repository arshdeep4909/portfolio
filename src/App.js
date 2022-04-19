import Nav from "./components/Nav";
import Home from "./components/Home";
import GlobalStyle from "./components/GlobalStyles";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

//Font additions
// font-family: 'Grape Nuts', cursive;
// font-family: 'Poppins', sans-serif;

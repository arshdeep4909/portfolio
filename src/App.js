import Nav from "./components/Nav";
import Home from "./components/Home";
import GlobalStyle from "./components/GlobalStyles";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <Home />
      <About />
    </div>
  );
}

export default App;

//Font additions
// font-family: 'Grape Nuts', cursive;
// font-family: 'Poppins', sans-serif;

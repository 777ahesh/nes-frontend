import About from "./components/About";
import Hero from "./components/Hero";
import Timeline from "./components/Timline";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About/>
      <Timeline/>
      <Footer/>
    </div>
  );
}
export default App;
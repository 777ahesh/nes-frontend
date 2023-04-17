import About from "./components/About";
import Hero from "./components/Hero";
import Timeline from "./components/Timline";
import Footer from "./components/Footer";
import TestiMonials from './components/TestiMonials/TestiMonials'
import "./styles.css";
// import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div className="App">
      <Hero />
      <About/>
      <Timeline/>
      <TestiMonials/>
      {/* <Sponsors/> */}
      <Footer/>
    </div>
  );
}
export default App;
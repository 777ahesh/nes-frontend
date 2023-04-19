import About2 from "./components/About2";
// import About from "./components/About";
import Hero from "./components/Hero";
import Timeline from "./components/Timline";
import Footer from "./components/Footer";
import TestiMonials from './components/TestiMonials/TestiMonials'
import "./styles.css";
import Guests from "./components/Guests";
import React, {useState} from "react";
import { Container } from 'react-bootstrap';
// import Sponsors from "./components/Sponsors";
import Nes from '../src/video/Nes.mp4'
function App() {
// const [loading, setLoading] = useState(false);
  // useEffect(()=>{
  //     setTimeout(()=>{
  //       setLoading(false);
  //       console.log("Welcome")
  //     },10000)
  // },[])

  const loading = false;

  return (
    <div className="App">
     {
     loading === false ? <>
      <Hero />
      {/* <About /> */}
      <About2 />
      <Guests />
      <Timeline/>
      <TestiMonials/>
      {/* <Sponsors/> */}
      <Footer/>
      </>:
      <>
        <Container fluid className="p-0 w-100 h-100">
      <video autoPlay loop muted className="video-container w-100 h-100">
        <source src={Nes} type="video/mp4" />
      </video>
    </Container>
      </>

      }
      
    </div>
  );
}
export default App;
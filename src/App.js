// import About from "./components/About";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Members from "./components/Members";
import Main from "./pages/Main";
import "./styles.css";
import UserForm from "./components/UserForm";
// import UserForm from "./components/UserForm";
// import Sponsors from "./components/Sponsors";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/team" element={<Members />} />
        <Route path="/register" element={<UserForm/>} />    
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}
export default App;

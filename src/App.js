import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";


const App=()=>{
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
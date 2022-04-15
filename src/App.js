import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <GlobalStyle />
  </>)
}

export default App
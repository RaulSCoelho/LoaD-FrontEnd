import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./routes/Home";
import Login from "./routes/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <GlobalStyle />
  </>)
}

export default App
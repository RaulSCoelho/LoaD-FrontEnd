import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
    <GlobalStyle />
  </>)
}

export default App
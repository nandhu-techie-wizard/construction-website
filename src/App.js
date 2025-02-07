import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/counter";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><HomePage/><Footer/></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

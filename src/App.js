import React from "react";
import logo from "./logo.svg";
import Header from "./components/header/Header";
import Index from "./pages/Index";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default App;

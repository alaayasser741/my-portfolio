import React from "react";
import Header from "./components/header/Header";
import Index from "./pages/Index";
import Contact from "./components/contact/Contact";
import AddProjects from "./components/Admin/AddProjects";
import CustomerReview  from "./components/CustomerReview/CustomerReview";
import Demos  from "./components/Demos/Demos";
import NoDemo  from "./components/NoDemo/NoDemo";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Index/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/add-projects" element={<AddProjects/>}/>
        <Route path="/customer-review" element={<CustomerReview/>}/>
        <Route path="/demos/:id" element={<Demos/>}/>
        <Route path="/no-demo" element={<NoDemo/>}/>
      </Routes>
    </Router>
  );
};

export default App;

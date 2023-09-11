import Layout from "./components/Layout"; 
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import { useEffect, useState } from "react";
//import { useState } from "react";

function App() {

  //const [currentPage, setCurrentPage] = useState("home");
  const [mobile, setMobile] = useState(true);

  const handleMobileView = () => {
    window.innerWidth < 400 ? setMobile(true) : setMobile(false);
  }

  useEffect(() => {
    handleMobileView();
  }, [])

  window.addEventListener('resize', handleMobileView)

  return (
    <Routes>
      <Route path="/portfolio-bs" element={<Layout mobile={mobile} />}>
        <Route index path="/portfolio-bs" element={<Home />} />
        <Route path="projects" element={<Projects mobileView={mobile} />} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
}

export default App;

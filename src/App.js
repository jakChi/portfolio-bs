import Layout from "./components/Layout"; 
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/portfolio-bs" element={<Layout />}>
        <Route index path="/portfolio-bs" element={<Home />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
  );
}

export default App;

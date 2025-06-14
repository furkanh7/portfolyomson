import './App.css';
import About from './pages/about/index';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout/Layout'
import Project from './pages/project/index';
import Contact from './pages/contact/index';
import ExpertisePage from './pages/expertise';

function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<About />}></Route>
      <Route path="/expertise" element={<ExpertisePage />}></Route>
      <Route path="/projects" element={<Project />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;

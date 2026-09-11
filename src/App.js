import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import About from './pages/about/index';
import ExpertisePage from './pages/expertise/index';
import Project from './pages/project/index';
import Contact from './pages/contact/index';
import NotFound from './pages/notFound/index';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/expertise' element={<ExpertisePage />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

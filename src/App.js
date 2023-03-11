import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './assets/components/Layout';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Contact from './assets/components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" index element={<About />} />
          <Route path="contact" index element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App

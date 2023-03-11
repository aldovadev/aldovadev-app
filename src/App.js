import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './assets/components/Layout';
import Home from './assets/components/Home';
import About from './assets/components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" index element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

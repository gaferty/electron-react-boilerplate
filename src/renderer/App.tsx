import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';

export default function App() {
  return (
    <Router>
      <p>Nav Bar</p>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

import './App.css';
// routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Song from './pages/Song';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/song" exact element={<Song />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Groups from './pages/Groups';
import About from './pages/AboutUS';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

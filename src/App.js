import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Groups from './pages/Groups';
import About from './pages/AboutUS';
import { useState } from 'react';

function App() {

  const [group, setGroup] = useState([]);

  // Function to add a new person to the group
  const newPeople = (grp) => {
    setGroup([...group, grp]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/form" element={<Form newPeople={newPeople} />} /> {/* Form page */}
        <Route path="/groups" element={<Groups group={group} />} /> {/* Groups page */}
        <Route path="/about" element={<About />} /> {/* About Us page */}
      </Routes>
    </Router>
  );
}

export default App;

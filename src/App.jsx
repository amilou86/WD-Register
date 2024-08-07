import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Login from '../src/Components/Login/Login.jsx'
import Virtual from '../src/Components/Onboarder/Virtual.jsx'
import FaceToFace from '../src/Components/Onboarder/FaceToFace.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="face-to-face" element={<FaceToFace />} />
      </Routes>
    </Router>
  )
}

export default App;

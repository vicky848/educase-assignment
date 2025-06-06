import  { useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';

import LandingPage from './component/LandingPage';
import SignupPage from './component/SignupPage';
import LoginPage from './component/LoginPage';
import ProfilePage from './component/ProfilePage';

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage onSignup={(data) => setUserData(data)} />} />
        <Route path="/login" element={<LoginPage onLogin={(data) => setUserData(data)} />} />
        <Route path="/profile" element={<ProfilePage user={userData} />} />
      </Routes>
    </Router>
  );
}

export default App;

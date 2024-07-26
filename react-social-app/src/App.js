import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Profile from "./components/profile/Profile";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./pages/home/Home";
import { AuthContext } from './context/AuthContext'; // Ensure this path is correct

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

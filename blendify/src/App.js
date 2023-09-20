import logo from './logo.svg';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HomeView } from './Views/HomeView';
import { SignInView } from './Views/SignInView'; // Corrected import here.
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App" id="App">
        <header>
          Welcome to Blendify
        </header>
        
        <Routes>
          <Route path="/signin" element={isAuthenticated ? <Navigate to="/" /> : <SignInView onSignIn={() => setIsAuthenticated(true)} />} />
          <Route path="/" element={isAuthenticated ? <HomeView /> : <Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// Access Token (Bearer):
// BQAymk9Vq7utK6SICB9AYWxd1cULLmfLprbSytE1vb4a8wo_uRPhZe3DJ6aIqffnX7hF0AsH-HXYiOJtT3Sx_ia1XcTbvSAvR7csv0Ef_7-qyPXeTKM

// curl command to generate new acces token:
// curl -X POST "https://accounts.spotify.com/api/token" \
// -H "Content-Type: application/x-www-form-urlencoded" \
// -d "grant_type=client_credentials&client_id=7853b4c9dc604b2ea9b7f1cc305d1e86&client_secret=cad3689f3ed5446596b7105deed6497f"

// client id: 7853b4c9dc604b2ea9b7f1cc305d1e86
// client secret: cad3689f3ed5446596b7105deed6497f
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import JobListings from './components/JobListings';
import Contact from './components/Contact';
import About from './components/About';
import CompanyShowcase from './components/CompanyShowcase';
import { useNavigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Check for token on initial load
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Update login state
    navigate('/')
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Update state after successful login
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Portal
          </Typography>
          <Button color="inherit" component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/job-listings">
            Job Listings
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/company">
            Company Showcase
          </Button>
          {/* Conditionally render Login or Logout button */}
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <div>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-listings" element={<JobListings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<CompanyShowcase />} />
        </Routes>
      </div>
    </Box>
  );
}

export default App;

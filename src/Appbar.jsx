import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Appbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#2c3e50' }}>
      <Toolbar>
        {/* Left side */}
        <div style={{ flexGrow: 1 }}>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: '#ecf0f1' }}>
            Webapp For Mental Health Assessment
          </Typography>
        </div>

        {/* Right side */}
        <Button color="inherit" component={Link} to="/" style={{ marginRight: '10px' }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/contact" style={{ marginRight: '10px' }}>
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/about" style={{ marginRight: '10px' }}>
          About
        </Button>
        <Button color="inherit" component={Link} to="/profile" style={{ marginRight: '10px' }}>
          Profile
        </Button>
        <Button color="inherit" component={Link} to="/login" style={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

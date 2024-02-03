import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div>
     
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h1" style={{ color: 'black', marginBottom: '20px' }}>
          Webapp For Mental Health Assessment
        </Typography>
        <Typography variant="h4" style={{ color: 'black', marginBottom: '30px' }}>
          Explore the services we offer.
        </Typography>

        <section style={{ marginBottom: '50px' }}>
          <Typography variant="h2" style={{ color: 'black', marginBottom: '20px' }}>
            Features
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <Typography variant="h5" style={{ color: 'black' }}>
                Feature 1
              </Typography>
              <img
                src="https://images.pexels.com/photos/3932961/pexels-photo-3932961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Feature 1"
                style={{ width: '150px', height: '150px', marginBottom: '10px' }}
              />
            <p style={{ color: 'red' }}>Because We are Great.</p>

            </div>
            <div>
              <Typography variant="h5" style={{ color: 'black' }}>
                Feature 2
              </Typography>
              <img
                src="https://images.pexels.com/photos/3932961/pexels-photo-3932961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Feature 2"
                style={{ width: '150px', height: '150px', marginBottom: '10px' }}
              />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <Typography variant="h2" style={{ color: 'black', marginBottom: '20px' }}>
            Why Choose Us?
          </Typography>
          <p>
            We are dedicated to providing you with the best services and ensuring a
            delightful experience.
          </p>
        </section>

        <Button variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Home;

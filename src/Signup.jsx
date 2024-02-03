import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div>
      <TextField
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <br /><br />
      <TextField
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
      />
      <br /><br />
      <TextField
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <br /><br />
      <TextField
        onChange={(e) => {
          setName(e.target.value);
        }}
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <br /><br />
      <TextField
        onChange={(e) => {
          setAge(e.target.value);
        }}
        label="Age"
        variant="outlined"
        fullWidth
        margin="normal"
        type="number"
      />
      <br /><br />
      <TextField
        onChange={(e) => {
          setGender(e.target.value);
        }}
        label="Gender"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <br /><br />
      <Button variant="contained" onClick={() => {
        fetch("http://localhost:3000/signup", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            name: name,
            age: age,
            gender: gender
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            response.json().then(data => {
              console.log(data);
              localStorage.setItem("token", data.token);
              window.location = "/"
            });
          })
      }}>Signup</Button>
    </div>
  );
}

export default Signup;

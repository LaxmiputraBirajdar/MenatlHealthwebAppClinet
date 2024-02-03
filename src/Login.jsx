import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
// import axios from "axios";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                Welcome to Mental Health Assessment Webapp. login below
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(evant11) => {
                        let elemt = evant11.target;
                        setUsername(elemt.value);
                    }}
                    fullWidth={true}
                    label="Username"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        const res = await fetch("http://localhost:3000/login", {
                            username: username,
                            password: password
                        }, {
                            headers: {
                                "Content-type": "application/json"
                            }
                        });
                        const data = res.data;
                        
                        localStorage.setItem("token", data.token);
                        window.location = "/"
                    }}

                > Login</Button>
            </Card>
        </div>
    </div>
}

export default Login;
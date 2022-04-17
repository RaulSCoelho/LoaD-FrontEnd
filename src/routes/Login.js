import React, { useState } from "react";
import api from '../api'
import { Box } from "../components/Box";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Redirect } from "../components/Redirect";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    async function login() {
        const options = {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        }
        fetch('https://lifeofadream.herokuapp.com/user/login', options).then(res => {
            //Redirect('/')
        }).catch(err => {
            const loginError = document.querySelector('#loginError')
            loginError.style = "color: red;"
            loginError.innerHTML = err.response.data
        })
        // await api.post('/user/login', {
        //     username: username,
        //     password: password
        // }).then(res => {
        //     //Redirect('/')
        // }).catch(err => {
        //     const loginError = document.querySelector('#loginError')
        //     loginError.style = "color: red;"
        //     loginError.innerHTML = err.response.data
        // })
    }

    return (
        <Box minHeight="100vh">
            <Flex justify="center">
                <Flex
                    justify="space-evenly" direction="column" width="300px"
                    height="200px" borderRadius="20px" bgColor="rgb(207, 207, 207)"
                    boxShadow="0px 0px 16px rgba(0, 0, 0, 0.6)"
                >
                    <div id="loginError"></div>
                    <Input onChange={(e) => setUsername(e.target.value)} type="text" id="username" placeholder="username" />
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="password" />
                    <Button onClick={login} padding="0 10px 0 10px">Login</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Login
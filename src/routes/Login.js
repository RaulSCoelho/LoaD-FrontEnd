import React, { useState } from "react";
import api from '../api'
import { Box } from "../components/Box";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ResponsiveTitle } from "../components/ResponsiveTitle";
import { Redirect } from "../components/Redirect";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    async function login() {
        await api.post('user/login', {
            username: username,
            password: password
        }).then(res => {
            Redirect('/')
        }).catch(err => {
            const loginError = document.querySelector('#loginError')
            loginError.style = "color: red;"
            loginError.innerHTML = err.response.data
        })
    }

    return (
        <Box className="login" minHeight="100vh" mediaMarginTop="0px">
            <Flex justify="center">
                <Flex
                    justify="space-evenly" direction="column" width="300px"
                    height="200px" borderRadius="20px" bgColor="rgb(207, 207, 207)"
                    boxShadow="0px 0px 16px rgba(0, 0, 0, 0.6)"
                >
                    <div id="loginError"></div>
                    <ResponsiveTitle color="black">Login</ResponsiveTitle>
                    <Input onChange={(e) => setUsername(e.target.value)} type="text" id="username" placeholder="username" />
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="password" />
                    <Button onClick={login} padding="0px 10px 2px 10px" width="8rem" height="1.7rem">Entrar</Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Login
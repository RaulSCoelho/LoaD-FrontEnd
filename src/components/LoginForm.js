import React, { useState } from "react"
import styled from "@emotion/styled";
import { Flex } from "./Flex"
import api from "../api"
import { Button } from "./Button";
import { Redirect } from "./Redirect";

export const Input = styled("input")(
    {
        border: "1px solid black",
        borderRadius: "5px",
        paddingLeft: "3px"
    }
)

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    async function login() {
        await api.post('/user/login', {
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
    )
}

export default LoginForm
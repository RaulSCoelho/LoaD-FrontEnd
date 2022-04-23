import React, { useState } from "react";
import api from "../api";
import { Border } from "../components/Border";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { ResponsiveTitle } from "../components/ResponsiveTitle";

function UserData() {
    const [radio, setRadio] = useState(true)
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [sex, setSex] = useState("male")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [admin, setAdmin] = useState(false)

    let message = document.querySelector('.createUserMessage')

    async function create() {

        if (password !== confirmPassword) {
            message.style = "color: red; width: 350px; font-size: 11pt;"
            message.innerHTML = "Password and Confirm Password does not match"
            return false
        }

        await api.post("user/register", {
            username: username,
            fullname: fullname,
            email: email,
            sex: sex,
            password: password,
            admin: admin
        }).then(res => {
            message.style = "color: #00cf00; width: 350px; font-size: 11pt;"
            message.innerHTML = "User created with success"
        }).catch(err => {
            message.style = "color: red; width: 350px; font-size: 11pt;"
            message.innerHTML = err.response.data
        })
    }

    return (
        <Flex justify="space-between" alignItems="start" margin="40px 0 0 0" mediaDirection="column">
            <ResponsiveTitle textAlign="left !important" mediaWidth="100%" mediaTextAlign="center !important">
                Create a User
            </ResponsiveTitle>
            <Flex>
                <Flex className="createUser" direction="column">
                    <div className="createUserMessage"></div>
                    <InputProfile label="Name:" type="text" setValue={(e) => { setFullname(e.target.value); message.innerHTML = "" }} placeholder="Full Name" />
                    <InputProfile label="Username:" type="text" setValue={(e) => { setUsername(e.target.value); message.innerHTML = "" }} placeholder="Username" />
                    <InputProfile label="Email:" type="text" setValue={(e) => { setEmail(e.target.value); message.innerHTML = "" }} placeholder="example@example.com" />
                    <Radio info="Sex:"
                        setClick1={(e) => { setSex(e.target.value); setRadio(!radio) }}
                        setClick2={(e) => { setSex(e.target.value); setRadio(!radio) }}
                        value1="male" checked1={radio} value2="female" checked2={!radio}
                    />
                    <InputProfile label="Password:" type="password" setValue={(e) => { setPassword(e.target.value); message.innerHTML = "" }} placeholder="********" />
                    <InputProfile label="Confirm Password:" type="password" setValue={(e) => { setConfirmPassword(e.target.value); message.innerHTML = "" }} placeholder="********" />
                    <Radio info="Admin:"
                        setClick1={() => setAdmin(!admin)}
                        setClick2={() => setAdmin(!admin)}
                        value1="true" checked1={admin} value2="false" checked2={!admin}
                    />
                    <Flex>
                        <Button onClick={create} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" padding="0px 5px 2px 5px" border="none">
                            Create User
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export function InputProfile(props) {
    return (
        <Flex direction="column" width="350px">
            <Flex direction="column">
                <ResponsiveTitle width="350px" textAlign="left !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                    {props.label}
                </ResponsiveTitle>
                <Input onInput={props.setValue} type={props.type} placeholder={props.placeholder} padding="0 0 0 0" width="350px" color="white" bgColor="transparent" border="none" />
            </Flex>
            <Border width="350px" margin="10px 0 10px 0" />
        </Flex>
    )
}

export function Radio(props) {
    return (
        <Flex direction="column" width="350px">
            <Flex>
                <ResponsiveTitle width="75px !important" textAlign="left !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                    {props.info}
                </ResponsiveTitle>
                <Flex width="350px" justify="space-around">
                    <Flex direction="column" width="75px">
                        <ResponsiveTitle textAlign="center !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                            {props.value1}
                        </ResponsiveTitle>
                        <Input onClick={props.setClick1} type="radio" value={props.value1} checked={props.checked1} />
                    </Flex>
                    <Flex direction="column" width="75px">
                        <ResponsiveTitle textAlign="center !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                            {props.value2}
                        </ResponsiveTitle>
                        <Input onClick={props.setClick2} type="radio" value={props.value2} checked={props.checked2} />
                    </Flex>
                </Flex>
            </Flex>
            <Border width="350px" margin="10px 0 10px 0" />
        </Flex>
    )
}

export default UserData
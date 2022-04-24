import React, { useContext, useState } from "react";
import api from "../api";
import { Border } from "../components/Border";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { ResponsiveTitle } from "../components/ResponsiveTitle";
import { UserContext } from "../context/UserContext";

function UserData() {
    const { user, setUser } = useContext(UserContext)
    const userInfo = user ? user : ""
    const [edit, setEdit] = useState(false)
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    let message = document.querySelector('.userDataMessage')

    function change() {
        message.innerHTML = ""
        setFullname("")
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setEdit(!edit)
    }

    function save() {
        let body = {}
        if (fullname) body.fullname = fullname
        if (username) body.username = username
        if (email) body.email = email
        if (password) if (password === confirmPassword) {
            body.password = password
        } else {
            message.style = "color: red; width: 350px; font-size: 11pt;"
            message.innerHTML = "Password and Confirm Password does not match"
            return false
        }

        if (!fullname && !username && !email && !password && !confirmPassword) {
            message.style = "color: red; width: 350px; font-size: 11pt;"
            message.innerHTML = "All the fields are empty"
            return false
        }

        api.patch(`user/${user.username}`, body).then(res => {
            message.style = "color: #00cf00; width: 350px; font-size: 11pt;"
            message.innerHTML = res.data
        }).catch(err => {
            message.style = "color: red; width: 350px; font-size: 11pt;"
            message.innerHTML = err.response.data
        })

        if (body.username) user.username = body.username
        if (body.fullname) user.fullname = body.fullname
        if (body.email) user.email = body.email

        setUser(user)
    }

    return (
        <Flex justify="space-between" alignItems="start" margin="40px 0 0 0" mediaDirection="column">
            <ResponsiveTitle textAlign="left !important" mediaWidth="100%" mediaTextAlign="center !important">
                Dados Pessoais
            </ResponsiveTitle>
            <Flex className="userData" direction="column">
                <div className="userDataMessage"></div>
                <InputProfile edit={edit} label="Name:" type="text" userInfo={userInfo.fullname} setValue={(e) => { setFullname(e.target.value); message.innerHTML = "" }} />
                <InputProfile edit={edit} label="Username:" type="text" userInfo={userInfo.username} setValue={(e) => { setUsername(e.target.value); message.innerHTML = "" }} />
                <InputProfile edit={edit} label="Email:" type="text" userInfo={userInfo.email} setValue={(e) => { setEmail(e.target.value); message.innerHTML = "" }} />
                <InputProfile edit={edit} label="Password:" type="password" userInfo="********" setValue={(e) => { setPassword(e.target.value); message.innerHTML = "" }} />
                {edit ? <InputProfile edit={edit} label="Confirm Password:" type="password" userInfo="********" setValue={(e) => { setConfirmPassword(e.target.value); message.innerHTML = "" }} /> : <></>}
                <Flex>
                    <Button onClick={change} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" padding="0px 5px 2px 5px" border="none">
                        {edit ? "Cancel" : "Change"}
                    </Button>
                    {edit ?
                        <Button onClick={save} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" margin="0 0 0 20px" padding="0px 5px 2px 5px" border="none">
                            Save
                        </Button> : <></>
                    }
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
                {props.edit ?
                    <Input onInput={props.setValue} type={props.type} placeholder={props.userInfo} padding="0 0 0 0" width="350px" color="white" bgColor="transparent" border="none" />
                    :
                    <ResponsiveTitle width="350px" textAlign="left !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                        {props.userInfo}
                    </ResponsiveTitle>
                }
            </Flex>
            <Border width="350px" margin="10px 0 10px 0" />
        </Flex>
    )
}

export default UserData
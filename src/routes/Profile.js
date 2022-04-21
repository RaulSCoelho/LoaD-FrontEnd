import React, { useContext, useState } from "react";
import api from "../api";
import { Border } from "../components/Border";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { ResponsiveTitle } from "../components/ResponsiveTitle";
import { UserContext } from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext)
    const userInfo = user ? user : ""
    const [edit, setEdit] = useState(false)
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function change() {
        let message = document.querySelector('.message')
        message.innerHTML = ""
        setFullname("")
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setEdit(!edit)
    }

    function save() {
        let message = document.querySelector('.message')
        let body = {}
        if (fullname) body.fullname = fullname
        if (username) body.username = username
        if (email) body.email = email
        if (password) if (password === confirmPassword) {
            body.password = password
        } else {
            message.style = "color: red; width: 400px; font-size: 11pt;"
            message.innerHTML = "Password and Confirm Password does not match"
            return false
        }

        api.patch(`user/update/${user.username}`, body).then(res => {
            message.style = "color: #00cf00; width: 400px; font-size: 11pt;"
            message.innerHTML = res.data
        }).catch(err => {
            message.style = "color: red; width: 400px; font-size: 11pt;"
            message.innerHTML = err.response.data
        })
    }

    return (
        <Box className="profile" minHeight="calc(100vh - 70px)" mediaMarginTop="0">
            <Flex direction="column" width="50%">
                <ResponsiveTitle>Dados Pessoais</ResponsiveTitle>
                <div className="message"></div>
                <InputProfile edit={edit} label="Name:" type="text" userInfo={userInfo.fullname} setValue={(e) => setFullname(e.target.value)} />
                <InputProfile edit={edit} label="Username:" type="text" userInfo={userInfo.username} setValue={(e) => setUsername(e.target.value)} />
                <InputProfile edit={edit} label="Email:" type="text" userInfo={userInfo.email} setValue={(e) => setEmail(e.target.value)} />
                <InputProfile edit={edit} label="Password:" type="password" userInfo="*************" setValue={(e) => setPassword(e.target.value)} />
                {edit ? <InputProfile edit={edit} label="Confirm Password:" type="password" userInfo="*************" setValue={(e) => setConfirmPassword(e.target.value)} /> : <></>}
                <Border width="300px" margin="10px 0 10px 0" />
                <Flex>
                    <Button onClick={change} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" padding="0px 5px 5px 5px" border="none">
                        {edit ? "Cancel" : "Change"}
                    </Button>
                    {edit ?
                        <Button onClick={save} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" margin="0 0 0 20px" padding="0px 5px 5px 5px" border="none">
                            Save
                        </Button> : <></>
                    }
                </Flex>
            </Flex>
        </Box>
    )

}

export function InputProfile(props) {
    return (
        <Flex direction="column" display={props.display}>
            <Border width="300px" margin="10px 0 10px 0" />
            <Flex direction="column">
                <ResponsiveTitle width="200px" textAlign="left !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                    {props.label}
                </ResponsiveTitle>
                {props.edit ?
                    <Input className="profileInput" onInput={props.setValue} type={props.type} placeholder={props.userInfo} padding="0 0 0 0" width="200px" color="white" bgColor="transparent" border="none" />
                    :
                    <ResponsiveTitle width="200px" textAlign="left !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                        {props.userInfo}
                    </ResponsiveTitle>
                }
            </Flex>
        </Flex>
    )
}

export default Profile
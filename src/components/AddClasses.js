import React, { useState } from "react";
import api from "../api";
import { Border } from "../components/Border";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { ResponsiveTitle } from "../components/ResponsiveTitle";

function AddClasses() {
    const [module, setModule] = useState(null)
    const [videos, setVideos] = useState("")
    const [titles, setTitles] = useState("")
    const [thumbnails, setThumbnails] = useState("")

    function create() {
        let message = document.querySelector('.createUserMessage')

        if (password !== confirmPassword) {
            message.style = "color: red; width: 400px; font-size: 11pt;"
            message.innerHTML = "Password and Confirm Password does not match"
            return false
        }

        api.post("classes", {
            module: module,
            videos: videos,
            titles: titles,
            thumbnails: thumbnails
        }).then(res => {
            message.style = "color: #00cf00; width: 400px; font-size: 11pt;"
            message.innerHTML = "User created with success"
        }).catch(err => {
            message.style = "color: red; width: 400px; font-size: 11pt;"
            message.innerHTML = err.response.data
        })
    }

    return (
        <Flex className="createModule" direction="column" width="50%">
            <ResponsiveTitle>Add a Class Module</ResponsiveTitle>
            <div className="createModuleMessage"></div>
            <InputProfile label="Module:" type="number" setValue={(e) => setModule(e.target.value)} placeholder="0" />
            <InputProfile label="Urls:" type="text" setValue={(e) => setVideos(e.target.value)} placeholder="https://www.example.com" />
            <InputProfile label="Title:" type="text" setValue={(e) => setTitles(e.target.value)} placeholder="Video Title" />
            <InputProfile label="Thumbnail:" type="text" setValue={(e) => setTitles(e.target.value)} placeholder="Video Thumbnail" />
            <Border width="400px" margin="10px 0 10px 0" />
            <Flex>
                <Button onClick={create} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" padding="0px 5px 5px 5px" border="none">
                    Create User
                </Button>
            </Flex>
        </Flex>
    )
}

export function InputProfile(props) {
    return (
        <Flex direction="column">
            <Border width="400px" margin="10px 0 10px 0" />
            <Flex direction="column">
                <ResponsiveTitle width="300px" textAlign="left !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                    {props.label}
                </ResponsiveTitle>
                <Input onInput={props.setValue} type={props.type} placeholder={props.placeholder} padding="0 0 0 0" width="300px" color="white" bgColor="transparent" border="none" />
            </Flex>
        </Flex>
    )
}

export default AddClasses
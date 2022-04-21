import React, { useState } from "react";
import api from "../api";
import { Border } from "../components/Border";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { ResponsiveTitle } from "../components/ResponsiveTitle";

let videosArray = []
let titlesArray = []
let thumbnailsArray = []

function AddClasses() {
    const [module, setModule] = useState("")
    const [videos, setVideos] = useState("")
    const [titles, setTitles] = useState("")
    const [thumbnails, setThumbnails] = useState("")
    
    const [videosLength, setVideosLength] = useState(0)
    const [titlesLength, setTitlesLength] = useState(0)
    const [thumbnailsLength, setThumbnailsLength] = useState(0)

    let message = document.querySelector('.createModuleMessage')

    function create() {

        api.post("classes", {
            module: module,
            videos: videosArray,
            titles: titlesArray,
            thumbnails: thumbnailsArray
        }).then(res => {
            message.style = "color: #00cf00; width: 400px; font-size: 11pt;"
            message.innerHTML = "Module added with success"
        }).catch(err => {
            message.style = "color: red; width: 400px; font-size: 11pt;"
            message.innerHTML = err.response.data
        })
    }

    return (
        <Flex className="createModule" direction="column" width="50%">
            <ResponsiveTitle>Add a Class Module</ResponsiveTitle>
            <div className="createModuleMessage"></div>
            <ResponsiveTitle width="300px" textAlign="center !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                {module !== "0" && module !== "" ? `Urls: ${videosLength} Titles: ${titlesLength} Thumbnails: ${thumbnailsLength}` : ""}
            </ResponsiveTitle>
            <InputProfile label="Module:" type="number" setValue={(e) => { setModule(e.target.value); message.innerHTML = "" }} placeholder="0" display="none" width="300px" />
            <InputProfile label="Urls:" type="text" setValue={(e) => { setVideos(e.target.value); message.innerHTML = "" }} Add={() => { videosArray.push(videos); setVideosLength(videosArray.length) }} placeholder="https://www.example.com" />
            <InputProfile label="Title:" type="text" setValue={(e) => { setTitles(e.target.value); message.innerHTML = "" }} Add={() => { titlesArray.push(titles); setTitlesLength(titlesArray.length) }} placeholder="Video Title" />
            <InputProfile label="Thumbnail:" type="text" setValue={(e) => { setThumbnails(e.target.value); message.innerHTML = "" }} Add={() => { thumbnailsArray.push(thumbnails); setThumbnailsLength(thumbnailsArray.length) }} placeholder="Video Thumbnail" />
            <Border width="400px" margin="10px 0 10px 0" />
            <Flex>
                <Button onClick={create} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" padding="0px 5px 5px 5px" border="none">
                    Add Module
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
                <Flex>
                    <Input onInput={props.setValue} type={props.type} placeholder={props.placeholder} padding="0 0 0 0" width={props.width || "256px"} color="white" bgColor="transparent" border="none" />
                    <Button onClick={props.Add} height="24px" width="44px" fontSize="18px" display={props.display}>Add</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AddClasses
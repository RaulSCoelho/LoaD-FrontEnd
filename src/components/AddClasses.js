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
            message.style = "color: #00cf00; width: 350px; font-size: 11pt;"
            message.innerHTML = "Module added with success"
        }).catch(err => {
            message.style = "color: red; width: 350px; font-size: 11pt;"
            message.innerHTML = err.response.data
        })
    }

    function clear() {
        videosArray = []
        titlesArray = []
        thumbnailsArray = []
        setVideosLength(0)
        setTitlesLength(0)
        setThumbnailsLength(0)
    }

    return (
        <Flex justify="space-between" alignItems="start" margin="40px 0 0 0" mediaDirection="column">
            <ResponsiveTitle textAlign="left !important" mediaWidth="100%" mediaTextAlign="center !important">
                Add a Class Module
            </ResponsiveTitle>
            <Flex className="createModule" direction="column">
                <div className="createModuleMessage"></div>
                <ResponsiveTitle width="350px" textAlign="center !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                    {module !== "0" && module !== "" ? `Urls: ${videosLength} Titles: ${titlesLength} Thumbnails: ${thumbnailsLength}` : ""}
                </ResponsiveTitle>
                <InputProfile label="Module:" type="number" setValue={(e) => { setModule(e.target.value); message.innerHTML = "" }} placeholder="0" display="none" width="350px" />
                <InputProfile label="Urls:" type="text" setValue={(e) => { setVideos(e.target.value); message.innerHTML = "" }} Add={() => { if (videos !== "") videosArray.push(videos); setVideosLength(videosArray.length) }} placeholder="https://www.example.com" />
                <InputProfile label="Title:" type="text" setValue={(e) => { setTitles(e.target.value); message.innerHTML = "" }} Add={() => { if (titles !== "") titlesArray.push(titles); setTitlesLength(titlesArray.length) }} placeholder="Video Title" />
                <InputProfile label="Thumbnail:" type="text" setValue={(e) => { setThumbnails(e.target.value); message.innerHTML = "" }} Add={() => { if (thumbnails !== "") thumbnailsArray.push(thumbnails); setThumbnailsLength(thumbnailsArray.length) }} placeholder="Video Thumbnail" />
                <Flex>
                    <Button onClick={create} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" padding="0px 5px 2px 5px" border="none">
                        Add Module
                    </Button>
                    <Button onClick={clear} bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" padding="0px 5px 2px 5px" border="none">
                        Clear
                    </Button>
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
                <Flex justify="space-between">
                    <Input onInput={props.setValue} type={props.type} placeholder={props.placeholder} padding="0 0 0 0" width={props.width} color="white" bgColor="transparent" border="none" />
                    <Button onClick={props.Add} height="24px" width="44px" fontSize="18px" display={props.display}>Add</Button>
                </Flex>
            </Flex>
            <Border width="350px" margin="10px 0 10px 0" />
        </Flex>
    )
}

export default AddClasses
import React, { useContext } from "react";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"
import { IoChevronBackOutline as Back } from "react-icons/io5"
import api from "../api"
import Video from "../components/Video";
import { Title } from "../components/Title";
import { Flex } from "./Flex";
import { PreviousVideoBtn } from "./PreviousVideoBtn";
import { NextVideoBtn } from "./NextVideoBtn";
import { UserContext } from '../context/UserContext'
import { ClassesContext } from '../context/ClassesContext'

let currentClass = ""
let currentModule = ""
let newCurrentClass = ""
let newCurrentModule = ""

export async function back(user, setUser, classes) {
    const currentVideo = document.querySelector('.currentVideo')
    const currentVideoTitle = document.querySelector('.currentVideoTitle')
    const currentVideoModule = document.querySelector('.currentVideoModule')

    currentClass = user.currentClass
    currentModule = user.currentModule

    if (!(currentClass === 0 && currentModule === 0)) {
        if (currentClass === 0 && currentModule > 0) {
            newCurrentModule = user.currentModule - 1
            newCurrentClass = classes[newCurrentModule].videos.length - 1
        } else {
            newCurrentClass = user.currentClass - 1
            newCurrentModule = currentModule
        }

        currentVideo.src = classes[newCurrentModule].videos[newCurrentClass]
        currentVideoModule.innerHTML = classes[newCurrentModule].titles[0]
        currentVideoTitle.innerHTML = classes[newCurrentModule].titles[newCurrentClass + 1]

        user.currentClass = newCurrentClass
        user.currentModule = newCurrentModule

        await api.patch(`user/update/${user.username}`, {
            currentClass: newCurrentClass,
            currentModule: newCurrentModule
        }).then(res => {
            setUser(user)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}

export async function next(user, setUser, classes) {
    const currentVideo = document.querySelector('.currentVideo')
    const currentVideoTitle = document.querySelector('.currentVideoTitle')
    const currentVideoModule = document.querySelector('.currentVideoModule')

    currentClass = user.currentClass
    currentModule = user.currentModule

    if (classes[currentModule].videos[currentClass] !== classes[classes.length - 1].videos[classes[classes.length - 1].videos.length - 1]) {
        if (classes[currentModule].videos[currentClass] === classes[currentModule].videos[classes[currentModule].videos.length - 1]) {
            newCurrentModule = user.currentModule + 1
            newCurrentClass = 0
        } else {
            newCurrentClass = user.currentClass + 1
            newCurrentModule = currentModule
        }
        
        currentVideo.src = classes[newCurrentModule].videos[newCurrentClass]
        currentVideoModule.innerHTML = classes[newCurrentModule].titles[0]
        currentVideoTitle.innerHTML = classes[newCurrentModule].titles[newCurrentClass + 1]

        user.currentClass = newCurrentClass
        user.currentModule = newCurrentModule

        await api.patch(`user/update/${user.username}`, {
            currentClass: newCurrentClass,
            currentModule: newCurrentModule
        }).then(res => {
            setUser(user)
        }).catch(err => {
            console.log(err.response.data)
        })
    }
}

function CurrentVideo() {
    const { user, setUser } = useContext(UserContext)
    const { classes } = useContext(ClassesContext)
    const videoURL = user ? classes[user.currentModule].videos[user.currentClass] : ""
    const videoTitle = user ? classes[user.currentModule].titles[user.currentClass + 1] : ""
    const moduleTitle = user ? classes[user.currentModule].titles[0] : ""

    return (
        <Flex justify="space-between">
            <Flex direction="column">
                <Flex>
                    {/* Botão para voltar pro video anterior */}
                    <PreviousVideoBtn className="previousVideo" onClick={() => back(user, setUser, classes)}>
                        <Back size="1.8em" color="white" />
                    </PreviousVideoBtn>
                    {/* Vídeo atual */}
                    <Video nameClass="currentVideo" url={videoURL} title={videoTitle} width={854} margin="0px 10vw 0px 10vw" />
                    {/* Botão para avançar para o próximo video */}
                    <NextVideoBtn className="nextVideo" onClick={() => next(user, setUser, classes)}>
                        <Forward size="1.8em" color="white" />
                    </NextVideoBtn>
                </Flex>
                {/* Módulo da aula */}
                <Title className="currentVideoModule" textAlign="left" fontSize="16px" margin="15px 0px 0px 0px" viewWidth="32px">
                    {moduleTitle}
                </Title>
                {/* Título da aula */}
                <Title className="currentVideoTitle" textAlign="left" fontSize="48px" viewWidth="10vw">
                    {videoTitle}
                </Title>
            </Flex>
        </Flex>
    )
}

export default CurrentVideo
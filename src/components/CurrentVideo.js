import Video from "../components/Video";
import VideosInfo from "../components/VideosInfo";
import React from "react";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"
import { IoChevronBackOutline as Back } from "react-icons/io5"
import { Flex } from "./Flex";
import { Title } from "../components/Title";
import { PreviousVideoBtn } from "./PreviousVideoBtn";
import { NextVideoBtn } from "./NextVideoBtn";

export function back() {
    const currentVideo = document.querySelector('.currentVideo')
    const currentVideoTitle = document.querySelector('.currentVideoTitle')
    const currentVideoModule = document.querySelector('.currentVideoModule')
    const currentVideoIndex = localStorage.getItem('currentVideoIndex')
    const currentModuleIndex = localStorage.getItem('currentVideoModuleIndex')

    if (currentVideoIndex !== '0') {
        const videoLink = VideosInfo.videos[currentModuleIndex][currentVideoIndex - 1]
        const videoTitle = VideosInfo.titles[currentModuleIndex][currentVideoIndex]
        const videoModule = VideosInfo.titles[currentModuleIndex][0]

        currentVideo.src = videoLink
        currentVideoTitle.innerHTML = videoTitle
        currentVideoModule.innerHTML = videoModule

        localStorage.setItem('currentVideo', videoLink)
        localStorage.setItem('currentVideoIndex', currentVideoIndex - 1)
        localStorage.setItem('currentVideoTitle', videoTitle)
        localStorage.setItem('currentVideoModule', videoModule)
    } else if (currentModuleIndex !== '0') {
        const videoLink = VideosInfo.videos[parseInt(currentModuleIndex) - 1][VideosInfo.videos[(parseInt(currentModuleIndex) - 1)].length - 1]
        const videoTitle = VideosInfo.titles[parseInt(currentModuleIndex) - 1][VideosInfo.titles[(parseInt(currentModuleIndex) - 1)].length - 1]
        const videoModule = VideosInfo.titles[parseInt(currentModuleIndex) - 1][0]

        currentVideo.src = videoLink
        currentVideoTitle.innerHTML = videoTitle
        currentVideoModule.innerHTML = videoModule

        localStorage.setItem('currentVideo', videoLink)
        localStorage.setItem('currentVideoIndex', VideosInfo.videos[(parseInt(currentModuleIndex) - 1)].length - 1)
        localStorage.setItem('currentVideoTitle', videoTitle)
        localStorage.setItem('currentVideoModule', videoModule)
        localStorage.setItem('currentVideoModuleIndex', parseInt(currentModuleIndex) - 1)
    }
}

export function next() {
    const currentVideo = document.querySelector('.currentVideo')
    const currentVideoTitle = document.querySelector('.currentVideoTitle')
    const currentVideoModule = document.querySelector('.currentVideoModule')
    const currentVideoIndex = localStorage.getItem('currentVideoIndex')
    const currentModuleIndex = localStorage.getItem('currentVideoModuleIndex')

    if (currentVideoIndex !== `${(VideosInfo.videos[currentModuleIndex].length - 1)}`) {
        const videoLink = VideosInfo.videos[currentModuleIndex][parseInt(currentVideoIndex) + 1]
        const videoTitle = VideosInfo.titles[currentModuleIndex][parseInt(currentVideoIndex) + 2]
        const videoModule = VideosInfo.titles[currentModuleIndex][0]

        currentVideo.src = videoLink
        currentVideoTitle.innerHTML = videoTitle
        currentVideoModule.innerHTML = videoModule

        localStorage.setItem('currentVideo', videoLink)
        localStorage.setItem('currentVideoIndex', parseInt(currentVideoIndex) + 1)
        localStorage.setItem('currentVideoTitle', videoTitle)
        localStorage.setItem('currentVideoModule', videoModule)
    } else {
        const videoLink = VideosInfo.videos[parseInt(currentModuleIndex) + 1][0]
        const videoTitle = VideosInfo.titles[parseInt(currentModuleIndex) + 1][1]
        const videoModule = VideosInfo.titles[parseInt(currentModuleIndex) + 1][0]

        currentVideo.src = videoLink
        currentVideoTitle.innerHTML = videoTitle
        currentVideoModule.innerHTML = videoModule

        localStorage.setItem('currentVideo', videoLink)
        localStorage.setItem('currentVideoIndex', 0)
        localStorage.setItem('currentVideoTitle', videoTitle)
        localStorage.setItem('currentVideoModule', videoModule)
        localStorage.setItem('currentVideoModuleIndex', parseInt(currentModuleIndex) + 1)
    }
}

function CurrentVideo() {
    return (
        <Flex width="100%" direction="row" justify="space-between">
            <Flex width="100%" direction="column" justify="center">
                <Flex width="100%" direction="row" justify="center">
                    {/* Botão para voltar pro video anterior */}
                    <PreviousVideoBtn className="previousVideo" onClick={back}>
                        <Back size="1.8em" color="white" />
                    </PreviousVideoBtn>
                    {/* Vídeo atual */}
                    <Video nameClass="currentVideo" url={`${localStorage.getItem('currentVideo')}`} title={VideosInfo.titles[0][1]} width={854} margin="0px 10vw 0px 10vw" />
                    {/* Botão para avançar para o próximo video */}
                    <NextVideoBtn className="nextVideo" onClick={next}>
                        <Forward size="1.8em" color="white" />
                    </NextVideoBtn>
                </Flex>
                {/* Módulo da aula */}
                <Title className="currentVideoModule" fontSize="16px" margin="15px 0px 0px 0px" viewWidth="32px">
                    {`${localStorage.getItem('currentVideoModule')}`}
                </Title>
                {/* Título da aula */}
                <Title className="currentVideoTitle" fontSize="48px" viewWidth="10vw">
                    {`${localStorage.getItem('currentVideoTitle')}`}
                </Title>
            </Flex>
        </Flex>
    )
}

export default CurrentVideo
import React from "react";
import { Flex } from "./Flex";
import { Title } from "../components/Title";
import { ThemeProvider } from "styled-components";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"
import { IoChevronBackOutline as Back } from "react-icons/io5"
import Video from "../components/Video";
import VideosInfo from "../components/VideosInfo";
import Themes from "../components/Themes"
import { BackOrForthButton } from "./BackOrForthButton";

function CurrentVideo() {

    function back() {
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
        }else if(currentModuleIndex !== '0'){
            const videoLink = VideosInfo.videos[parseInt(currentModuleIndex) - 1][VideosInfo.videos[(parseInt(currentModuleIndex)-1)].length - 1]
            const videoTitle = VideosInfo.titles[parseInt(currentModuleIndex) - 1][VideosInfo.titles[(parseInt(currentModuleIndex)-1)].length - 1]
            const videoModule = VideosInfo.titles[parseInt(currentModuleIndex) - 1][0]

            currentVideo.src = videoLink
            currentVideoTitle.innerHTML = videoTitle
            currentVideoModule.innerHTML = videoModule

            localStorage.setItem('currentVideo', videoLink)
            localStorage.setItem('currentVideoIndex', VideosInfo.videos[(parseInt(currentModuleIndex)-1)].length - 1)
            localStorage.setItem('currentVideoTitle', videoTitle)
            localStorage.setItem('currentVideoModule', videoModule)
            localStorage.setItem('currentVideoModuleIndex', parseInt(currentModuleIndex) - 1)
        }
    }

    function next() {
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
        }else{
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

    return (
        <ThemeProvider theme={Themes.flexRow}>
            <Flex>
                {/* Botão para voltar pro video anterior */}
                <BackOrForthButton className="backBtnDiv" onClick={back}>
                    <Back className="backBtn" size="1.8em" color="white" />
                </BackOrForthButton>
                <div className="currentVideoDiv">
                    {/* Vídeo atual */}
                    <Video url={`${localStorage.getItem('currentVideo')}`} title={VideosInfo.titles[0][1]} width={854} />
                    {/* Módulo da aula */}
                    <ThemeProvider theme={Themes.smallTitle}>
                        <Title className="currentVideoModule">{`${localStorage.getItem('currentVideoModule')}`}</Title>
                    </ThemeProvider>
                    {/* Título da aula */}
                    <ThemeProvider theme={Themes.bigTitle}>
                        <Title className="currentVideoTitle">{`${localStorage.getItem('currentVideoTitle')}`}</Title>
                    </ThemeProvider>
                </div>
                {/* Botão para avançar para o próximo video */}
                <BackOrForthButton className="nextBtnDiv" onClick={next}>
                    <Forward className="nextBtn" size="1.8em" color="white" />
                </BackOrForthButton>
            </Flex>
        </ThemeProvider>
    )
}

export default CurrentVideo
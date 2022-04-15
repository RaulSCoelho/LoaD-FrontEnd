import React, { useEffect } from "react";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"
import { IoChevronBackOutline as Back } from "react-icons/io5"
import NextVideos from "../components/NextVideos";
import VideosInfo from "../components/VideosInfo";
import ScrollVideosForward from "../components/ScrollVideosForward";
import ScrollVideosBack from "../components/ScrollVideosBack";
import CurrentVideo, { back, next } from "../components/CurrentVideo";
import { Flex } from "../components/Flex";
import { Box } from "../components/Box";
import { Title } from "../components/Title";
import { PreviousVideoBtnSmallVW } from "../components/PreviousVideoBtnSmallVW";
import { NextVideoBtnSmallVW } from "../components/NextVideoBtnSmallVW";

function Home() {
    useEffect(() => {
        if (localStorage.getItem('currentVideo') == null) {
            const currentVideo = document.querySelector('.currentVideo')
            const currentVideoTitle = document.querySelector('.currentVideoTitle')
            const currentVideoModule = document.querySelector('.currentVideoModule')

            currentVideo.src = VideosInfo.videos[0][0]
            currentVideoTitle.innerHTML = VideosInfo.titles[0][1]
            currentVideoModule.innerHTML = VideosInfo.titles[0][0]

            localStorage.setItem('currentVideo', VideosInfo.videos[0][0])
            localStorage.setItem('currentVideoIndex', 0)
            localStorage.setItem('currentVideoTitle', VideosInfo.titles[0][1])
            localStorage.setItem('currentVideoModule', VideosInfo.titles[0][0])
            localStorage.setItem('currentVideoModuleIndex', 0)
        }
    })

    return (<>
        <Flex width="100vw" justify="space-between">
            {/* Botão para voltar pro video anterior quando a tela fica menor */}
            <PreviousVideoBtnSmallVW className="previousVideoSmallVW" onClick={back}>
                <Back size="1.8em" color="white" />
            </PreviousVideoBtnSmallVW>
            {/* Botão para avançar para o próximo video quando a tela fica menor */}
            <NextVideoBtnSmallVW className="nextVideoSmallVW" onClick={next}>
                <Forward size="1.8em" color="white" />
            </NextVideoBtnSmallVW>
        </Flex>
        <Box>
            <Flex width="80vw" direction="column" margin="0px 0px 70px 0px">
                <CurrentVideo />
                <div className="nextVideos">
                    {VideosInfo.videos.map((lessons, i) => (
                        <Flex direction="column">
                            <Title fontSize="24px" margin="15px 0px 15px 0px" viewWidth="6vw">
                                {VideosInfo.titles[i][0]}
                            </Title>
                            <Flex justify="space-between">
                                <ScrollVideosBack module={i} />
                                <NextVideos module={i} lessons={lessons} thumbnail={VideosInfo.thumbnails[i]} titles={VideosInfo.titles[i]} />
                                <ScrollVideosForward module={i} />
                            </Flex>
                        </Flex>
                    ))}
                </div>
            </Flex>
        </Box>
    </>)
}

export default Home
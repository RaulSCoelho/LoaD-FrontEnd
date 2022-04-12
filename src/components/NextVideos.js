import React from "react";
import Themes from "./Themes";
import { ThemeProvider } from "styled-components";
import { Flex } from "./Flex";
import { Title } from "./Title";
import VideosInfo from "./VideosInfo";

function NextVideos(props) {

    function changeUrl(link, i) {
        const currentVideo = document.querySelector('.currentVideo')
        const currentVideoTitle = document.querySelector('.currentVideoTitle')
        const currentVideoModule = document.querySelector('.currentVideoModule')

        const videoTitle = props.titles[i + 1]
        const videoModule = props.titles[0]
        const videoModuleIndex = VideosInfo.videos.indexOf(props.lessons)

        currentVideo.src = link
        currentVideoTitle.innerHTML = videoTitle
        currentVideoModule.innerHTML = videoModule

        localStorage.setItem('currentVideo', link)
        localStorage.setItem('currentVideoIndex', i)
        localStorage.setItem('currentVideoTitle', videoTitle)
        localStorage.setItem('currentVideoModule', videoModule)
        localStorage.setItem('currentVideoModuleIndex', videoModuleIndex)

        currentVideo.src = link
    }

    return (
        <ThemeProvider theme={Themes.flexRow}>
            <Flex id={`nextVideosRow${props.row}`} className="nextVideosRow">
                {props.lessons.map((link, i) =>
                    <div className="thumbs">
                        <img className="thumb" onClick={() => changeUrl(link, i)} src={props.thumbnail[i]} alt={`Aula ${i}`} />
                        <ThemeProvider theme={Themes.smallSubTitle}>
                            <Title className="thumb">{props.titles[i + 1]}</Title>
                        </ThemeProvider>
                    </div>
                )}
            </Flex>
        </ThemeProvider>
    )
}

export default NextVideos
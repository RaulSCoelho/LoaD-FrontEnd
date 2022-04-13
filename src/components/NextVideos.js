import React from "react";
import { Flex } from "./Flex";
import { Title } from "./Title";

function NextVideos(props) {

    function changeUrl(link, i) {
        const currentVideo = document.querySelector('.currentVideo')
        const currentVideoTitle = document.querySelector('.currentVideoTitle')
        const currentVideoModule = document.querySelector('.currentVideoModule')

        const videoTitle = props.titles[i + 1]
        const videoModule = props.titles[0]
        const videoModuleIndex = props.module

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
        <Flex id={`nextVideosRow${props.module}`} transition="200ms" justify="space-between" overflow="scroll">
            {props.lessons.map((link, i) =>
                <div className="thumbs">
                    <img className="thumb" onClick={() => changeUrl(link, i)} src={props.thumbnail[i]} alt={`Aula ${i}`} />
                    <Title className="thumb" height="27.3px" maxWidth="282px" fontSize="16px" textAlign="left !important" color="#757575" margin="15px 0px 10px 0px" viewWidth="32px">
                        {props.titles[i + 1]}
                    </Title>
                </div>
            )}
        </Flex>
    )
}

export default NextVideos
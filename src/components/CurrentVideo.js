import React from "react";
import { Flex } from "./Flex";
import { Title } from "../components/Title";
import { ThemeProvider } from "styled-components";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"
import { IoChevronBackOutline as Back } from "react-icons/io5"
import Video from "../components/Video";
import VideosInfo from "../components/VideosInfo";
import Themes from "../components/Themes"

function CurrentVideo() {

    return (
        <ThemeProvider theme={Themes.flexRow}>
            <Flex>
                <div className="toggleVideo">
                    <Back size="1.8em" color="white" />
                </div>
                <div className="currentVideoDiv">
                    <Video className="currentVideo" url="https://www.youtube.com/embed/9W-M1qZW4Ww" title={VideosInfo.titles[0][1]} width={854} />
                    <ThemeProvider theme={Themes.smallTitle}>
                        <Title>{VideosInfo.titles[0][0]}</Title>
                    </ThemeProvider>
                    <ThemeProvider theme={Themes.bigTitle}>
                        <Title>{VideosInfo.titles[0][1]}</Title>
                    </ThemeProvider>
                </div>
                <div className="toggleVideo">
                    <Forward size="1.8em" color="white" />
                </div>
            </Flex>
        </ThemeProvider>
    )
}

export default CurrentVideo
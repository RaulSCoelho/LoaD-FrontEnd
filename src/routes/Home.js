import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Flex } from "../components/Flex";
import { ThemeProvider } from "styled-components";
import { Box } from "../components/Box";
import NextVideos from "../components/NextVideos";
import CurrentVideo from "../components/CurrentVideo";
import Themes from "../components/Themes"
import VideosInfo from "../components/VideosInfo";
import { Title } from "../components/Title";
import ScrollVideosForward from "../components/ScrollVideosForward";
import ScrollVideosBack from "../components/ScrollVideosBack";

function Home() {

    useEffect(() => {
        console.log(VideosInfo.videos[0][0])
        if (localStorage.getItem('currentVideo') == null) {
            localStorage.setItem('currentVideo', VideosInfo.videos[0][0])
        }
        if (localStorage.getItem('currentVideoModule') == null) {
            localStorage.setItem('currentVideoModule', VideosInfo.titles[0][0])
        }
        if (localStorage.getItem('currentVideoLesson') == null) {
            localStorage.setItem('currentVideoLesson', VideosInfo.titles[0][1])
        }
    })

    return (<>
        <Navbar />
        <ThemeProvider theme={Themes.box}>
            <Box>
                <ThemeProvider theme={Themes.flexColumn}>
                    <Flex>
                        <CurrentVideo />
                        <div className="nextVideos">
                            {VideosInfo.videos.map((lessons, i) => (
                                <Flex theme={Themes.flexColumn}>
                                    <ScrollVideosBack row={i} lessonsQnt={lessons.length} />
                                    <ThemeProvider theme={Themes.mediumTitle}>
                                        <Title>{VideosInfo.titles[i][0]}</Title>
                                    </ThemeProvider>
                                    <NextVideos row={i} lessons={lessons} thumbnail={VideosInfo.thumbnails[i]} titles={VideosInfo.titles[i]} />
                                    <ScrollVideosForward row={i} lessonsQnt={lessons.length} />
                                </Flex>
                            ))}
                        </div>
                    </Flex>
                </ThemeProvider>
            </Box>
        </ThemeProvider>
    </>)
}

export default Home
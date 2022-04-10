import React from "react";
import Navbar from "../components/Navbar";
import { Flex } from "../components/Flex";
import { ThemeProvider } from "styled-components";
import { Box } from "../components/Box";
import NextVideos from "../components/NextVideos";
import CurrentVideo from "../components/CurrentVideo";
import Themes from "../components/Themes"
import VideosInfo from "../components/VideosInfo";
import { Title } from "../components/Title";

function Home() {
    return (<>
        <Navbar />
        <ThemeProvider theme={Themes.box}>
            <Box>
                <ThemeProvider theme={Themes.flexColumn}>
                    <Flex>
                        <CurrentVideo />
                        <div className="nextVideos">
                            {VideosInfo.videos.map((module, i) => (
                                <Flex theme={Themes.flexColumn}>
                                    <ThemeProvider theme={Themes.mediumTitle}>
                                        <Title>{VideosInfo.titles[i][0]}</Title>
                                    </ThemeProvider>
                                    <NextVideos module={module} thumbnail={VideosInfo.thumbnails[i]} title={VideosInfo.titles[i]} />
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
import React, { useContext } from "react";
import { IoChevronForwardOutline as Forward } from "react-icons/io5"
import { IoChevronBackOutline as Back } from "react-icons/io5"
import NextVideos from "../components/NextVideos";
import ScrollVideosForward from "../components/ScrollVideosForward";
import ScrollVideosBack from "../components/ScrollVideosBack";
import CurrentVideo, { back, next } from "../components/CurrentVideo";
import { Flex } from "../components/Flex";
import { Box } from "../components/Box";
import { ResponsiveTitle } from "../components/ResponsiveTitle";
import { PreviousVideoBtnSmallVW } from "../components/PreviousVideoBtnSmallVW";
import { NextVideoBtnSmallVW } from "../components/NextVideoBtnSmallVW";
import { ClassesContext } from "../context/ClassesContext";
import { UserContext } from "../context/UserContext";

function Home() {
    const { user, setUser } = useContext(UserContext)
    const { classes } = useContext(ClassesContext)

    return (<>
        <Flex width="100%" justify="center">
            {/* Botão para voltar pro video anterior quando a tela fica menor */}
            <PreviousVideoBtnSmallVW className="previousVideoSmallVW" onClick={() => back(user, setUser, classes)}>
                <Back size="1.8em" color="white" />
            </PreviousVideoBtnSmallVW>
            {/* Botão para avançar para o próximo video quando a tela fica menor */}
            <NextVideoBtnSmallVW className="nextVideoSmallVW" onClick={() => next(user, setUser, classes)}>
                <Forward size="1.8em" color="white" />
            </NextVideoBtnSmallVW>
        </Flex>
        <Box className="home">
            <Flex width="80vw" direction="column" margin="0px 0px 70px 0px">
                <CurrentVideo />
                <div className="nextVideos">
                    {classes.map((module, i) => (
                        <Flex direction="column">
                            <ResponsiveTitle textAlign="left" fontSize="24px" margin="15px 0px 15px 0px" viewWidth="6vw">
                                {module.titles[0]}
                            </ResponsiveTitle>
                            <Flex justify="space-between">
                                <ScrollVideosBack module={i} />
                                <NextVideos module={i} lessons={module.videos} thumbnail={module.thumbnails} titles={module.titles} />
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
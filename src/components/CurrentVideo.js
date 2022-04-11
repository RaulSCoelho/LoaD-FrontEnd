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
                {/* Botão para voltar pro video anterior */}
                <div className="toggleVideo">
                    <Back size="1.8em" color="white" />
                </div>
                <div className="currentVideoDiv">
                    {/* Vídeo atual */}
                    <Video className="currentVideo" url={`${localStorage.getItem('currentVideo')}`} title={VideosInfo.titles[0][1]} width={854} />
                    {/* Módulo da aula */}
                    <ThemeProvider theme={Themes.smallTitle}>
                        <Title>{`${localStorage.getItem('currentVideoModule')}`}</Title>
                    </ThemeProvider>
                    {/* Título da aula */}
                    <ThemeProvider theme={Themes.bigTitle}>
                        <Title>{`${localStorage.getItem('currentVideoLesson')}`}</Title>
                    </ThemeProvider>
                </div>
                {/* Botão para avançar para o próximo video */}
                <div className="toggleVideo">
                    <Forward size="1.8em" color="white" />
                </div>
            </Flex>
        </ThemeProvider>
    )
}

export default CurrentVideo
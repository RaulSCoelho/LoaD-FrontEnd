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

    return (
        <ThemeProvider theme={Themes.flexRow}>
            <Flex>
                {/* Botão para voltar pro video anterior */}
                <BackOrForthButton>
                    <Back size="1.8em" color="white" />
                </BackOrForthButton>
                <div className="currentVideoDiv">
                    {/* Vídeo atual */}
                    <Video name="currentVideo" url={`${localStorage.getItem('currentVideo')}`} title={VideosInfo.titles[0][1]} width={854} />
                    {/* Módulo da aula */}
                    <ThemeProvider theme={Themes.smallTitle}>
                        <Title>{`${localStorage.getItem('currentVideoModule')}`}</Title>
                    </ThemeProvider>
                    {/* Título da aula */}
                    <ThemeProvider theme={Themes.bigTitle}>
                        <Title className="currentVideoTitle">{`${localStorage.getItem('currentVideoLesson')}`}</Title>
                    </ThemeProvider>
                </div>
                {/* Botão para avançar para o próximo video */}
                <BackOrForthButton>
                    <Forward size="1.8em" color="white" />
                </BackOrForthButton>
            </Flex>
        </ThemeProvider>
    )
}

export default CurrentVideo
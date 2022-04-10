import React from "react";
import Themes from "./Themes";
import { ThemeProvider } from "styled-components";
import { Flex } from "./Flex";
import { Title } from "./Title";

function NextVideos(props) {

    function changeUrl(link){
        //atualizar no banco o novo currentVideo
        window.location.reload()
    }

    return (
        <ThemeProvider theme={Themes.flexRow}>
            <Flex>
                {props.module.map((link, i) =>
                    <div className="thumbs">
                        <img className="thumb" onClick={() => changeUrl(link)} width="300px" src={props.thumbnail[i]} alt="Aula 1" />
                        <ThemeProvider theme={Themes.smallSubTitle}>
                            <Title className="thumb">{props.title[i + 1]}</Title>
                        </ThemeProvider>
                    </div>
                )}
            </Flex>
        </ThemeProvider>
    )
}

export default NextVideos
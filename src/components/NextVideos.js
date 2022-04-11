import React from "react";
import Themes from "./Themes";
import { ThemeProvider } from "styled-components";
import { Flex } from "./Flex";
import { Title } from "./Title";

function NextVideos(props) {

    function changeUrl(link, i) {
        localStorage.setItem('currentVideo', `${link}`)
        localStorage.setItem('currentVideoModule', `${props.titles[0]}`)
        localStorage.setItem('currentVideoLesson', `${props.titles[i + 1]}`)
        window.location.reload()
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
import React, { useContext } from "react";
import api from "../api";
import { ClassesContext } from "../context/ClassesContext";
import { UserContext } from "../context/UserContext";
import { Flex } from "./Flex";
import { ResponsiveTitle } from "./ResponsiveTitle";

function NextVideos(props) {
    const { user, setUser } = useContext(UserContext)
    const { classes } = useContext(ClassesContext)

    async function changeUrl(link, i) {
        const currentVideo = document.querySelector('.currentVideo')
        const currentVideoTitle = document.querySelector('.currentVideoTitle')
        const currentVideoModule = document.querySelector('.currentVideoModule')

        let newCurrentClass = classes[props.module].videos.indexOf(link)
        let newCurrentModule = props.module

        user.currentClass = newCurrentClass
        user.currentModule = newCurrentModule

        currentVideo.src = link
        currentVideoTitle.innerHTML = props.titles[i + 1]
        currentVideoModule.innerHTML = props.titles[0]

        await api.patch(`user/${user.username}`, {
            currentClass: newCurrentClass,
            currentModule: newCurrentModule
        }).then(res => {
            setUser(user)
        }).catch(err => {
            console.log(err.response.data)
        })
    }

    return (
        <Flex id={`nextVideosRow${props.module}`} transition="200ms" justify="space-between" overflow="scroll">
            {props.lessons.map((link, i) =>
                <div className="thumbs">
                    <img className="thumb" onClick={() => changeUrl(link, i)} src={props.thumbnail[i]} alt={`Aula ${i}`} />
                    <ResponsiveTitle className="thumb" height="27.3px" maxWidth="282px" fontSize="16px" textAlign="left" color="#757575" margin="15px 0px 10px 0px" viewWidth="32px">
                        {props.titles[i + 1]}
                    </ResponsiveTitle>
                </div>
            )}
        </Flex>
    )
}

export default NextVideos
import React, { useContext, useEffect, useState } from "react";
import api from "../api"
import { BiSend } from "react-icons/bi"
import { Flex } from "./Flex";
import { TextArea } from "./TextArea";
import { UserContext } from "../context/UserContext";
import { ResponsiveTitle } from "./ResponsiveTitle";

function Chat() {
    const { user } = useContext(UserContext)
    const username = user ? user.username : ""
    const [message, setMessage] = useState("")
    const [messageHeight, setMessageHeight] = useState("")
    const [chat, setChat] = useState("")

    const currentDay = new Date().getDate()
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()

    const day = `${String(currentDay).length === 1 ? `0${currentDay}` : currentDay}/${String(currentMonth).length === 1 ? `0${currentMonth + 1}` : currentMonth + 1}/${currentYear}`
    const time = `${String(hour).length === 1 ? '0' + hour : hour}:${String(minutes).length === 1 ? '0' + minutes : minutes}`

    let count1 = 0
    let count2 = 0
    let initialDay = day

    useEffect(() => {
        setInterval(getMessages, 1000)
    }, [user])

    async function getMessages() {
        await api.get('chat').then(res => {
            setChat(res.data)
        })
        document.querySelector('.chat').scrollTo(0, 1000)
    }

    async function sendMessage() {
        await api.post('chat', {
            message: message,
            username: username,
            day: day,
            time: time,
        })
        getMessages()
    }

    function textBox(e) {
        const textAreaHeight = e.style.height
        e.style.height = (e.value.length) + "px"
        setMessageHeight((Number(textAreaHeight.replace('px', '')) + 20) + "px")
        if (e.value.length === 0) setMessageHeight("54.5px")
    }

    return (
        <Flex direction="column" width="80%" height="85vh" bgColor="rgb(20, 20, 20)" borderRadius="10px" justify="end">
            <Flex className="chat" overflowY="scroll" overscrollBehavior="none" alignItems="unset">
                <Flex direction="column" padding="10px !important" justify="left">
                    {chat ? chat.map((chat) =>
                        chat.username === username ?
                            <Message
                                justify="right"
                                username={chat.username}
                                message={chat.message}
                                day={chat.day}
                                time={chat.time}
                            /> :
                            <Message
                                justify="left"
                                username={chat.username}
                                message={chat.message}
                                day={chat.day}
                                time={chat.time}
                            />
                    ) : <></>}
                </Flex>
            </Flex>
            <Flex height={messageHeight} minHeight="54.5px" maxHeight="110px" justify="space-evenly" bgColor="rgb(37, 37, 37)" borderRadius="10px" borderTopLeftRadius="0px" borderTopRightRadius="0px">
                <TextArea onInput={(e) => { setMessage(e.target.value); textBox(e.target) }} color="white" height="36px" width="80%" minHeight="36px"
                    maxHeight="100px" border="none" padding="5px" margin="10px 0 10px 0" bgColor="rgb(20, 20, 20)" />
                <Flex width="24px" height="24px" cursor="pointer" >
                    <BiSend onClick={sendMessage} color="white" size="1.5em" />
                </Flex>
            </Flex>
        </Flex>
    )

    function Message(props) {
        let messageDay = props.day
        if (messageDay === initialDay) {
            count1++
            count2 = 0
        } else {
            initialDay = props.day
            count2++
        }

        return (<>
            <Flex>
                <ResponsiveTitle fontSize="15px" viewWidth="4vw" color="#757575">
                    {props.day !== currentDay && (count1 === 1 || count2 === 1) ? props.day : ""}
                </ResponsiveTitle>
            </Flex>
            <Flex justify={props.justify} padding="10px 0 10px 0 !important">
                <Flex width="unset" maxWidth="380px" minWidth="180px" textAlign="right" display="unset" padding="5px !important" bgColor="rgb(65, 65, 65)" borderRadius="6px">
                    <Flex alignItems="end">
                        <Flex width="80%" direction="column">
                            <ResponsiveTitle textAlign="left !important" fontSize="15px" viewWidth="4vw" margin="0 0 3px 0" color="rgba(21, 255, 0, 0.692)" fontWeight="bold">
                                {props.username}
                            </ResponsiveTitle>
                            <ResponsiveTitle textAlign="left !important" fontSize="15px" viewWidth="4vw" margin="0 0 3px 0" wordBreak="break-word">
                                {props.message}
                            </ResponsiveTitle>
                        </Flex>
                        <Flex width="20%">
                            <ResponsiveTitle textAlign="right !important" fontSize="12px" viewWidth="4vw" margin="0 0 0 0" color="#757575">
                                {props.time}
                            </ResponsiveTitle>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>)
    }
}

export default Chat
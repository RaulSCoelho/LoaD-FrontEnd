import React, { useContext, useEffect, useState } from "react";
import api from "../api"
import { IoMdTrash } from "react-icons/io"
import { BiSend } from "react-icons/bi"
import { Flex } from "./Flex";
import { TextArea } from "./TextArea";
import { UserContext } from "../context/UserContext";
import { ResponsiveTitle } from "./ResponsiveTitle";

function Chat() {
    const { user } = useContext(UserContext)
    const User = user ? user : ""
    const [message, setMessage] = useState("")
    const [chat, setChat] = useState("")

    const currentDay = new Date().getDate()
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()

    const day = `${String(currentDay).length === 1 ? `0${currentDay}` : currentDay}/${String(currentMonth).length === 1 ? `0${currentMonth + 1}` : currentMonth + 1}/${currentYear}`
    const time = `${String(hour).length === 1 ? `0${hour}` : hour}:${String(minutes).length === 1 ? `0${minutes}` : minutes}`

    let dayChange = false
    let messageDay = ""

    useEffect(() => {
        setInterval(getMessages, 1000)
    }, [user])

    async function getMessages() {
        await api.get('chat').then(res => {
            setChat(res.data)
        })
    }

    async function sendMessage() {
        const textArea = document.querySelector('.textArea')
        const chat = document.querySelector('.chat')
        await api.post('chat', {
            message: message,
            user: {
                username: User.username,
                admin: User.admin
            },
            day: day,
            time: time,
        })
        getMessages()
        textArea.value = ""
        textBox(textArea)
        chat.style = "scroll-behavior: smooth;"
        setTimeout(() => chat.scrollTop = chat.scrollHeight, 300)
    }

    function textBox(e) {
        if (e.value.length * 8.5 < e.offsetWidth) {
            e.style.height = "36px"
        } else {
            e.style.height = "auto"
            e.style.height = e.scrollHeight + "px"
        }
    }

    async function removeMessage(id) {
        await api.delete(`chat/${id}`).then(res => {
            getMessages()
        })
    }

    function enterPressed(e) {
        if (e.keyCode === 13) {
            sendMessage()
        }
    }

    function preventBreakLine(e) {
        const textArea = document.querySelector('.textArea')
        if (e.key === 'Enter') {
            e.preventDefault()
            textArea.value = ""
            textBox(e.target)
        }
    }

    return (
        <Flex direction="column" width="80%" height="85vh" bgColor="rgb(20, 20, 20)" borderRadius="10px" justify="end">
            <Flex className="chat" overflowY="scroll" overscrollBehavior="none" alignItems="unset">
                <Flex direction="column" padding="10px !important" justify="left">
                    {chat ? chat.map((chat) =>
                        chat.user.username === User.username ?
                            <Message
                                justify="right"
                                username={chat.user.username}
                                admin={chat.user.admin}
                                message={chat.message}
                                day={chat.day}
                                time={chat.time}
                                removeMessage={() => removeMessage(chat._id)}
                            /> :
                            <Message
                                justify="left"
                                username={chat.user.username}
                                admin={chat.user.admin}
                                message={chat.message}
                                day={chat.day}
                                time={chat.time}
                                removeMessage={() => removeMessage(chat._id)}
                            />
                    ) : <></>}
                </Flex>
            </Flex>
            <Flex height="auto" justify="space-evenly" bgColor="rgb(37, 37, 37)" borderRadius="10px" borderTopLeftRadius="0px" borderTopRightRadius="0px">
                <TextArea
                    className="textArea"
                    placeholder="Message"
                    onInput={(e) => { setMessage(e.target.value); textBox(e.target) }}
                    onKeyUp={(e) => enterPressed(e)}
                    onKeyDown={(e) => preventBreakLine(e)}
                    color="white"
                    width="80%"
                    height="36px"
                    maxHeight="100px"
                    border="none"
                    padding="5px"
                    margin="10px 0 10px 0"
                    bgColor="rgb(20, 20, 20)"
                />
                <Flex width="24px" height="24px" cursor="pointer" >
                    <BiSend onClick={sendMessage} color="white" size="1.5em" />
                </Flex>
            </Flex>
        </Flex>
    )

    function Message(props) {

        if (messageDay !== props.day) {
            messageDay = props.day
            dayChange = true
        } else {
            dayChange = false
        }

        return (<>
            <Flex>
                <ResponsiveTitle fontSize="15px" viewWidth="4vw" color="#757575">
                    {dayChange ? props.day : ""}
                </ResponsiveTitle>
            </Flex>
            <Flex justify={props.justify} padding="10px 0 10px 0 !important">
                <Flex width="unset" maxWidth="380px" minWidth="180px" textAlign="right" display="unset" padding="5px !important" bgColor="rgb(65, 65, 65)" borderRadius="6px">
                    <Flex direction="column" alignItems="end">
                        <Flex>
                            <ResponsiveTitle
                                textAlign="left !important" fontSize="15px" viewWidth="4vw" fontWeight="bold" margin="0 0 3px 0"
                                color={props.admin ? "rgba(100, 0, 194, 0.692)" : props.username === User.username ? "rgba(0, 255, 191, 0.692)" : "rgba(21, 255, 0, 0.692)"}>
                                {props.username}
                            </ResponsiveTitle>
                            {User.admin || (props.username === User.username) ?
                                <Flex width="20%" justify="right" cursor="pointer">
                                    <IoMdTrash
                                        color="#757575"
                                        onMouseOver={(e) => e.target.style = "color: rgba(255, 0, 0, 0.692);"}
                                        onMouseOut={(e) => e.target.style = "color: #757575;"}
                                        onClick={props.removeMessage}
                                    />
                                </Flex> : <></>
                            }
                        </Flex>
                        <Flex alignItems="end">
                            <ResponsiveTitle textAlign="left !important" fontSize="15px" viewWidth="4vw" margin="0 0 3px 0" wordBreak="break-word">
                                {props.message}
                            </ResponsiveTitle>
                            <Flex width="20%" direction="column" justify="space-between" padding="5px 0 0 0">
                                <ResponsiveTitle textAlign="right !important" fontSize="12px" viewWidth="4vw" margin="0 0 0 0" color="#757575">
                                    {props.time}
                                </ResponsiveTitle>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>)
    }
}

export default Chat
import React, { useState } from 'react';
import styled from "styled-components"
import { IoMenuOutline as MenuIcon, IoClose as CloseIcon } from "react-icons/io5"

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const [scrollBack, setScrollBack] = useState(false)
    const [scrollForward, setScrollForward] = useState(false)
    function showSidebar() {
        const scrollBackIcon = document.querySelectorAll('.iconScrollVideosBack')
        const scrollForwardIcon = document.querySelectorAll('.iconScrollVideosForward')
        const previousVideo = document.querySelector('.previousVideo')
        const nextVideo = document.querySelector('.nextVideo')
        let viewWidth = window.innerWidth
        setScrollBack(!scrollBack)
        setScrollForward(!scrollForward)
        setSidebar(!sidebar)

        
        for (let i = 0; i < scrollBackIcon.length; i++) {
            if (scrollBack === false) {
                scrollBackIcon[i].style = "display: none;"
                previousVideo.style = "display: none;"
                nextVideo.style = "display: none;"
                if(viewWidth < 768){
                    scrollForwardIcon[i].style = "display: none;"
                }
            } else {
                scrollBackIcon[i].style = "display: unset;"
                previousVideo.style = "display: flex;"
                nextVideo.style = "display: flex;"
                if(viewWidth < 768){
                    scrollForwardIcon[i].style = "display: unset;"
                }
            }
        }
    }

    return (<>
        <NavbarTop>
            <div onClick={showSidebar} className='menuIcon'>
                <MenuIcon size="2em" color='white' />
            </div>
        </NavbarTop>
        <Menu>
            <div onClick={showSidebar} className={sidebar ? 'menu-active' : 'menu'}>
                <CloseIcon className='closeMenu' size="2em" color='white' />
            </div>
        </Menu>
    </>)
}

export const NavbarTop = styled.div`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    padding: 10px;

    .menuIcon{
        width: 50px;
        height: 50px;
        padding: 5px;
        border: 1px solid white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;

        &:hover{
            background-color: rgba(0, 0, 0, 0.7);
            border: none;
        }

        @media (max-width: 1245px){
            border: 1px solid #757575;
        }
    }

    @media (max-width: 1245px){
        background-color: black;
    }
`
export const Menu = styled.div`
    .menu, .menu-active{
        background-color: rgb(28, 28, 28);
        width: 400px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: -200%;
        transition: 550ms;
    }

    .menu-active{
        transition: 350ms;
        left: 0;

        @media (max-width: 768px){
            width: 100vw;
        }
    }

    .closeMenu{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`

export default Navbar
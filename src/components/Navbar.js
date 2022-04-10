import React, { useState } from 'react';
import styled from "styled-components"
import { CgMenu, CgClose } from "react-icons/cg"

function Navbar() {
    const [sidebar, setSidebar] = useState(true)
    function showSidebar() {
        setSidebar(!sidebar)
    }

    return (<>
        <NavbarTop>
            <div onClick={showSidebar} className='menuIcon'>
                <CgMenu size="1.5em" color='white' />
            </div>
        </NavbarTop>
        <Menu>
            <div onClick={showSidebar} className={sidebar ? 'menu' : 'menu-active'}>
                <CgClose className='closeMenu' size="2em" color='whhite' />
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
        left: -100%;
        transition: 550ms;
    }

    .menu-active{
        transition: 350ms;
        left: 0;
    }

    .closeMenu{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`

export default Navbar
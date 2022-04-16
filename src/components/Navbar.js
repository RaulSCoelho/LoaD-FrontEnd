import React, { useState } from 'react';
import styled from "styled-components"
import { IoMenuOutline as MenuIcon, IoClose as CloseIcon } from "react-icons/io5"
import { FiLogOut as LogOut } from "react-icons/fi"
import api from '../api';
import { Flex } from './Flex';
import { Redirect } from './Redirect';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    function logout() {
        api.get('/user/logout')
        Redirect('/')
    }

    return (<>
        <NavbarTop>
            <Flex justify="space-between">
                <div onClick={() => setSidebar(!sidebar)} className='menuIcon'>
                    <MenuIcon size="2em" color='white' />
                </div>
                <div className='logoutBtn'>
                    <LogOut onClick={logout} color="white" size="2em" />
                </div>
            </Flex>
        </NavbarTop>
        <Menu>
            <div className={sidebar ? 'menu-active' : 'menu'}>
                <CloseIcon onClick={() => setSidebar(!sidebar)} className='closeMenu' size="2em" color='white' />
            </div>
        </Menu>
    </>)
}

export const NavbarTop = styled.div`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    padding: 10px;

    .logoutBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .menuIcon{
        width: 50px;
        height: 50px;
        padding: 5px;
        border: 1px solid white;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover{
            background-color: rgba(0, 0, 0, 0.7);
            border: none;
        }

        @media (max-width: 1258px){
            border: 1px solid #757575;
        }
    }

    @media (max-width: 1258px){
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
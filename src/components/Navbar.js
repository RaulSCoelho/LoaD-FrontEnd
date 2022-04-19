import React, { useContext, useState } from 'react';
import styled from "styled-components"
import { IoMenuOutline as MenuIcon, IoClose as CloseIcon } from "react-icons/io5"
import { MdArrowDropDown as DropDown, MdArrowDropUp as DropUp } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { FiLogOut as LogOut } from "react-icons/fi"
import api from '../api';
import { Flex } from './Flex';
import { UserContext } from '../context/UserContext';
import { ResponsiveTitle } from './ResponsiveTitle';
import { Border } from './Border';
import { Redirect } from './Redirect';

function Navbar() {
    const { user } = useContext(UserContext)
    const userSex = user ? user.sex : ""

    const profileImg = {
        male: "https://chi01pap002files.storage.live.com/y4mBJY9JvJLqTfZlCQeUBsgM9_SZ8r6euTxwT2YfdR_QVPDK61keIzYY_TYoAj0SjK19nOydvonoHSMTk4Ej5nf326ALtRFeS26VbtHT0eZPmdpQKhtWaXUbwdkiVqdFBykl2leBygn8FTZiVYQ0S8bxigcN4vNHv4VwowmCJjPtHFM2ND162IOYP-IDESerMX_?width=192&height=192&cropmode=none",
        female: "https://chi01pap002files.storage.live.com/y4maWnXAKtwb8R_pHL9FxGmY6bo8UTbCIsEmPHfCLC9BcCTCSYsdofVm5ZcS8OIE_hvv1AdWe906KCdd08bOtu-dcKbadPF700LL_EgzbnaeTDqkp-gNNqfDUTt8UcIkP1B8vr6DKB5aJHxEwGNNjfWTS4mUC2JZ2Kkcq-o5eJi-5XSe2oI-quFVn-VK-ihnJIv?width=192&height=192&cropmode=none"
    }

    const [sidebar, setSidebar] = useState(false)
    const [configs, setConfigs] = useState(false)
    const [dropUp, setDropUp] = useState(false)

    async function logout() {
        await api.get('user/logout').then(res => {
            console.log(res.data)
            Redirect('/')
        }).catch(err => {
            console.log(err.response.data)
        })
    }

    return (<>
        <NavbarTop>
            <Flex justify="space-between">
                <div onClick={() => setSidebar(!sidebar)} className='menuIcon'>
                    <MenuIcon size="2em" color='white' />
                </div>
                <Flex onClick={() => { setConfigs(!configs); setDropUp(!dropUp) }} className='configsBtn' width="unset">
                    <img className='profileImg' src={userSex === "female" ? profileImg.female : profileImg.male} width="50" height="50" alt="" />
                    <DropDown size="1.5rem" />
                </Flex>
            </Flex>
        </NavbarTop>
        <Configs>
            <DropUp className={dropUp ? 'dropUp-active' : 'dropUp'} color='rgb(28, 28, 28)' />
            <div className={configs ? 'configs-active' : 'configs'}>
                <Flex className='configsOptions'>
                    <ResponsiveTitle textAlign="right" fontSize="20px" margin="0 10px 2px 0" viewWidth="10vw">Profile</ResponsiveTitle>
                    <CgProfile color="white" size="2em" />
                </Flex>
                <Border />
                <Flex className='configsOptions' onClick={logout}>
                    <ResponsiveTitle textAlign="right" fontSize="20px" margin="0 10px 2px 0" viewWidth="10vw">Log Out</ResponsiveTitle>
                    <LogOut color="white" size="2em" />
                </Flex>
            </div>
        </Configs>
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

    .configsBtn{
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
        .profileImg{
            border: 2px solid white;
            background-color: white;
            border-radius: 50%;
        }
    }
`

export const Configs = styled.div`
    .configs, .configs-active{
        background-color: rgb(28, 28, 28);
        width: 170px;
        padding: 5px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: -200%;
        right: 30px;
    }

    .configs-active{
        top: 70px;
    }

    .dropUp, .dropUp-active{
        width: 120px;
        height: 60px;
        position: fixed;
        top: -200%;
        right: -1px;
    }

    .dropUp-active{
        top: 38px;
    }

    .configsOptions{
        width: 80%;
        cursor: pointer;
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
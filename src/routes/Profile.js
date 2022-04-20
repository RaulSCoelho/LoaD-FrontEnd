import React, { useContext } from "react";
import { Border } from "../components/Border";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { ResponsiveTitle } from "../components/ResponsiveTitle";
import { UserContext } from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext)
    const userInfo = user ? user : ""

    return (
        <Box className="profile" minHeight="calc(100vh - 70px)" mediaMarginTop="0">
            <Flex direction="column" width="50%">
                <ResponsiveTitle>Dados Pessoais</ResponsiveTitle>
                <InputProfile label="Name:" type="text" value={userInfo.fullname} />
                <InputProfile label="Username:" type="text" value={userInfo.username} />
                <InputProfile label="Email:" type="text" value={userInfo.email} />
                <InputProfile label="Password:" type="password" value="*************" />
                <InputProfile label="Confirm Password:" type="password" value="*************" display="none" />
                <Border width="300px" margin="10px 0 10px 0" />
                <Button bgColor="transparent" hoverBg="rgba(255, 255, 255, 0.2)" color="white" padding="0px 5px 5px 5px" border="none">Change</Button>
            </Flex>
        </Box>
    )
}

export function InputProfile(props) {
    return (
        <Flex direction="column" display={props.display}>
            <Border width="300px" margin="10px 0 10px 0" />
            <Flex direction="column">
                <ResponsiveTitle width="200px" textAlign="left !important" fontSize="18px" viewWidth="4vw" margin="0 0 0 0">
                    {props.label}
                </ResponsiveTitle>
                <Input type={props.type} value={props.value} padding="0 0 0 0px" width="200px" color="white" bgColor="transparent" border="none" disabled />
            </Flex>
        </Flex>
    )
}

export default Profile
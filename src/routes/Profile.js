import React from "react";
import { useSelector } from "react-redux";
import AddClasses from "../components/AddClasses";
import { Box } from "../components/Box";
import CreateUser from "../components/CreateUser";
import UserData from "../components/UserData";

function Profile() {
    const isAdmin = useSelector(state => state.admin)

    return (
        <Box className="profile" minHeight="calc(100vh - 70px)" mediaMarginTop="0">
            <UserData />
            {isAdmin ? <CreateUser /> : <></>}
            {isAdmin ? <AddClasses /> : <></>}
        </Box>
    )

}

export default Profile
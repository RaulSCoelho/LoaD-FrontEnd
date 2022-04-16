import React from "react";
import { Box } from "../components/Box";
import { Flex } from "../components/Flex";
import LoginForm from "../components/LoginForm";

function Login() {
    return (
        <Box minHeight="100vh">
            <Flex justify="center">
                <LoginForm />
            </Flex>
        </Box>
    )
}

export default Login